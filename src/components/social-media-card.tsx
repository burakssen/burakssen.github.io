import { SiGithub, SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail, FileText, MapPin, ArrowUpRight } from "lucide-react";
const socialmediaprops = {
  profile_image: "https://avatars.githubusercontent.com/u/43742977",
  username: "burakssen",
  firstname: "Burak",
  lastname: "Şen",
  bio: "Full Stack Software Engineer",
  social_media: [
    {
      url: "https://github.com/burakssen",
      icon: SiGithub,
      name: "GitHub",
      color: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    },
    {
      url: "https://www.linkedin.com/in/burak-ssen/",
      icon: SiLinkedin,
      name: "LinkedIn",
      color: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    },
    {
      url: "https://www.instagram.com/burak.ssen/",
      icon: SiInstagram,
      name: "Instagram",
      color: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    },
    {
      url: "mailto:buraksen7@hotmail.com",
      icon: Mail,
      name: "Email",
      color: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    },
    {
      url: "/cv.pdf",
      icon: FileText,
      name: "Resume",
      download: true,
      color: "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    },
  ],
  location: {
    city: "Munich",
    country: "Germany",
  },
};

const SocialMediaCard = () => {
  return (
    <div 
      className="w-full bg-white/50 dark:bg-zinc-800/30 backdrop-blur-sm rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 p-6 md:p-8 shadow-sm"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="p-0.5 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-500">
            <div className="rounded-full p-0.5 bg-white dark:bg-zinc-900">
              <img
                src={socialmediaprops.profile_image}
                alt={socialmediaprops.username}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-white dark:border-zinc-800 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
              {socialmediaprops.firstname} {socialmediaprops.lastname}
            </h1>
            <p className="mt-2 text-lg text-zinc-800 dark:text-zinc-100">
              {socialmediaprops.bio}
            </p>
            
            {/* Location and username */}
            <div className="mt-3 flex items-center text-sm text-zinc-700 dark:text-zinc-300">
              <MapPin className="w-4 h-4 mr-1.5" />
              <span>
                {socialmediaprops.location.city}, {socialmediaprops.location.country}
              </span>
              <span className="mx-2 text-zinc-500 dark:text-zinc-400">•</span>
              <span>@{socialmediaprops.username}</span>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              {socialmediaprops.social_media.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target={item.download ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  download={item.download ? item.name : undefined}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${item.color}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="ml-2">{item.name}</span>
                  <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 opacity-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SocialMediaCard };
