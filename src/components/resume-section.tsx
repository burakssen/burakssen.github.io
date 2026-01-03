import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export const ResumeSection = () => (
  <motion.div 
    className="mt-6 glass-card p-8 md:p-10 relative overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    {/* Decorative background element */}
    <div className="absolute -right-20 -top-20 w-64 h-64 bg-zinc-100/50 dark:bg-zinc-800/50 rounded-full blur-3xl group-hover:bg-zinc-200/50 dark:group-hover:bg-zinc-700/50 transition-colors duration-500" />
    
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div className="flex-1">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            View My Professional Journey
          </h3>
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-lg text-lg">
          Download my resume to explore my full professional background, detailed qualifications, and technical achievements.
        </p>
      </div>
      
      <motion.a
        href="/cv.pdf"
        download="Burak_Sen_Resume.pdf"
        className="flex items-center justify-center px-8 py-4 font-semibold rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg shadow-zinc-900/20 dark:shadow-white/10 hover:shadow-xl hover:shadow-zinc-900/30 dark:hover:shadow-white/20 transition-all duration-300 min-w-[200px]"
      >
        <Download className="w-5 h-5 mr-2.5" />
        Download Resume
      </motion.a>
    </div>
  </motion.div>
);