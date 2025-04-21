import { AiOutlineCalendar } from "react-icons/ai";
import { FaGlassCheers } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { expertise1 } from "@/components/utils/data";
import { expertise2 } from "@/components/utils/data";
import { expertise3 } from "@/components/utils/data";
import { expertise4 } from "@/components/utils/data";

import { showcase1 } from "@/components/utils/data";
import { showcase2 } from "@/components/utils/data";
import { showcase3 } from "@/components/utils/data";
import { showcase4 } from "@/components/utils/data";
import { showcase5 } from "@/components/utils/data";
import { showcase6 } from "@/components/utils/data";

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of creating unforgettable events",
  },
  {
    icon: <FaGlassCheers size={25} />,
    title: "Elegant designs & seamless planning",
  },
  {
    icon: <GiPartyPopper size={25} />,
    title: "100+ successful celebrations organized",
  },
  {
    icon: <BiHappyHeartEyes size={25} />,
    title: "Making every moment special for you",
  },
];
export const expertise = [
  {
    id: 1,
    title: "Wedding Planning",
    cover: expertise1,
    desc: [
      { text: "Venue selection" },
      { text: "Decor & styling" },
      { text: "Catering & menu planning" },
      { text: "Entertainment & music" },
      { text: "Guest coordination" },
    ],
  },
  {
    id: 2,
    title: "Corporate Events",
    cover: expertise2,
    desc: [
      { text: "Conferences & seminars" },
      { text: "Product launches" },
      { text: "Team-building activities" },
      { text: "Gala dinners & award nights" },
    ],
  },
  {
    id: 3,
    title: "Birthday & Private Parties",
    cover: expertise3,
    desc: [
      { text: "Theme planning" },
      { text: "Entertainment & activities" },
      { text: "Catering & cake design" },
      { text: "Photography & videography" },
    ],
  },
  {
    id: 4,
    title: "Special Occasions",
    cover: expertise4,
    desc: [
      { text: "Engagement parties" },
      { text: "Baby showers" },
      { text: "Anniversaries" },
      { text: "Graduation celebrations" },
    ],
  },
];

export const testimonial = [
  {
    id: 1,
    name: "Chinedu Okafor",
    cover: "../images/client001.jpg",
    post: "CEO, Elite Events Nigeria",
    desc: "Our wedding was beyond perfect, thanks to this amazing team! Every detail was beautifully executed, and our guests were blown away. Highly recommended!",
  },
  {
    id: 2,
    name: "Aisha Bello",
    cover: "../images/client002.jpg",
    post: "Marketing Manager, Naija Brands",
    desc: "They handled our corporate event with such professionalism and creativity. From venue selection to branding, everything was top-notch. Will definitely work with them again!",
  },
  {
    id: 3,
    name: "Tunde Adewale",
    cover: "../images/client003.jpg",
    post: "Event Host & MC",
    desc: "I've worked with many planners, but this team stands out! Their attention to detail, creativity, and seamless coordination made the event a huge success.",
  },
  {
    id: 4,
    name: "Ngozi Chukwu",
    cover: "../images/client004.jpg",
    post: "Creative Director, Lagos Luxe Decor",
    desc: "They transformed our engagement party into a magical experience! The decor, the ambiance, and the overall execution were beyond our expectations. Simply amazing!",
  },
];

export const showcase = [
  {
    id: 1,
    title: "Elegant Wedding Reception",
    cover: showcase1,
    category: "WEDDINGS",
  },
  {
    id: 2,
    title: "Luxury Birthday Celebration",
    cover: showcase2,
    category: "BIRTHDAYS",
  },
  {
    id: 3,
    title: "Corporate Gala Night",
    cover: showcase3,
    category: "CORPORATE EVENTS",
  },
  {
    id: 4,
    title: "Traditional Engagement Ceremony",
    cover: showcase4,
    category: "WEDDINGS",
  },
  {
    id: 5,
    title: "Baby Shower Bliss",
    cover: showcase5,
    category: "SPECIAL OCCASIONS",
  },
  {
    id: 6,
    title: "Outdoor Garden Party",
    cover: showcase6,
    category: "PRIVATE PARTIES",
  },
];
export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
]
export const blogdata = [
  {
    id: 1,
    title: "Top Wedding Trends to Watch This Year",
    cover: "../images/blog001.webp",
    category: "WEDDINGS",
    date: "JANUARY 17, 2025",
  },
  {
    id: 2,
    title: "How to Plan the Perfect Birthday Party",
    cover: "../images/blog002.jpg",
    category: "TIPS & TRICKS",
    date: "FEB 08, 2025",
  },
  {
    id: 3,
    title: "Corporate Events: Tips for a Successful Business Gathering",
    cover: "../images/blog003.jpg",
    category: "TIPS & TRICKS",
    date: "MARCH 3, 2025",
  },
  {
    id: 4,
    title: "Must-Have Decor Ideas for Your Next Celebration",
    cover: "../images/blog004.png",
    category: "EVENTS",
    date: "MARCH 30, 2025",
  },
];

export const teamdata = [
  {
    id: 1,
    title: "Alexander Black",
    cover: "../images/t2.jpg",
    post: "FOUNDER, CEO",
  },
  {
    id: 2,
    title: "Anna Kovalenko",
    cover: "../images/t2.jpg",
    post: "FINANCE DIRECTOR",
  },
  {
    id: 3,
    title: "Tiffany White",
    cover: "../images/t2.jpg",
    post: "CREATIVE DIRECTOR",
  },
  {
    id: 4,
    title: "Richard Greenwood",
    cover: "../images/t2.jpg",
    post: "PROGRAMMER",
  },
  {
    id: 5,
    title: "Jessica Brown",
    cover: "../images/t2.jpg",
    post: "MARKETING DIRECTOR",
  },
  {
    id: 6,
    title: "Gregory Windstorm",
    cover: "../images/t2.jpg",
    post: "ACCOUNTING MANAGER",
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "../images/t2.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "../images/t2.jpg",
    post: "",
  },
]
