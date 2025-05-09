import {
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/Icons.component";

const followSocials = [
  {
    id: crypto.randomUUID(),
    title: "Instagram",
    Icon: InstagramIcon,
    href: "https://instagram.com",
  },
  {
    id: crypto.randomUUID(),
    title: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com",
  },
  {
    id: crypto.randomUUID(),
    title: "Youtube",
    Icon: YoutubeIcon,
    href: "https://youtube.com",
  },
];

export { followSocials };
