const magazineCategories = [
  {
    id: crypto.randomUUID(),
    tag: "all",
  },
  {
    id: crypto.randomUUID(),
    tag: "art",
  },
  {
    id: crypto.randomUUID(),
    tag: "street art",
  },
  {
    id: crypto.randomUUID(),
    tag: "sculptures",
  },
];

const magazineLatestPost = [
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
    slug: "hope-dies-last",
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
    slug: "the-best-art-museums",
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
    slug: "the-devil-is-in-the-details",
  },
];

export { magazineCategories, magazineLatestPost };
