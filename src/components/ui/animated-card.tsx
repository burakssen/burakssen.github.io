import { motion } from "framer-motion";
import { ReactNode } from "react";

export const AnimatedCard = ({ children, index }: { children: ReactNode; index?: number }) => (
  <motion.div
    className="h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index !== undefined ? index * 0.1 : 0 }}
  >
    {children}
  </motion.div>
);
