import {
  AppleIcon,
  FacebookIcon,
  InstagramIcon,
  SoundCloudIcon,
  SpotifyIcon,
  TwitterIcon,
} from "@/icons/Icons.component";

const podcastList = [
  {
    id: crypto.randomUUID(),
    title: "The Problem of today’s cultural development",
    image: "/public/assets/images/podcast-cover-5.webp",
    link: "/podcast/the-problem-of-todays-cultural-development",
    episode: "05",
    date: "January 21, 2022",
    duration: "45 Min",
  },
  {
    id: crypto.randomUUID(),
    title: "The hidden messages of Jack Nielson",
    image: "/public/assets/images/podcast-cover-4.webp",
    link: "/podcast/the-hidden-messages-of-jack-nielson",
    episode: "04",
    date: "January 19, 2022",
    duration: "1 h 4 Min",
  },
  {
    id: crypto.randomUUID(),
    title: "Behind the scenes of the street art culture",
    image: "/public/assets/images/podcast-cover-3.webp",
    link: "/podcast/behind-the-scenes-of-the-street-art-culture",
    episode: "03",
    date: "January 8, 2022",
    duration: "56 Min",
  },
  {
    id: crypto.randomUUID(),
    title: "The art of movement",
    image: "/public/assets/images/podcast-cover-2.webp",
    link: "/podcast/the-art-of-movement",
    episode: "02",
    date: "December 1, 2021",
    duration: "40 Min",
  },
  {
    id: crypto.randomUUID(),
    title: "10 artists your should definitely know",
    image: "/public/assets/images/podcast-cover-1.webp",
    link: "/podcast/10-artists-you-should-definitely-know",
    episode: "01",
    date: "October 12, 2021",
    duration: "1 h 20 Min",
  },
];

