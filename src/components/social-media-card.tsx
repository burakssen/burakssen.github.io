import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { Mail, FileText, MapPin } from "lucide-react";

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
      style:
        "w-6 h-6 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition-all",
    },
    {
      url: "https://www.linkedin.com/in/burakssen/",
      icon: SiLinkedin,
      style:
        "w-6 h-6 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all",
    },
    {
      url: "https://www.instagram.com/burakssen/",
      icon: SiInstagram,
      style:
        "w-6 h-6 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-all",
    },
    {
      url: "mailto:buraksen7@hotmail.com",
      icon: Mail,
      style:
        "w-6 h-6 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-all",
    },
    {
      url: "https://burakssen.com/cv.pdf",
      icon: FileText,
      style:
        "w-6 h-6 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-all",
    },
  ],
  location: {
    city: "Munich",
    country: "Germany",
  },
};

const SocialMediaCard = () => {
  return (
    <div className="w-full bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-md">
      {/* Top border */}
      <div className="h-2 bg-black dark:bg-white w-full"></div>

      <div className="p-4 sm:p-6 md:p-8 w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
          {/* Avatar - moved to left on all screen sizes */}
          <div className="shrink-0">
            <Avatar className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-300 dark:border-gray-700 shadow">
              <AvatarImage
                src={socialmediaprops.profile_image}
                alt={socialmediaprops.username}
                className="w-full h-full object-cover"
              />
              <AvatarFallback className="text-2xl font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-900">
                {socialmediaprops.firstname[0]}
                {socialmediaprops.lastname[0]}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Info section */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-3 text-center sm:text-left w-full">
              {/* Name and bio */}
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                  {socialmediaprops.firstname} {socialmediaprops.lastname}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-1">
                  {socialmediaprops.bio}
                </p>
              </div>

              {/* Location and username */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>
                    {socialmediaprops.location.city},{" "}
                    {socialmediaprops.location.country}
                  </span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>@{socialmediaprops.username}</span>
              </div>

              {/* Social media icons */}
              <div className="flex justify-center sm:justify-start gap-4 mt-2">
                {socialmediaprops.social_media.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label={`Visit ${social.url}`}
                  >
                    <social.icon className={social.style} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SocialMediaCard };
