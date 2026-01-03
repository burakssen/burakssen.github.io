import { MapPin, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profile";

const SocialMediaCard = () => {
  const { firstname, lastname, bio, introduction, location, social_media, profile_image, username } = profileData;

  return (
    <div className="w-full glass-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        {/* Avatar */}
        <div className="relative flex-shrink-0 group">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-400/30 to-zinc-100/30 dark:from-white/10 dark:to-transparent rounded-full blur-2xl opacity-50" />
          
          <div className="relative rounded-full shadow-xl">
            <div className="rounded-full bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl overflow-hidden">
              <img
                src={profile_image}
                alt={username}
                className="w-52 h-52 md:w-48 md:h-48 rounded-full object-cover shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent tracking-tight">
              {firstname} {lastname}
            </h1>
            <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300 font-medium">{bio}</p>
            
            {/* Location and username */}
            <div className="mt-4 flex items-center text-sm text-zinc-600 dark:text-zinc-400 bg-white/30 dark:bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-sm">
              <MapPin className="w-4 h-4 mr-1.5" />
              <span>{location.city}, {location.country}</span>
              <span className="mx-2 opacity-50">•</span>
              <span>@{username}</span>
            </div>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {introduction}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              {social_media.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target={item.download ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  download={item.download ? item.name : undefined}
                  className="group flex items-center px-4 py-2 text-sm font-medium rounded-xl bg-white/40 dark:bg-black/40 hover:bg-white/60 dark:hover:bg-black/60 border border-white/20 dark:border-white/10 text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="ml-2">{item.name}</span>
                  <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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
