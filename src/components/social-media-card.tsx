import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiInstagram, SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

const socialmediaprops = {
    profile_image: "https://avatars.githubusercontent.com/u/43742977",
    username: "burakssen",
    firstname: "Burak",
    lastname: "Şen",
    bio: "Full Stack Software Engineer",
    social_media: {
        github: "https://github.com/burakssen",
        linkedin: "https://www.linkedin.com/in/burak-ssen/",
        instagram: "https://www.instagram.com/burak.ssen/",
    },
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
                        <AvatarImage src={socialmediaprops.profile_image} alt={socialmediaprops.username} className="w-full h-full object-cover" />
                        <AvatarFallback className="w-full h-full flex items-center justify-center">
                            {socialmediaprops.username}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-bold">
                            {socialmediaprops.firstname} {socialmediaprops.lastname}
                            <span className="text-zinc-700 text-md font-medium pl-1">@{socialmediaprops.username}</span>
                        </h1>
                        <p className="text-gray-700 mt-1">
                            <span className="text-xl font-semibold text-blue-600 rounded-md">{socialmediaprops.bio}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6 mt-4 sm:mt-0">
                    <a 
                        href={socialmediaprops.social_media.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-transform transform hover:scale-110"
                    >
                        <SiGithub className="w-8 h-8 text-blue-600 hover:text-blue-800" />
                    </a>
                    <a 
                        href={socialmediaprops.social_media.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-transform transform hover:scale-110"
                    >
                        <SiLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-700" />
                    </a>
                    <a 
                        href={socialmediaprops.social_media.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-transform transform hover:scale-110"
                    >
                        <SiInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700" />
                    </a>
                    <a 
                        href={`mailto:buraksen7@hotmail.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <Mail className="w-8 h-8 text-red-500 hover:text-red-700" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export { SocialMediaCard };
