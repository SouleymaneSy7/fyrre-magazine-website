import {
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/Icons.component";

const followSocials = [
  {
    id: crypto.randomUUID(),
    Icon: InstagramIcon,
    href: "https://instagram.com",
  },
  { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
  { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
];

const authorList = [
  {
    id: crypto.randomUUID(),
    name: "Jakob Grønberg",
    job: "Artist",
    city: "Berlin",
  },
  {
    id: crypto.randomUUID(),
    name: "Louise Jensen",
    job: "Artist",
    city: "Stockholm",
  },
  {
    id: crypto.randomUUID(),
    name: "Anne Henry",
    job: "Photographer",
    city: "New York",
  },
  {
    id: crypto.randomUUID(),
    name: "Anna Nielsen",
    job: "Columnist",
    city: "Copenhagen",
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Cooper",
    job: "Artist",
    city: "Berlin",
  },
  {
    id: crypto.randomUUID(),
    name: "Cristofer Vaccaro",
    job: "Artist",
    city: "Lisabon",
  },
];

const avaterProfile1 = {
  id: crypto.randomUUID(),
  name: "Jakob Grønberg",
  job: "Artist",
  city: "Berlin",
  previewDescription:
    "Jakob Grønberg is a visionary artist whose work reflects the pulsating energy of Berlin’s dynamic art scene. With an ever-curious mind, Jakob transforms everyday urban experiences into evocative, abstract expressions. His paintings and installations invite viewers to reimagine the familiar through a lens of bold innovation and thoughtful introspection.",
  description: [
    "Deeply influenced by the rich cultural tapestry of Berlin, Jakob’s art is both a personal exploration and a commentary on modern life. His creative journey is marked by an ongoing dialogue with the city's history and its ever-changing present, resulting in pieces that are as intellectually stimulating as they are visually arresting.",
    "When you step into Jakob’s world, you encounter a blend of raw emotion and meticulous craft—a testament to his belief that art should challenge perceptions and ignite conversations.",
  ],
  image: "/public/assets/images/author-profile-1.png",
  social: [
    {
      id: crypto.randomUUID(),
      Icon: InstagramIcon,
      href: "https://instagram.com",
    },
    { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
    { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
  ],
  articles: [
    {
      id: crypto.randomUUID(),
      title: "Getting Real",
      image: "/images/articles/jakob-gronberg/the-art-of-movement.jpg",
      link: "/articles/the-art-of-movement",
      date: "January 1, 2022",
      Read: "30min",
    },
    {
      id: crypto.randomUUID(),
      title: "Only in your heart",
      image:
        "/images/articles/jakob-gronberg/the-hidden-messages-of-jack-nielson.jpg",
      link: "/articles/the-hidden-messages-of-jack-nielson",
      date: "June 16, 2021",
      Read: "10min",
    },
  ],
};

const avatarProfile2 = {
  id: crypto.randomUUID(),
  name: "Louise Jensen",
  job: "Artist",
  city: "Stockholm",
  preview:
    "Louise Jensen is an artist whose delicate yet powerful creations capture the serene beauty of Stockholm and the spirit of Scandinavian design. Her work is characterized by a minimalist approach that weaves together subtle hues and intricate details, reflecting both nature’s tranquility and the urban pulse of her surroundings.",
  description: [
    "Drawing inspiration from the stark contrasts of light and shadow inherent in Nordic landscapes, Louise infuses her canvases with a quiet intensity. Each piece tells a story of balance—of simplicity intertwined with a profound depth of emotion and thought.",
    "Louise’s art resonates with those who seek beauty in understated elegance, inviting viewers to pause, reflect, and find inspiration in the gentle interplay between form and feeling.",
  ],
  image: "/public/assets/images/author-profile-2.png",
  social: [
    {
      id: crypto.randomUUID(),
      Icon: InstagramIcon,
      href: "https://instagram.com",
    },
    { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
    { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
  ],
  post: [
    {
      id: crypto.randomUUID(),
      title: "The best art museums",
      image: "/public/assets/images/magazine-cover-3.webp",
      link: "/post/the-best-art-museums",
      date: "July 20, 2022",
      Read: "10 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "An indestructible hope",
      image: "/public/assets/images/magazine-cover-5.webp",
      link: "/post/an-indestructible-hope",
      date: "June 1, 2022",
      Read: "12 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The chains of our lives",
      image: "/public/assets/images/magazine-cover-7.webp",
      link: "/post/the-chains-of-our-lives",
      date: "April 15, 2022",
      Read: "30 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Keep on smiling",
      image: "/public/assets/images/magazine-cover-13.webp",
      link: "/post/keep-on-smiling",
      date: "October 28, 2021",
      Read: "20 Min",
    },
  ],
};

const avatarProfile3 = {
  id: crypto.randomUUID(),
  name: "Anne Henry",
  job: "Photograph",
  city: "New York",
  preview:
    "Anne Henry is a New York-based photographer celebrated for her ability to capture the raw essence of urban life. With an intuitive eye for light, composition, and fleeting moments, Anne’s photographs reveal the soulful narratives hidden within the bustling energy of the city.",
  description: [
    "Her work often explores the interplay between human emotion and the relentless rhythm of New York streets, offering a glimpse into the lives of ordinary people seen through an extraordinary lens. Anne’s images resonate with authenticity and a timeless quality, making the transient moments of everyday life feel everlasting.",
    "Beyond the technical mastery of her craft, Anne’s passion for storytelling shines through every photograph—each frame a carefully composed tribute to the beauty, struggle, and vibrant spirit of New York.",
  ],
  image: "/public/assets/images/author-profile-3.png",
  social: [
    {
      id: crypto.randomUUID(),
      Icon: InstagramIcon,
      href: "https://instagram.com",
    },
    { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
    { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
  ],
  post: [
    {
      id: crypto.randomUUID(),
      title: "Hope dies last",
      image: "/public/assets/images/magazine-cover-1.webp",
      link: "/post/hope-dies-last",
      date: "October 15, 2022",
      Read: "10 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Secret garden",
      image: "/public/assets/images/magazine-cover-10.webp",
      link: "/post/secret-garden",
      date: "February 18, 2022",
      Read: "20 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The future is colorful",
      image: "/public/assets/images/magazine-cover-17.webp",
      link: "/post/the-future-is-colorful",
      date: "July 7, 2021",
      Read: "30 Min",
    },
  ],
};

const avatarProfile4 = {
  id: crypto.randomUUID(),
  name: "Anna Nielsen",
  job: "Columnist",
  city: "Copenhagen",
  preview:
    "Based in Copenhagen, Anna Nielsen is a dynamic columnist whose writing bridges the realms of art, culture, and society. Known for her incisive insights and lyrical prose, Anna explores the intricacies of contemporary life, offering perspectives that are both thought-provoking and deeply human.",
  description: [
    "Her columns often serve as a reflective mirror, capturing the nuanced interplay between tradition and modernity. With a keen understanding of the cultural pulse of her city, Anna’s work not only informs but also inspires dialogue among readers from diverse backgrounds.",
    "Anna’s writing is a testament to her belief that words can transform our understanding of the world, inviting us to see the beauty in the mundane and the profound in the everyday.",
  ],
  image: "/public/assets/images/author-profile-4.png",
  social: [
    {
      id: crypto.randomUUID(),
      Icon: InstagramIcon,
      href: "https://instagram.com",
    },
    { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
    { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
  ],
  post: [
    {
      id: crypto.randomUUID(),
      title: "Through the eyes of street artists",
      image: "/public/assets/images/magazine-cover-8.webp",
      link: "/post/through-the-eyes-of-street-artists",
      date: "April 15, 2022",
      Read: "15 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Artists who want to rise above",
      image: "/public/assets/images/magazine-cover-9.webp",
      link: "/post/artists-who-want-to-rise-above",
      date: "March 9, 2022",
      Read: "10 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "How are you, really?",
      image: "/public/assets/images/magazine-cover-15.webp",
      link: "/post/how-are-you-really",
      date: "September 1, 2021",
      Read: "15 Min",
    },
  ],
};

const avatarProfile5 = {
  id: crypto.randomUUID(),
  name: "Jane Cooper",
  job: "Artist",
  city: "Berlin",
  preview:
    "Jane Cooper is a Berlin-based artist whose creative expression defies conventional boundaries. Passionate and experimental, Jane’s work is a vibrant exploration of form, color, and texture, reflecting the eclectic spirit of one of the world’s most innovative art capitals.",
  description: [
    "Her art is a dynamic fusion of tradition and modernity, where each piece is a journey into the unknown. By challenging established norms and embracing bold experimentation, Jane creates visual narratives that invite viewers to question, interpret, and ultimately, feel.",
    "Living and working in Berlin, Jane draws inspiration from the city’s diverse cultural landscape, crafting art that is as rebellious as it is refined. Her work is not just an expression of individuality—it’s an invitation to explore the limitless possibilities of creative freedom.",
  ],
  image: "/public/assets/images/author-profile-5.png",
  social: [
    {
      id: crypto.randomUUID(),
      Icon: InstagramIcon,
      href: "https://instagram.com",
    },
    { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
    { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
  ],
  post: [
    {
      id: crypto.randomUUID(),
      title: "The devil is in the details",
      image: "/public/assets/images/magazine-cover-4.webp",
      link: "/post/the-devil-is-in-the-details",
      date: "June 4, 2022",
      Read: "35 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Colorful places",
      image: "/public/assets/images/magazine-cover-12.webp",
      link: "/post/colorful-places",
      date: "November 19, 2021",
      Read: "15 Min",
    },
  ],
};

const avatarProfile6 = {
  id: crypto.randomUUID(),
  name: "Cristofer Vaccaro",
  job: "Artist",
  city: "Lisabon",
  preview:
    "Cristofer Vaccaro is an artist rooted in the vibrant cultural milieu of Lisabon. His creative practice is deeply influenced by the rich history, colorful traditions, and dynamic energy of his city, resulting in works that are both reflective and groundbreaking.",
  description: [
    "With a keen eye for detail and a passion for merging the old with the new, Cristofer’s art captures the soulful essence of Lisabon. His pieces often feature a playful yet profound exploration of color, form, and texture, inviting viewers to immerse themselves in the narrative of his heritage.",
    "Cristofer’s work serves as a bridge between tradition and innovation, embodying the spirit of Lisabon while pushing the boundaries of contemporary art. His creative journey is a celebration of cultural identity, storytelling, and the endless possibilities of artistic expression.",
  ],
  image: "/public/assets/images/author-profile-6.png",
  social: [
    {
      id: crypto.randomUUID(),
      Icon: InstagramIcon,
      href: "https://instagram.com",
    },
    { id: crypto.randomUUID(), Icon: TwitterIcon, href: "https://twitter.com" },
    { id: crypto.randomUUID(), Icon: YoutubeIcon, href: "https://youtube.com" },
  ],
  post: [
    {
      id: crypto.randomUUID(),
      title: "Don’t close your eyes",
      image: "/public/assets/images/magazine-cover-2.webp",
      link: "/post/dont-close-your-eyes",
      date: "September 22, 2022",
      Read: "50 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Street art festival",
      image: "/public/assets/images/magazine-cover-6.webp",
      link: "/post/street-art-festival",
      date: "May 10, 2022",
      Read: "5 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "History of paper",
      image: "/public/assets/images/magazine-cover-13.webp",
      link: "/post/history-of-paper",
      date: "October 3, 2021",
      Read: "35 Min",
    },
  ],
};

export {
  followSocials,
  authorList,
  avaterProfile1,
  avatarProfile2,
  avatarProfile3,
  avatarProfile4,
  avatarProfile5,
  avatarProfile6,
};
