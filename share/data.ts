import {
  FaAddressBook,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaNewspaper,
} from "react-icons/fa";
import { IMAGES } from "./assets";
import { ROUTES } from "./routes";
import {
  FaGear,
  FaPeopleGroup,
  FaXTwitter,
  FaKitchenSet,
} from "react-icons/fa6";
import { BsMailbox } from "react-icons/bs";
import { BiCabinet, BiCloset } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import {
  MdOutlineBathroom,
  MdOutlineBathtub,
  MdOutlineLocalLaundryService,
} from "react-icons/md";
import { GiWoodenChair } from "react-icons/gi";
import {
  cardSection,
  navLinks,
  socialLinks,
  contactInfo,
  MetadataType,
  serviceSection,
} from "./types";

export const METADATA: MetadataType = {
  "/": {
    title: "Custom Cabinets and Closets",
    description:
      "Discover custom cabinets and closets designed to maximize space, enhance organization, and complement your style. Tailored to your needs with high-quality materials and smart features for ultimate functionality and aesthetic appeal.",
  },
  "/contact-us": {
    title: "Contact Us | Custom Cabinets and Closets",
    description:
      "Get in touch with us for custom cabinetry solutions. We are here to answer all your queries and provide assistance.",
  },
  "/news": {
    title: "News | Custom Cabinets and Closets",
    description:
      "Stay updated with the latest news and trends in custom cabinetry and closet design. Discover new ideas and inspiration.",
  },
  "/our-team": {
    title: "Our Team | Custom Cabinets and Closets",
    description:
      "Meet the skilled professionals behind our custom cabinetry solutions. Learn more about their expertise and dedication.",
  },
  "/services": {
    title: "Services | Custom Cabinets and Closets",
    description:
      "Explore our range of services designed to create functional and beautiful spaces. From design to installation, we cover it all.",
  },
  "/about-us": {
    title: "About Us | Custom Cabinets and Closets",
    description:
      "Learn more about our mission and values. Discover why we are passionate about providing custom cabinetry solutions.",
  },
};

export const CONTACT_EMAIL = "contact@example.com";
export const CONTACT_NO = "+12345678901";
export const CONTACT_ADDRESS = "123 Main St, Anytown, USA";
export const CONTACT_MAP = "https://maps.app.goo.gl/G12bsQ3AixMrm88u8";

export const EMBED_MAP =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.243980827476!2d74.358398!3d31.462474000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI3JzQ0LjkiTiA3NMKwMjEnMzAuMiJF!5e0!3m2!1sen!2s!4v1734048538900!5m2!1sen!2s";

export const CURR_YEAR = new Date().getFullYear();

// export const HOMECARDSECTION: cardSection[] = [
//   {
//     heading: "About us",
//     title: "Who are we?",
//     description:
//       "At Custom Cabinets and Closets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs. <br> With years of experience in interior design and woodworking, we’ve built a reputation for excellence, precision, and trust. From consultation to installation, our team works hand-in-hand with you to deliver personalized solutions that maximize space and beauty.",
//     imageUrl: IMAGES.cardImg1,
//   },
//   {
//     heading: "Why Choose Us",
//     title: "Why Custom Cabinets and Closets",
//     description:
//       "At Custom Cabinets and Closets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs. <br> With years of experience in interior design and woodworking, we’ve built a reputation for excellence, precision, and trust. From consultation to installation, our team works hand-in-hand with you to deliver personalized solutions that maximize space and beauty.",
//     imageUrl: IMAGES.cardImg1,
//   },
// ];

export const HOMECARDSECTION: cardSection[] = [
  {
    heading: "About us",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Custom Cabinets and Closets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
      "Our services range from consultation to installation, and our team ensures every detail is crafted to your specifications. We believe in providing solutions that maximize space while enhancing the aesthetic of your home or office.",
      "Integrity, precision, and trust are at the core of our business. We work closely with clients to understand their unique needs and deliver products that are functional, beautiful, and long-lasting.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Why Choose Us",
    titles: [
      "Quality Craftsmanship",
      "Tailored Solutions",
      "Customer Satisfaction",
    ],
    descriptions: [
      "At Custom Cabinets and Closets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg2,
  },
  {
    heading: "Why Choose Us",
    titles: [
      "Quality Craftsmanship",
      "Tailored Solutions",
      "Customer Satisfaction",
    ],
    descriptions: [
      "At Custom Cabinets and Closets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg2,
  },
];

export const SERVICESECTION: serviceSection[] = [
  {
    url: ROUTES.services,
    icon: FaKitchenSet,
    label: "Custom Kitchen Cabinets",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Wooden Cabinets",
  },
  {
    url: ROUTES.services,
    icon: MdOutlineBathroom,
    label: "Bathroom Storage",
  },
  {
    url: ROUTES.services,
    icon: MdOutlineBathtub,
    label: "Bathtub Surrounds",
  },
  {
    url: ROUTES.services,
    icon: MdOutlineLocalLaundryService,
    label: "Laundry Room Storage",
  },
  {
    url: ROUTES.services,
    icon: IoHome,
    label: "Home Organization",
  },
  {
    url: ROUTES.services,
    icon: BiCloset,
    label: "Custom Closets",
  },
  {
    url: ROUTES.services,
    icon: GiWoodenChair,
    label: "Custom Furniture",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Storage Solutions",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Commercial Cabinets",
  },
  {
    url: ROUTES.services,
    icon: GiWoodenChair,
    label: "Built-In Furniture",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Office Cabinets",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Storage Solutions",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Commercial Cabinets",
  },
  {
    url: ROUTES.services,
    icon: GiWoodenChair,
    label: "Built-In Furniture",
  },
  {
    url: ROUTES.services,
    icon: BiCabinet,
    label: "Office Cabinets",
  },
];

export const NAVLINKS: navLinks[] = [
  { name: "Home", route: ROUTES.home, icon: FaHome },
  { name: "About us", route: ROUTES.aboutUs, icon: FaAddressBook },
  { name: "Services", route: ROUTES.services, icon: FaGear },
  { name: "Our Team", route: ROUTES.ourteam, icon: FaPeopleGroup },
  { name: "News", route: ROUTES.news, icon: FaNewspaper },
  { name: "Contact us", route: ROUTES.contactUs, icon: BsMailbox },
];

export const SOCIALLINKS: socialLinks[] = [
  {
    icon: FaFacebook,
    url: "https://www.facebook.com",
    label: "Facebook",
  },
  { icon: FaXTwitter, url: "https://www.twitter.com", label: "Twitter" },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com",
    label: "LinkedIn",
  },
];

export const CONTACTINFO: contactInfo[] = [
  {
    label: "Email",
    url: `mailto:${CONTACT_EMAIL}`,
    value: CONTACT_EMAIL,
  },
  {
    label: "Phone",
    url: `tel:${CONTACT_NO}`,
    value: CONTACT_NO,
  },
  {
    label: "Address",
    url: CONTACT_MAP,
    value: CONTACT_ADDRESS,
  },
];
