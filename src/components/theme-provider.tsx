import { createContext, useCallback, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (e) {
      console.warn('Failed to save theme preference', e);
    }
  }, [storageKey]);

  // Apply theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (theme: Theme) => {
      const isDark = theme === 'dark' || 
                    (theme === 'system' && prefersDark.matches);
      
      root.classList.toggle('dark', isDark);
      root.classList.toggle('light', !isDark);
    };

    applyTheme(theme);

    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    prefersDark.addEventListener('change', handleSystemThemeChange);
    return () => prefersDark.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
