import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { Mail, File } from "lucide-react";

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
      style: "w-8 h-8 text-blue-600 hover:text-blue-800",
    },
    {
      url: "https://www.linkedin.com/in/burakssen/",
      icon: SiLinkedin,
      style: "w-8 h-8 text-blue-500 hover:text-blue-700",
    },
    {
      url: "https://www.instagram.com/burakssen/",
      icon: SiInstagram,
      style: "w-8 h-8 text-pink-500 hover:text-pink-700",
    },
    {
      url: "mailto:buraksen7@hotmail.com",
      icon: Mail,
      style: "w-8 h-8 text-red-500 hover:text-red-700",
    },
    {
      url: "https://burakssen.com/cv.pdf",
      icon: File,
      style: "w-8 h-8 text-green-500 hover:text-green-700",
    },
  ],
  location: {
    city: "Munich",
    country: "Germany",
  },
};

const SocialMediaCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-md mx-auto">
      <div className="sm:flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-6 mb-4 sm:mb-0">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={socialmediaprops.profile_image}
              alt={socialmediaprops.username}
              className="w-full h-full object-cover hover:opacity-80 hover:shadow-lg"
            />
            <AvatarFallback className="w-full h-full flex items-center justify-center">
              {socialmediaprops.username}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">
              {socialmediaprops.firstname} {socialmediaprops.lastname}
              <span className="text-zinc-700 text-md font-medium pl-1">
                @{socialmediaprops.username}
              </span>
            </h1>
            <p className="text-gray-700 mt-1">
              <span className="text-xl font-semibold text-blue-600 rounded-md">
                {socialmediaprops.bio}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-evenly space-x-6 mt-4 sm:mt-0">
          {socialmediaprops.social_media.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <social.icon className={social.style} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SocialMediaCard };
