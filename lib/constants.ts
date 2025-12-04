export type EventItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  slug: string;
};

export const events: EventItem[] = [
  {
    id: 1,
    title: "Tech Innovators Summit",
    description:
      "Join the brightest minds in tech for a day of inspiring talks and networking. Explore the latest trends in AI, blockchain, and sustainable technology.",
    date: "2024-11-15",
    time: "09:00 AM - 05:00 PM",
    location: "Convention Center, San Francisco",
    image: "/images/event1.png",
    slug: "tech-innovators-summit",
  },
  {
    id: 2,
    title: "Global Hackathon 2024",
    description:
      "A 48-hour coding marathon to solve real-world problems. Collaborate with developers from around the globe and win amazing prizes.",
    date: "2024-12-10",
    time: "10:00 AM (Starts)",
    location: "Virtual / Online",
    image: "/images/event2.png",
    slug: "global-hackathon-2024",
  },
  {
    id: 3,
    title: "Future of Web Dev Meetup",
    description:
      "Discuss the future of web development with industry leaders. Topics include WebAssembly, Edge Computing, and the next generation of frameworks.",
    date: "2025-01-20",
    time: "06:00 PM - 09:00 PM",
    location: "Tech Hub, New York",
    image: "/images/event3.png",
    slug: "future-of-web-dev-meetup",
  },
  {
    id: 4,
    title: "AI & Machine Learning Expo",
    description:
      "Discover the latest advancements in Artificial Intelligence and Machine Learning. See live demos and meet the creators behind the algorithms.",
    date: "2025-02-14",
    time: "09:00 AM - 06:00 PM",
    location: "Expo Hall, London",
    image: "/images/event4.png",
    slug: "ai-ml-expo",
  },
  {
    id: 5,
    title: "Cybersecurity Defense Workshop",
    description:
      "Learn practical skills to defend against modern cyber threats. Hands-on workshop led by certified security experts.",
    date: "2025-03-05",
    time: "01:00 PM - 05:00 PM",
    location: "Security Lab, Berlin",
    image: "/images/event5.png",
    slug: "cybersecurity-defense-workshop",
  },
  {
    id: 6,
    title: "Cloud Native Conference",
    description:
      "Everything about Kubernetes, microservices, and cloud-native architecture. Best practices for scaling and deploying modern applications.",
    date: "2025-04-12",
    time: "08:30 AM - 05:30 PM",
    location: "Cloud Campus, Seattle",
    image: "/images/event6.png",
    slug: "cloud-native-conference",
  },
];
