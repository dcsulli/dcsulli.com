import {
  FaSpotify,
  FaSoundcloud,
  FaBandcamp,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

const socialLinks = [
  {
    name: "Spotify",
    url: "https://spotify.com",
    icon: FaSpotify,
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/dcsulli",
    icon: FaSoundcloud,
  },
  {
    name: "Bandcamp",
    url: "https://bandcamp.com/dcsulli",
    icon: FaBandcamp,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/dc_sulli",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@Dcsulli",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@dcsulli",
    icon: FaTiktok,
  },
  {
    name: "X",
    url: "https://x.com/dcsulli_music",
    icon: FaXTwitter,
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/dcsulli.bsky.social",
    icon: SiBluesky,
  },
  {
    name: "GitHub",
    url: "https://github.com/dcsulli",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/davidcsulli",
    icon: FaLinkedin,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-5">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:opacity-70 transition"
            aria-label={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}