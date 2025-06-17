import photo1 from "@/public/images/image1.jpg";
import photo2 from "@/public/images/image2.jpg";
import photo3 from "@/public/images/image3.jpg";
import photo4 from "@/public/images/image4.jpg";
import photo5 from "@/public/images/image5.jpg";
import photo6 from "@/public/images/image6.jpg";

export const navItems = [
  {
    number: "01",
    title: "About Us",
    key: "about-us",
  },
  /*   {
    number: "02",
    title: "Services",
    key: "services",
  }, */
  // {
  //   number: "03",
  //   title: "Pricing",
  //   key: "pricing",
  // },
  // {
  //   number: "04",
  //   title: "Resources",
  //   key: "resources",
  // },
  // {
  //   number: "04",
  //   title: "Company",
  //   key: "company",
  // },
];

export const imageContent = [
  {
    src: photo1,
    alt: "photo",
    className: "absolute h-5/6 rounded-xl object-cover",
    key: "image1",
    id: "image",
  },
  {
    src: photo2,
    alt: "photo",
    className: "absolute h-5/6 rounded-xl object-cover",
    key: "image2",
    id: "image",
  },
  {
    src: photo3,
    alt: "photo",
    className: "absolute h-5/6 rounded-xl object-cover",
    key: "image3",
    id: "image",
  },
  {
    src: photo4,
    alt: "photo",
    className: "absolute h-5/6 rounded-xl object-cover",
    key: "image4",
    id: "image",
  },
  {
    src: photo5,
    alt: "photo",
    className: "absolute h-5/6 rounded-xl object-cover",
    key: "image5",
    id: "image",
  },
  {
    src: photo6,
    alt: "photo",
    className: "absolute h-5/6 rounded-xl object-cover",
    key: "image6",
    id: "image",
  },
];

export const aboutSections = [
  {
    title: "Visual Rhythm",
    description: "Where form meets feeling.",
    className: "flex-center flex h-screen flex-col gap-5",
    url: "/images/image10.jpg",
    gradient: "about-gradient-1",
  },
  {
    title: "Crafted Motion",
    description: "Every pixel has purpose.",
    className: "flex-center h-screen",
    url: "/images/image8.jpg",
    gradient: "about-gradient-3 ",
  },
  {
    title: "Design in Flow",
    description: "Interaction. Immersion. Intuition.",
    className: "flex-center h-screen",
    url: "/images/image9.jpg",
    gradient: "about-gradient-2",
  },
  {
    title: "Sculpted in Code",
    description: "Artistry powered by logic.",
    className: "flex-center h-screen",
    url: "/images/image3.jpg",
    gradient: "about-gradient-4",
  },
];

export const loaderItems = [
  {
    src: "/Loader/image8.jpg",
    alt: "image",
    text: "Scene.",
  },
  {
    src: "/Loader/image9.jpg",
    alt: "image",
    text: "Moment.",
  },
  {
    src: "/Loader/image6.jpg",
    alt: "image",
    text: "Memory.",
  },
];
