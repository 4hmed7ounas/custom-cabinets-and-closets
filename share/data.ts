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
import { MdOutlineBathtub, MdOutlineLocalLaundryService } from "react-icons/md";
import { GiWoodenChair } from "react-icons/gi";
import {
  cardSection,
  Links,
  socialLinks,
  contactInfo,
  serviceSection,
  mainPosterData,
  routeTitles,
} from "./types";

export const CONTACT_EMAIL = "contact@example.com";
export const CONTACT_NO = "+12345678901";
export const CONTACT_ADDRESS = "123 Main St, Anytown, USA";
export const CONTACT_MAP = "https://maps.app.goo.gl/G12bsQ3AixMrm88u8";

export const EMBED_MAP =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.243980827476!2d74.358398!3d31.462474000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI3JzQ0LjkiTiA3NMKwMjEnMzAuMiJF!5e0!3m2!1sen!2s!4v1734048538900!5m2!1sen!2s";

export const CURR_YEAR = new Date().getFullYear();

export const dummyData = {
  heading: "Custom Cabinets and Closets",
  titles: ["Quality Craftsmanship", "Innovative Designs", "Space Optimization"],
  descriptions: [
    "Our cabinets are crafted with precision and attention to detail, ensuring durability and style.",
    "We offer cutting-edge designs to match your taste and preferences, creating the perfect storage solutions.",
    "Maximize your space with our custom solutions, making your home organized and efficient.",
  ],
  imageUrl: IMAGES.landingImage,
};

export const ROUTES_TITLES: routeTitles = {
  "/": "Custom Cabinets and Closets",
  "/contact-us": "Contact Us - Custom Cabinets and Closets",
  "/news": "News - Custom Cabinets and Closets",
  "/our-team": "Our Team - Custom Cabinets and Closets",
  "/services": "Our Services - Custom Cabinets and Closets",
  "/about-us": "About Us - Custom Cabinets and Closets",
  "/services/kitchen": "Kitchen Cabinets - Custom Cabinets and Closets",
  "/services/bathroom-storage":
    "Bathroom Storage - Custom Cabinets and Closets",
  "/services/built-in": "Built-in Cabinets - Custom Cabinets and Closets",
  "/services/cabinets":
    "Custom & Commercial Cabinets - Custom Cabinets and Closets",
  "/services/closets": "Closets - Custom Cabinets and Closets",
  "/services/home-organization":
    "Home Organization - Custom Cabinets and Closets",
  "/services/laundry-storage": "Laundry Storage - Custom Cabinets and Closets",
};

export const MAINPOSTERCONTENT: mainPosterData = {
  "/": {
    title: "Custom Cabinets and Closets",
    description:
      "Transform your home with custom-designed cabinets and closets. Maximize space, enhance organization, and infuse your personal style with premium materials and innovative features for a truly functional living space.",
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Have questions or need expert advice? Reach out to us for personalized assistance in creating your dream space. Our team is here to guide you through every step of your custom cabinetry journey.",
  },
  "/news": {
    title: "News",
    description:
      "Stay in the know with the latest trends, product launches, and design inspirations in the world of custom cabinetry. Get fresh ideas and see how we're shaping the future of home organization.",
  },
  "/our-team": {
    title: "Our Team",
    description:
      "Meet the talented craftsmen and designers behind our custom cabinetry solutions. With years of expertise and a passion for quality, our team is dedicated to delivering exceptional results that transform your space.",
  },
  "/services": {
    title: "Our Services",
    description:
      "From initial design to flawless installation, our full range of services is tailored to create functional and beautiful spaces. Whether it's a kitchen, closet, or home organization, we've got you covered.",
  },
  "/services/kitchen": {
    title: "Kitchen Design & Storage",
    description:
      "Reimagine your kitchen with custom cabinetry solutions that combine elegance and practicality. Maximize storage, improve organization, and create a kitchen that fits your lifestyle and aesthetic.",
  },
  "/services/bathroom-storage": {
    title: "Bathroom Storage Solutions",
    description:
      "Create a spa-like retreat with custom bathroom storage. Our innovative designs optimize space while adding a touch of luxury, ensuring your bathroom is both organized and stylish.",
  },
  "/services/built-in": {
    title: "Built-In Cabinetry",
    description:
      "Elevate your home with built-in cabinetry designed to seamlessly blend with your space. Whether it’s for your living room, bedroom, or office, we create bespoke solutions that enhance both function and design.",
  },
  "/services/cabinets": {
    title: "Custom & Commercial Cabinets",
    description:
      "Upgrade your home with high-quality custom cabinets. Crafted with precision, our cabinets offer stylish storage solutions that are as functional as they are beautiful, tailored to fit any room.",
  },
  "/services/closets": {
    title: "Closets",
    description:
      "Transform your closet into a beautifully organized haven. Our custom closet solutions maximize space, reduce clutter, and elevate your home's style, all while keeping your belongings neatly arranged.",
  },
  "/services/home-organization": {
    title: "Home Organization",
    description:
      "Experience the joy of a well-organized home with our custom home organization solutions. From shelves to storage units, we offer designs that help you declutter and maximize every inch of your space.",
  },
  "/services/laundry-storage": {
    title: "Laundry Storage Solutions",
    description:
      "Say goodbye to laundry room chaos with our custom storage solutions. Designed to maximize space and streamline your laundry routine, our storage systems add both function and flair to your laundry room.",
  },
  "/about-us": {
    title: "About Us",
    description:
      "At the heart of our company is a passion for craftsmanship and customer satisfaction. Discover our mission to provide top-notch custom cabinetry solutions that make your home more beautiful, organized, and functional.",
  },
};

