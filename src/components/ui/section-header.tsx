import { motion } from "framer-motion";

export const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <motion.div 
    className="flex items-center mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="ml-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
      {title}
    </h2>
    <div className="flex-1 h-px ml-4 bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-700" />
  </motion.div>
);
