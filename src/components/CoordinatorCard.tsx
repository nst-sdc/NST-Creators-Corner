import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface CoordinatorCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram: string;
    linkedin: string;
    twitter: string;
  };
}

export default function CoordinatorCard({ name, role, image, bio, socials }: CoordinatorCardProps) {
  return (
    <div className="bg-white dark:bg-navy text-gray-800 dark:text-white rounded-xl shadow-lg overflow-hidden transition-colors">

      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:w-48 object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{role}</div>
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">{bio}</p>
          
          <div className="mt-4 flex space-x-4">
            <a
              href={`https://instagram.com/${socials.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`https://linkedin.com/in/${socials.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`https://twitter.com/${socials.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