export const HOMECARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const ABOUTCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const TEAMCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const SERVICESCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const KITCHENCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const BATHROOMCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const BUILTINCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const CABINETSCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const CLOSETSCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const HOMEORGCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const LAUNDRYCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const NEWSCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const CONTACTCARDSECTION: cardSection[] = [
  {
    heading: "Custom Cabinets and Closets",
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
    imageUrl: IMAGES.cardImg1,
  },
];

export const SERVICESECTION: serviceSection[] = [
  {
    url: ROUTES.kitchen,
    icon: FaKitchenSet,
    label: "Wooden Kitchen",
    imageUrl: IMAGES.cardImg1,
  },
  {
    url: ROUTES.kitchen,
    icon: FaKitchenSet,
    label: "Wooden Kitchen",
    imageUrl: IMAGES.cardImg1,
  },
  {
    url: ROUTES.cabinets,
    icon: BiCabinet,
    label: "Wooden Cabinets",
    imageUrl: IMAGES.serviceCabinets,
  },
  {
    url: ROUTES.cabinets,
    icon: BiCabinet,
    label: "Wooden Cabinets",
    imageUrl: IMAGES.serviceCabinets,
  },
  {
    url: ROUTES.bathroomStorage,
    icon: MdOutlineBathtub,
    label: "Bathroom Storage",
    imageUrl: IMAGES.serviceBathroom,
  },
  {
    url: ROUTES.bathroomStorage,
    icon: MdOutlineBathtub,
    label: "Bathroom Storage",
    imageUrl: IMAGES.serviceBathroom,
  },
  {
    url: ROUTES.homeOrg,
    icon: IoHome,
    label: "Home Organization",
    imageUrl: IMAGES.serviceHomeOrg,
  },
  {
    url: ROUTES.homeOrg,
    icon: IoHome,
    label: "Home Organization",
    imageUrl: IMAGES.serviceHomeOrg,
  },
  {
    url: ROUTES.closets,
    icon: BiCloset,
    label: "Custom Closets",
    imageUrl: IMAGES.serviceCloset,
  },
  {
    url: ROUTES.closets,
    icon: BiCloset,
    label: "Custom Closets",
    imageUrl: IMAGES.serviceCloset,
  },
  {
    url: ROUTES.cabinets,
    icon: BiCabinet,
    label: "Commercial Cabinets",
    imageUrl: IMAGES.serviceComCabinets,
  },
  {
    url: ROUTES.cabinets,
    icon: BiCabinet,
    label: "Commercial Cabinets",
    imageUrl: IMAGES.serviceComCabinets,
  },
  {
    url: ROUTES.laundryStorage,
    icon: MdOutlineLocalLaundryService,
    label: "Laundary Storage",
    imageUrl: IMAGES.serviceLaundary,
  },
  {
    url: ROUTES.laundryStorage,
    icon: MdOutlineLocalLaundryService,
    label: "Laundary Storage",
    imageUrl: IMAGES.serviceLaundary,
  },
  {
    url: ROUTES.builtIn,
    icon: GiWoodenChair,
    label: "Built-In Furniture",
    imageUrl: IMAGES.serviceBuiltIns,
  },
  {
    url: ROUTES.builtIn,
    icon: GiWoodenChair,
    label: "Built-In Furniture",
    imageUrl: IMAGES.serviceBuiltIns,
  },
];

export const NAVLINKS: Links[] = [
  { name: "Home", route: ROUTES.home, icon: FaHome },
  { name: "About us", route: ROUTES.aboutUs, icon: FaAddressBook },
  { name: "Services", route: ROUTES.services, icon: FaGear },
  { name: "Our Team", route: ROUTES.ourteam, icon: FaPeopleGroup },
  { name: "News", route: ROUTES.news, icon: FaNewspaper },
  { name: "Contact us", route: ROUTES.contactUs, icon: BsMailbox },
];

export const SERVICELINKS: Links[] = [
  { name: "Kitchen", route: ROUTES.kitchen, icon: FaKitchenSet },
  { name: "Cabinets", route: ROUTES.cabinets, icon: BiCabinet },
  { name: "Closets", route: ROUTES.closets, icon: BiCloset },
  {
    name: "Bathroom Storage",
    route: ROUTES.bathroomStorage,
    icon: MdOutlineBathtub,
  },
  {
    name: "Laundry Storage",
    route: ROUTES.laundryStorage,
    icon: MdOutlineLocalLaundryService,
  },
  { name: "Built-In", route: ROUTES.builtIn, icon: GiWoodenChair },
  { name: "Home Organization", route: ROUTES.homeOrg, icon: IoHome },
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
