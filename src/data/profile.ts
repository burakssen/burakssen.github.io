import { SiGithub, SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail, FileText } from "lucide-react";

export const profileData = {
  profile_image: "https://avatars.githubusercontent.com/u/43742977",
  username: "burakssen",
  firstname: "Burak",
  lastname: "Şen",
  bio: "Full Stack Software Engineer",
  introduction: "I am a software engineer focused on building functional and efficient applications. I work across the full stack and enjoy solving technical challenges through clean and maintainable code.",
  location: {
    city: "Munich",
    country: "Germany",
  },
  social_media: [
    {
      url: "https://github.com/burakssen",
      icon: SiGithub,
      name: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/burak-ssen/",
      icon: SiLinkedin,
      name: "LinkedIn",
    },
    {
      url: "https://www.instagram.com/burak.ssen/",
      icon: SiInstagram,
      name: "Instagram",
    },
    {
      url: "mailto:buraksen7@hotmail.com",
      icon: Mail,
      name: "Email",
    },
    {
      url: "/cv.pdf",
      icon: FileText,
      name: "Resume",
      download: true,
    },
  ],
};