const podcastArticle5 = {
  id: crypto.randomUUID(),
  title: "The Problem of today’s cultural development",
  image: "/public/assets/images/podcast-cover-5.webp",
  episode: "05",
  date: "January 21, 2022",
  duration: "45 Min",
  listenSocial: [
    {
      id: crypto.randomUUID(),
      name: "Spotify",
      Icon: SpotifyIcon,
      link: "https://open.spotify.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Apple Podcast",
      Icon: AppleIcon,
      link: "https://podcasts.apple.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "SoundCloud",
      Icon: SoundCloudIcon,
      link: "https://soundcloud.com/",
    },
  ],
  shareSocial: [
    {
      id: crypto.randomUUID(),
      name: "Instagram",
      Icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Twitter",
      Icon: TwitterIcon,
      link: "https://twitter.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Facebook",
      Icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
  ],
  description:
    "In this episode, “The Problem of Today’s Cultural Development” delves into the complex challenges that shape our modern cultural landscape. From the rapid pace of technological change to the erosion of traditional values, this discussion uncovers the subtle yet profound issues affecting how culture evolves in today’s society. Join us as we explore the tensions between innovation and heritage, and consider how creativity can both clash with and catalyze progress.",
  content: [
    {
      type: "paragraph",
      content:
        "Welcome to our podcast episode on “The Problem of Today’s Cultural Development.” In today’s conversation, we embark on an exploration of the challenges that underpin our contemporary cultural fabric. We live in an era marked by swift digital transformations, global connectivity, and a relentless push for innovation. Yet, these very forces sometimes lead to a fragmentation of cultural identity and a dilution of traditions that once united communities.",
    },
    {
      type: "paragraph",
      content:
        "As we navigate the digital age, one cannot help but notice how cultural narratives are reshaped by algorithms, social media trends, and an overwhelming flow of information. Traditional art forms, literature, and folklore risk being sidelined by fast-paced, surface-level content. There is a growing concern that the richness of cultural heritage is being sacrificed for the sake of novelty and instant gratification.",
    },
    {
      type: "paragraph",
      content:
        "In our discussion today, we analyze how cultural development is simultaneously propelled by global exchange and hindered by homogenization. Local voices struggle to be heard amid a cacophony of digital noise, while the very platforms meant to democratize art and culture often promote uniformity over diversity.",
    },
    {
      type: "quote",
      content:
        "Culture is not a commodity to be packaged and sold; it is a living, breathing expression of our collective soul, deserving of careful nurturing and thoughtful evolution.",
      author: "Sophia Delgado, cultural anthropologist",
    },
    {
      type: "paragraph",
      content:
        "Midway through this exploration, we reflect on the paradox that while technology promises a more connected world, it can also create echo chambers that stifle genuine cultural dialogue. We examine how the erosion of physical community spaces—like local theaters, art galleries, and public forums—further complicates cultural development. These spaces once served as vibrant hubs for sharing ideas and fostering creative exchange.",
    },
    {
      type: "paragraph",
      content:
        "This episode also considers how contemporary artists and cultural critics are grappling with these challenges. Many are finding innovative ways to honor tradition while pushing the boundaries of modern expression. Their work serves as a reminder that the problems we face are not insurmountable. They call for a renewed commitment to preserving cultural diversity and ensuring that progress does not come at the cost of losing our collective heritage.",
    },
    {
      type: "paragraph",
      content:
        "As we conclude, we invite you to reflect on the ways in which cultural development is both a problem and a promise. In the tension between the old and the new lies an opportunity for reinvention — a chance to forge a future where culture remains a vibrant, integral part of human identity.",
    },
    {
      type: "paragraph",
      content:
        "Thank you for joining us on this deep dive into the challenges of cultural evolution. Stay tuned for more thought-provoking discussions that challenge us to think critically about the world we create together.",
    },
  ],
  related: [
    {
      id: crypto.randomUUID(),
      title: "The Problem of today’s cultural development",
      image: "/public/assets/images/podcast-cover-5.webp",
      link: "/podcast/the-art-of-movement",
      episode: "05",
      date: "December 1, 2021",
      duration: "40 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The hidden messages of Jack Nielson",
      image: "/public/assets/images/podcast-cover-4.webp",
      link: "/podcast/the-hidden-messages-of-jack-nielson",
      episode: "04",
      date: "January 19, 2022",
      duration: "1 h 4 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Behind the scenes of the street art culture",
      image: "/public/assets/images/podcast-cover-3.webp",
      link: "/podcast/behind-the-scenes-of-the-street-art-culture",
      episode: "03",
      date: "January 8, 2022",
      duration: "56 Min",
    },
  ],
};

const podcastArticle4 = {
  id: crypto.randomUUID(),
  title: "The hidden messages of Jack Nielson",
  image: "/public/assets/images/podcast-cover-4.webp",
  episode: "04",
  date: "January 19, 2022",
  duration: "1 h 4 Min",
  listenSocial: [
    {
      id: crypto.randomUUID(),
      name: "Spotify",
      Icon: SpotifyIcon,
      link: "https://open.spotify.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Apple Podcast",
      Icon: AppleIcon,
      link: "https://podcasts.apple.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "SoundCloud",
      Icon: SoundCloudIcon,
      link: "https://soundcloud.com/",
    },
  ],
  shareSocial: [
    {
      id: crypto.randomUUID(),
      name: "Instagram",
      Icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Twitter",
      Icon: TwitterIcon,
      link: "https://twitter.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Facebook",
      Icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
  ],
  description:
    "In “The Hidden Messages of Jack Nielson,” we journey into the enigmatic world of a visionary artist whose work transcends the ordinary. This episode unpacks the layered symbolism and secret narratives embedded in Nielson’s creations, revealing insights into identity, society, and the human condition. Prepare to uncover the subtle, often overlooked details that invite us to question everything we see.",
  content: [
    {
      type: "paragraph",
      content:
        "Welcome to our special episode, “The Hidden Messages of Jack Nielson.” Today, we delve into the intricate and thought-provoking world of Jack Nielson—a contemporary artist whose work has sparked debate, inspired reflection, and captivated audiences with its profound layers of meaning. Nielson’s art is a puzzle, inviting viewers to peel back its many layers to discover messages that often lie hidden beneath the surface.",
    },
    {
      type: "paragraph",
      content:
        "Nielson’s pieces challenge conventional interpretations, blending abstract elements with stark realism. His work forces us to confront questions about identity, societal norms, and the way we interpret the world around us. Each brushstroke and every symbol in his compositions carries a deliberate intention—an invitation to look deeper and to search for the narrative that might not be immediately apparent.",
    },
    {
      type: "paragraph",
      content:
        "As we discuss his art, it becomes clear that Nielson uses symbolism as a language—a language that speaks of internal conflicts, cultural paradoxes, and the silent stories of everyday life. His canvases are not merely objects of beauty; they are archives of emotion, history, and personal transformation.",
    },
    {
      type: "quote",
      content:
        "Art becomes a mirror when it challenges us to see not just what is there, but what is hidden beneath the surface—revealing truths we often choose to ignore.",
      author: "Jonah Mills, Art critic",
    },
    {
      type: "paragraph",
      content:
        "At this juncture in our conversation, we explore how Nielson’s hidden messages resonate with audiences on a personal level. His work often blurs the lines between personal experience and universal themes, prompting us to reflect on our own lives and the societal constructs that shape us. The subtle hints within his work—whether through recurring motifs or deliberate omissions—serve as a call to action: to question, to explore, and to seek the underlying truth in our visual culture.",
    },
    {
      type: "paragraph",
      content:
        "This episode also features insights from curators and fellow artists who have engaged with Nielson’s work over the years. They share how his layered approach to art has redefined the expectations of contemporary aesthetics and encouraged a deeper, more critical engagement with visual narratives.",
    },
    {
      type: "paragraph",
      content:
        "As we wrap up, we invite you to join the conversation and share your own interpretations of Jack Nielson’s art. What hidden messages have you uncovered? How do these revelations speak to your own experiences and observations about society?",
    },
    {
      type: "paragraph",
      content:
        "Thank you for tuning in to “The Hidden Messages of Jack Nielson.” We hope this exploration inspires you to look beyond the surface and discover the profound narratives that art has to offer.",
    },
  ],
  related: [
    {
      id: crypto.randomUUID(),
      title: "The Problem of today’s cultural development",
      image: "/public/assets/images/podcast-cover-5.webp",
      link: "/podcast/the-art-of-movement",
      episode: "05",
      date: "December 1, 2021",
      duration: "40 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The hidden messages of Jack Nielson",
      image: "/public/assets/images/podcast-cover-4.webp",
      link: "/podcast/the-hidden-messages-of-jack-nielson",
      episode: "04",
      date: "January 19, 2022",
      duration: "1 h 4 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Behind the scenes of the street art culture",
      image: "/public/assets/images/podcast-cover-3.webp",
      link: "/podcast/behind-the-scenes-of-the-street-art-culture",
      episode: "03",
      date: "January 8, 2022",
      duration: "56 Min",
    },
  ],
};

const podcastArticle3 = {
  id: crypto.randomUUID(),
  title: "Behind the Scenes of the Street Art Culture",
  image: "/public/assets/images/podcast-cover-3.webp",
  episode: "03",
  date: "January 8, 2022",
  duration: "56 Min",
  listenSocial: [
    {
      id: crypto.randomUUID(),
      name: "Spotify",
      Icon: SpotifyIcon,
      link: "https://open.spotify.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Apple Podcast",
      Icon: AppleIcon,
      link: "https://podcasts.apple.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "SoundCloud",
      Icon: SoundCloudIcon,
      link: "https://soundcloud.com/",
    },
  ],
  shareSocial: [
    {
      id: crypto.randomUUID(),
      name: "Instagram",
      Icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Twitter",
      Icon: TwitterIcon,
      link: "https://twitter.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Facebook",
      Icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
  ],
  description:
    "“Behind the Scenes of the Street Art Culture” pulls back the curtain on the vibrant world of urban creativity. In this episode, we venture into the heart of the street art movement to uncover the stories, struggles, and inspirations that fuel it. Join us as we navigate the alleyways and backstreets where rebellion meets art, and where raw expression transforms public spaces into living galleries.",
  content: [
    {
      type: "paragraph",
      content:
        "Welcome to our immersive episode, “Behind the Scenes of the Street Art Culture.” Today, we venture into the dynamic world of street art—a realm where creativity thrives in the urban landscape, and where every wall, alley, and public space becomes a canvas for expression and resistance.",
    },
    {
      type: "paragraph",
      content:
        "Street art is far more than graffiti; it is a movement that challenges societal norms and disrupts the traditional boundaries of art. In this episode, we explore the stories behind the murals, the urban interventions, and the guerrilla installations that have transformed cityscapes around the globe. These artworks are a testament to the spirit of rebellion and the desire for public expression in spaces often overlooked by conventional art institutions.",
    },
    {
      type: "paragraph",
      content:
        "Our journey takes us into the lives of the artists themselves. We discover that behind every vibrant mural lies a story of passion, hardship, and relentless determination. These artists often work anonymously, driven by a commitment to speak truth to power and to share their unique perspectives with the world.",
    },
    {
      type: "quote",
      content:
        "Street art is the pulse of the city—it is raw, unfiltered expression that demands our attention and challenges our perceptions of beauty and protest.",
      author: "Marco Bellini, street art curator",
    },
    {
      type: "paragraph",
      content:
        "At this midpoint, we dive deeper into the collaborative nature of street art culture. Artists share insights into the challenges they face—from legal obstacles to the ephemeral nature of their work—and discuss the camaraderie that exists within their community. The conversation reveals how street art not only beautifies urban spaces but also ignites dialogues about social justice, identity, and collective memory.",
    },
    {
      type: "paragraph",
      content:
        "Throughout this episode, we highlight several groundbreaking projects and interviews with influential figures in the movement. Their stories paint a vivid picture of a culture that is as transient as it is powerful—a culture that thrives on spontaneity, subversion, and a deep connection to the urban environment.",
    },
    {
      type: "paragraph",
      content:
        "As we conclude our journey behind the scenes, we invite you to reflect on the impact of street art on your own city. How do these bold expressions alter your experience of public spaces? What conversations do they inspire among those who pass by?",
    },
    {
      type: "paragraph",
      content:
        "Thank you for joining us on this exploration of street art culture. Stay tuned for more episodes that bring you closer to the creative forces shaping our urban landscapes.",
    },
  ],
  related: [
    {
      id: crypto.randomUUID(),
      title: "The Problem of today’s cultural development",
      image: "/public/assets/images/podcast-cover-5.webp",
      link: "/podcast/the-art-of-movement",
      episode: "05",
      date: "December 1, 2021",
      duration: "40 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The hidden messages of Jack Nielson",
      image: "/public/assets/images/podcast-cover-4.webp",
      link: "/podcast/the-hidden-messages-of-jack-nielson",
      episode: "04",
      date: "January 19, 2022",
      duration: "1 h 4 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Behind the scenes of the street art culture",
      image: "/public/assets/images/podcast-cover-3.webp",
      link: "/podcast/behind-the-scenes-of-the-street-art-culture",
      episode: "03",
      date: "January 8, 2022",
      duration: "56 Min",
    },
  ],
};

const podcastArticle2 = {
  id: crypto.randomUUID(),
  title: "The art of movement",
  image: "/public/assets/images/podcast-cover-2.webp",
  episode: "02",
  date: "December 1, 2021",
  duration: "40 Min",
  listenSocial: [
    {
      id: crypto.randomUUID(),
      name: "Spotify",
      Icon: SpotifyIcon,
      link: "https://open.spotify.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Apple Podcast",
      Icon: AppleIcon,
      link: "https://podcasts.apple.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "SoundCloud",
      Icon: SoundCloudIcon,
      link: "https://soundcloud.com/",
    },
  ],
  shareSocial: [
    {
      id: crypto.randomUUID(),
      name: "Instagram",
      Icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Twitter",
      Icon: TwitterIcon,
      link: "https://twitter.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Facebook",
      Icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
  ],
  description:
    "“The Art of Movement” is a captivating exploration of how motion—both in art and in life—shapes our perceptions and experiences. In this episode, we delve into the dynamic interplay between physical movement and creative expression, examining how dance, performance, and kinetic art reveal deeper truths about the human spirit. Discover how the rhythm of motion can be both a form of artistic liberation and a mirror of our inner journeys.",
  content: [
    {
      type: "paragraph",
      content:
        "Welcome to our thought-provoking episode, “The Art of Movement.” Today, we explore the intricate relationship between movement and art—a dance that blurs the boundaries between physical expression and creative narrative. Movement is not merely a series of steps or gestures; it is a language that communicates emotion, defiance, joy, and sorrow.",
    },
    {
      type: "paragraph",
      content:
        "In this episode, we investigate various forms of kinetic art—from the fluid motions of contemporary dance to the bold statements of performance art. We examine how movement can serve as both a metaphor for personal transformation and a tool for social commentary. Whether it’s a choreographed routine that tells a story or a spontaneous street performance that captures the raw energy of a moment, movement speaks to us in ways words cannot.",
    },
    {
      type: "paragraph",
      content:
        "As we discuss these dynamic expressions, we are struck by the profound impact that movement has on our collective psyche. It is through motion that we often express our deepest truths, unfiltered by the constraints of language. Every sway, leap, and pirouette is a declaration of life in motion—a refusal to remain static in a rapidly changing world.",
    },
    {
      type: "quote",
      content:
        "Movement is the eternal language of the soul, expressing what the heart feels and the mind cannot contain in silence.",
      author: "Celia Martinez, performance artist and choreographer",
    },
    {
      type: "paragraph",
      content:
        "Midway through our conversation, we delve into how the art of movement is used as a means of healing and empowerment. Artists and dancers share personal stories of how movement has helped them overcome adversity, reclaim their identities, and connect with communities. These narratives remind us that physical expression can be a powerful catalyst for change, resonating far beyond the confines of the stage.",
    },
    {
      type: "paragraph",
      content:
        "This episode also explores the role of technology in shaping new forms of movement. With innovations in digital art and interactive installations, creators are now blending traditional performance with modern media to forge groundbreaking experiences that redefine how we perceive motion.",
    },
    {
      type: "paragraph",
      content:
        "As we wrap up “The Art of Movement,” we invite you to reflect on the moments when you have experienced movement in its most transcendent form—whether on a stage, in a public space, or within your own body. How does movement inspire you? What stories do you see unfolding with every gesture?",
    },
    {
      type: "paragraph",
      content:
        "Thank you for joining us in celebrating the art that moves us. We hope this episode encourages you to embrace the rhythms of your own life and to find beauty in every step of your journey.",
    },
  ],
  related: [
    {
      id: crypto.randomUUID(),
      title: "The Problem of today’s cultural development",
      image: "/public/assets/images/podcast-cover-5.webp",
      link: "/podcast/the-art-of-movement",
      episode: "05",
      date: "December 1, 2021",
      duration: "40 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The hidden messages of Jack Nielson",
      image: "/public/assets/images/podcast-cover-4.webp",
      link: "/podcast/the-hidden-messages-of-jack-nielson",
      episode: "04",
      date: "January 19, 2022",
      duration: "1 h 4 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Behind the scenes of the street art culture",
      image: "/public/assets/images/podcast-cover-3.webp",
      link: "/podcast/behind-the-scenes-of-the-street-art-culture",
      episode: "03",
      date: "January 8, 2022",
      duration: "56 Min",
    },
  ],
};

const podcastArticle1 = {
  id: crypto.randomUUID(),
  title: "10 artists your should definitely know",
  image: "/public/assets/images/podcast-cover-1.webp",
  episode: "01",
  date: "October 12, 2021",
  duration: "1 h 20 Min",
  listenSocial: [
    {
      id: crypto.randomUUID(),
      name: "Spotify",
      Icon: SpotifyIcon,
      link: "https://open.spotify.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Apple Podcast",
      Icon: AppleIcon,
      link: "https://podcasts.apple.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "SoundCloud",
      Icon: SoundCloudIcon,
      link: "https://soundcloud.com/",
    },
  ],
  shareSocial: [
    {
      id: crypto.randomUUID(),
      name: "Instagram",
      Icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Twitter",
      Icon: TwitterIcon,
      link: "https://twitter.com/",
    },
    {
      id: crypto.randomUUID(),
      name: "Facebook",
      Icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
  ],
  description:
    "In this episode, “10 Artists You Should Definitely Know” introduces you to a curated selection of groundbreaking creatives whose work is redefining the art world. From emerging talents to established visionaries, we delve into the stories behind their art, the inspirations that drive them, and the transformative impact of their creations. Join us for a vibrant journey that celebrates innovation, diversity, and the power of artistic expression.",
  content: [
    {
      type: "paragraph",
      content:
        "Welcome to our special episode, “10 Artists You Should Definitely Know.” Today, we shine a spotlight on a diverse group of creative visionaries who are challenging conventions and reshaping the landscape of art. In a world where artistic expression is more varied and dynamic than ever, these ten artists stand out for their unique perspectives, innovative techniques, and unwavering commitment to their craft.",
    },
    {
      type: "paragraph",
      content:
        "Throughout this episode, we delve into the lives and works of these remarkable individuals. Each artist brings a distinct voice to the conversation—whether through painting, sculpture, digital media, or performance art. Their works serve as windows into new ways of seeing and understanding the world, pushing the boundaries of what art can be and do.",
    },
    {
      type: "paragraph",
      content:
        "We discuss how these artists are not only transforming visual aesthetics but are also engaging with pressing social issues. Their creations challenge us to rethink norms, question established paradigms, and embrace the complexity of modern life. From vibrant murals that speak to community resilience to digital installations that explore the intersection of technology and identity, each artist’s work is a testament to the power of creativity as a force for change.",
    },
    {
      type: "quote",
      content:
        "Art is the heartbeat of society, and these artists are its most daring storytellers — each piece a pulse that connects us to the rhythm of our collective existence.",
      author: "Camille Rousseau, contemporary art critic",
    },
    {
      type: "paragraph",
      content:
        "At the midpoint of our journey, we pause to reflect on how these ten artists have managed to carve out spaces for themselves in an increasingly competitive and fragmented art world. Their stories of perseverance, innovation, and passion remind us that art is not confined to galleries or museums — it is alive in every corner of our communities.",
    },
    {
      type: "paragraph",
      content:
        "In this episode, we not only celebrate their achievements but also explore the challenges they face as they navigate an ever-changing cultural landscape. We examine how they balance commercial pressures with artistic integrity, and how their work continues to evolve in response to global events and personal experiences.",
    },
    {
      type: "paragraph",
      content:
        "As we introduce each artist, you’ll discover the varied influences and inspirations that have shaped their unique styles. Whether it’s the reclaiming of urban spaces through street art or the fusion of traditional techniques with modern digital tools, these creators offer a glimpse into the future of art—a future defined by innovation, inclusivity, and boundless imagination.",
    },
    {
      type: "paragraph",
      content:
        "Thank you for joining us on this vibrant exploration of creativity. We hope “10 Artists You Should Definitely Know” inspires you to delve deeper into the art world and to discover the extraordinary talent that is reshaping our cultural horizon.",
    },
  ],
  related: [
    {
      id: crypto.randomUUID(),
      title: "The Problem of today’s cultural development",
      image: "/public/assets/images/podcast-cover-5.webp",
      link: "/podcast/the-art-of-movement",
      episode: "05",
      date: "December 1, 2021",
      duration: "40 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "The hidden messages of Jack Nielson",
      image: "/public/assets/images/podcast-cover-4.webp",
      link: "/podcast/the-hidden-messages-of-jack-nielson",
      episode: "04",
      date: "January 19, 2022",
      duration: "1 h 4 Min",
    },
    {
      id: crypto.randomUUID(),
      title: "Behind the scenes of the street art culture",
      image: "/public/assets/images/podcast-cover-3.webp",
      link: "/podcast/behind-the-scenes-of-the-street-art-culture",
      episode: "03",
      date: "January 8, 2022",
      duration: "56 Min",
    },
  ],
};

export {
  podcastList,
  podcastArticle1,
  podcastArticle2,
  podcastArticle3,
  podcastArticle4,
  podcastArticle5,
};
