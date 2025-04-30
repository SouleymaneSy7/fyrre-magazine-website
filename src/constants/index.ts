import {
  AppleIcon,
  FacebookIcon,
  InstagramIcon,
  RSSIcon,
  SoundCloudIcon,
  SpotifyIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/Icons.component";

export const CONTENTS_DIR = "contents";
export const MDX_EXTENSION = ".mdx";

const navbarList = ["magazine", "podcast", "authors"];

const FooterHeading = "Design News to your inbox";

const FooterLinkList1 = [
  {
    id: 0,
    title: "Art",
    href: "/art",
  },
  {
    id: 1,
    title: "Design",
    href: "/design",
  },
  {
    id: 2,
    title: "Architecture",
    href: "/architecture",
  },
];

const FooterLinkList2 = [
  {
    id: 3,
    title: "Magazine",
    href: "/magazine",
  },
  {
    id: 4,
    title: "Podcast",
    href: "/podcast",
  },
  {
    id: 5,
    title: "Authors",
    href: "/authors",
  },
];

const FooterLinkList3 = [
  {
    id: 6,
    title: "Styleguide",
    href: "/style-guide",
  },
  {
    id: 7,
    title: "Licensing",
    href: "/licensing",
  },
  {
    id: 8,
    title: "Changelog",
    href: "/changelog",
  },
];

const socialIcons = [
  { id: 0, Icon: InstagramIcon, href: "https://instagram.com" },
  { id: 1, Icon: TwitterIcon, href: "https://twitter.com" },
  { id: 2, Icon: YoutubeIcon, href: "https://youtube.com" },
  { id: 3, Icon: RSSIcon, href: "https://rss.com" },
];

const listenSocials = [
  {
    id: crypto.randomUUID(),
    name: "Spotify",
    Icon: SpotifyIcon,
    href: "https://open.spotify.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "Apple Podcast",
    Icon: AppleIcon,
    href: "https://podcasts.apple.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "SoundCloud",
    Icon: SoundCloudIcon,
    href: "https://soundcloud.com/",
  },
];

const shareSocials = [
  {
    id: crypto.randomUUID(),
    name: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "Facebook",
    Icon: FacebookIcon,
    href: "https://www.facebook.com/",
  },
];

export {
  FooterHeading,
  FooterLinkList1,
  FooterLinkList2,
  FooterLinkList3,
  socialIcons,
  navbarList,
  listenSocials,
  shareSocials,
};
