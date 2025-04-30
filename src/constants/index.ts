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

const homepageHero = {
  id: crypto.randomUUID(),
  CoverImage: "/assets/images/magazine-cover-2.webp",
  title: "Don’t close your eyes",
  preview:
    "In an era overloaded with digital distractions and fleeting moments, “Don’t Close Your Eyes” is a call to awaken your senses and fully engage with the world around you. This piece invites you on a journey of mindful observation, urging you to resist the temptation to look away and instead embrace both the beauty and the pain that life offers. Experience an immersive narrative that explores how genuine sight can become an act of rebellion and renewal in our modern age.",
  author: "Cristofer Vaccaro",
  date: "September 22, 2022",
  readTime: "50 Min",
  tag: "street art",
  postLink: "/magazine/dont-close-your-eyes",
  authorLink: "/authors/cristofer-vaccaro",
};

const homepageMagazineSummaryList = [
  {
    id: crypto.randomUUID(),
    title: "Hope Dies Last",
    preview:
      "“Hope Dies Last” is a reflective exploration of the resilient human spirit, delving into how hope persists even in our darkest hours. This article presents a moving narrative that interweaves personal struggle with collective triumph, urging us to nurture the small sparks of optimism that shine through adversity. Let this immersive journey remind you that even the faintest light can guide us when the night seems endless.",
    author: "Anne Henry",
    date: "October 15, 2022",
    readTime: "10 mn",
    tag: "art",
    coverImage: "/assets/images/magazine-cover-1.webp",
    postLink: "/magazine/hope-dies-last",
    authorLink: "/authors/anne-henry",
  },
  {
    id: crypto.randomUUID(),
    title: "The Best Art Museums",
    preview:
      "Explore “The Best Art Museums,” a deep dive into the sanctuaries of creativity that transcend traditional boundaries. This article unravels the magic behind art spaces that ignite conversations, challenge perceptions, and foster an intimate connection between the viewer and the artwork. Discover how these museums serve not only as repositories of history and innovation but also as vibrant forums for cultural dialogue.",
    author: "Louise Jensen",
    date: "July 20, 2022",
    readTime: "10 mn",
    tag: "sculptures",
    coverImage: "/assets/images/magazine-cover-3.webp",
    postLink: "/magazine/the-best-art-museums",
    authorLink: "/authors/louise-jensen",
  },
  {
    id: crypto.randomUUID(),
    title: "The Devil is in the Details",
    preview:
      "In “The Devil is in the Details,” we peel back the layers of everyday existence to reveal the profound significance hidden within the minutiae. This article invites you to explore how small, often overlooked details can transform ordinary moments into extraordinary experiences, urging you to appreciate the intricacies that shape our lives and art.",
    author: "Jane Cooper",
    date: "June 4, 2022",
    readTime: "35 Min",
    tag: "art",
    coverImage: "/assets/images/magazine-cover-4.webp",
    postLink: "/magazine/the-devil-is-in-the-details",
    authorLink: "/authors/jane-cooper",
  },
  {
    id: crypto.randomUUID(),
    title: "An Indestructible Hope",
    preview:
      "“An Indestructible Hope” offers a deep, introspective look at the resilient human spirit. This article weaves together stories of personal triumph and communal resilience, exploring how hope, even when battered by life’s storms, emerges as a powerful force that propels us forward. Immerse yourself in a narrative that celebrates the unyielding strength found within and around us.",
    author: "Louise Jensen",
    date: "June 1, 2022",
    readTime: "12 Min",
    tag: "art",
    coverImage: "/assets/images/magazine-cover-5.webp",
    postLink: "/magazine/an-indestructible-hope",
    authorLink: "/authors/louise-jensen",
  },
  {
    id: crypto.randomUUID(),
    title: "Street Art Festival",
    preview:
      "Step into the pulsating energy of urban creativity with “Street Art Festival.” This article immerses you in the vibrant, transformative world of street art, where public spaces burst into life with color, rebellion, and raw expression. Discover how festivals celebrating street art redefine urban culture and create a dynamic dialogue between the artist, the city, and its people.",
    author: "Cristofer Vaccaro",
    date: "May 10, 2022",
    readTime: "5 Min",
    tag: "street art",
    coverImage: "/assets/images/magazine-cover-6.webp",
    postLink: "/magazine/street-art-festival",
    authorLink: "/authors/cristofer-vaccaro",
  },
  {
    id: crypto.randomUUID(),
    title: "The chains of our lives",
    preview:
      "Step into the pulsating energy of urban creativity with “Street Art Festival.” This article immerses you in the vibrant, transformative world of street art, where public spaces burst into life with color, rebellion, and raw expression. Discover how festivals celebrating street art redefine urban culture and create a dynamic dialogue between the artist, the city, and its people.",
    author: "Louise Jensen",
    date: "Mar 28, 2022",
    readTime: "30 Min",
    tag: "sculptures",
    coverImage: "/assets/images/magazine-cover-7.webp",
    postLink: "/magazine/the-chains-of-our-lives",
    authorLink: "/authors/louise-jensen",
  },
];

const homepagePopularPostList = [
  {
    id: crypto.randomUUID(),
    listNumber: "01",
    title: "Street art festival",
    author: "Cristofer Vaccaro",
    postLink: "/magazine/street-art-festival",
    authorLink: "/authors/cristofer-vaccaro",
  },
  {
    id: crypto.randomUUID(),
    listNumber: "02",
    title: "Hope dies last",
    author: "Anne Henry",
    postLink: "/magazine/hope-dies-last",
    authorLink: "/authors/anne-henry",
  },
  {
    id: crypto.randomUUID(),
    listNumber: "03",
    title: "The Devil is in the Details",
    author: "Jane Cooper",
    postLink: "/magazine/the-devil-is-in-the-details",
    authorLink: "/authors/jane-cooper",
  },
];

const homepagePodcastList = [
  {
    id: crypto.randomUUID(),
    coverImage: "/assets/images/podcast-cover-05.jpg",
    title: "The Problem of today’s cultural development",
    date: "January 21, 2022",
    duration: "45 Min",
  },
  {
    id: crypto.randomUUID(),
    title: "The hidden messages of Jack Nielson",
    coverImage: "/assets/images/podcast-cover-04.jpg",
    date: "January 19, 2022",
    duration: "1 h 4 Min",
  },
  {
    id: crypto.randomUUID(),
    title: "Behind the Scenes of the Street Art Culture",
    coverImage: "/assets/images/podcast-cover-03.jpg",
    date: "January-8-2022",
    duration: "56 Min",
  },
];

const homepageAuthorsList = [
  {
    id: crypto.randomUUID(),
    name: "Jakob Grønberg",
    job: "Artist",
    city: "Berlin",
    image: "/assets/images/author-profile-1.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Louise Jensen",
    job: "Artist",
    city: "Stockholm",
    image: "/assets/images/author-profile-2.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Anne Henry",
    job: "Photographer",
    city: "New York",
    image: "/assets/images/author-profile-3.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Anna Nielsen",
    job: "Columnist",
    city: "Copenhagen",
    image: "/assets/images/author-profile-4.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Cooper",
    job: "Artist",
    city: "Berlin",
    image: "/assets/images/author-profile-5.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Cristofer Vaccaro",
    job: "Artist",
    city: "Lisabon",
    image: "/assets/images/author-profile-6.png",
  },
];

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
  homepageMagazineSummaryList,
  homepageHero,
  homepagePopularPostList,
  homepagePodcastList,
  homepageAuthorsList,
};
