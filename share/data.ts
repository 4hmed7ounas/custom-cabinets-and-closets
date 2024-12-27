import {
  FaAddressBook,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaNewspaper,
  FaSink,
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
  reviewsData,
} from "./types";

const contactEmail: string = "contact@example.com";
const contactNo: string = "+1 403-870-7426";
const contactAddress: string = "123 Main St, Anytown, USA";
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
  "/services/wet-bars": "Wet Bars - Custom Cabinets and Closets",
};

export const MAINPOSTERCONTENT: mainPosterData = {
  "/": {
    title: "WARNING: DEVELOPMENT STAGES",
    description:
      "Transform your home with custom-designed cabinets and closets. Maximize space, enhance organization, and infuse your personal style. With premium materials and innovative features, we create spaces that are both beautiful and functional.",
    imageUrl: IMAGES.landingImage,
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Have questions or need expert advice? Reach out to us for personalized assistance in creating your dream space. Our team is here to guide you through every step of your cabinetry journey, ensuring your satisfaction.",
    imageUrl: IMAGES.landingImage,
  },
  "/news": {
    title: "News",
    description:
      "Stay updated with the latest trends, product launches, and design inspirations in custom cabinetry. Discover fresh ideas and learn how we’re shaping the future of home organization with innovation and style.",
    imageUrl: IMAGES.landingImage,
  },
  "/our-team": {
    title: "Our Team",
    description:
      "Meet the skilled craftsmen and designers behind our cabinetry solutions. With years of experience and a dedication to excellence, our team ensures every project meets the highest standards of quality and precision.",
    imageUrl: IMAGES.landingImage,
  },
  "/services": {
    title: "Our Services",
    description:
      "From initial design to flawless installation, our services are tailored to create functional and stunning spaces. Whether it’s a kitchen, closet, or home organization system, we’ve got you covered every step of the way.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/kitchen": {
    title: "Kitchen Design & Storage",
    description:
      "Reimagine your kitchen with elegant and practical cabinetry solutions. Our designs maximize storage, improve organization, and create a kitchen that complements your lifestyle and aesthetic preferences.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/bathroom-storage": {
    title: "Bathroom Storage Solutions",
    description:
      "Create a spa-like retreat with our innovative bathroom storage designs. Maximize space, add a touch of luxury, and ensure your bathroom remains both organized and stylish with our custom solutions.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/built-in": {
    title: "Built-In Cabinetry",
    description:
      "Enhance your home with built-in cabinetry solutions designed to seamlessly integrate with your space. From living rooms to offices, our bespoke designs combine style and functionality for a perfect fit.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/cabinets": {
    title: "Custom & Commercial Cabinets",
    description:
      "Upgrade your home with precision-crafted cabinets. Our designs are stylish, highly functional, and tailored to fit any room, offering smart storage solutions that blend seamlessly with your décor.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/closets": {
    title: "Closets",
    description:
      "Transform your closet into a beautifully organized space. Our custom closet solutions maximize storage, reduce clutter, and ensure every inch is utilized efficiently, all while looking stylish.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/home-organization": {
    title: "Home Organization",
    description:
      "Discover the joy of a well-organized home with our custom storage solutions. From shelves to storage units, our designs help declutter spaces while enhancing functionality and visual appeal.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/wet-bars": {
    title: "Wet Bars",
    description:
      "Enhance your home entertainment with custom-designed wet bars. Featuring premium materials, sleek finishes, and ample storage, our wet bars are perfect for hosting guests or enjoying quiet evenings.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/laundry-storage": {
    title: "Laundry Storage Solutions",
    description:
      "Simplify your laundry routine with smart storage solutions. Our custom designs maximize space, improve efficiency, and add a touch of style, making your laundry room both functional and organized.",
    imageUrl: IMAGES.serviceImage,
  },
  "/about-us": {
    title: "About Us",
    description:
      "At the core of our company lies a passion for craftsmanship and customer satisfaction. We’re dedicated to delivering top-notch cabinetry solutions that enhance your home’s beauty, organization, and functionality.",
    imageUrl: IMAGES.aboutImage,
  },
};

export const HOMECARDSECTION: cardSection[] = [
  {
    heading: "Who is Custom Cabinets and Closets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Custom Cabinets and Closets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
      "Our services range from consultation to installation, and our team ensures every detail is crafted to your specifications. We believe in providing solutions that maximize space while enhancing the aesthetic of your home or office.",
      "Integrity, precision, and trust are at the core of our business. We work closely with clients to understand their unique needs and deliver products that are functional, beautiful, and long-lasting.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Transform Your Space with Custom Cabinets & Closets",
    titles: [
      '"Custom Cabinets And Closets" Has Been Making Cabinets & Closets in Calgary for Over 13 Years',
    ],
    descriptions: [
      "At Custom Cabinets and Closets, we believe that your home is an expression of who you are. Every detail matters—each color, texture, and design element should reflect your personal taste and lifestyle. That's why we specialize in crafting bespoke cabinetry that fits perfectly with your vision and space. With over 13 years of experience in Calgary, our locally owned and operated shop has been a trusted name in creating custom cabinets and closets. Our state-of-the-art manufacturing facility allows us to bring your ideas to life with precision and care, ensuring each piece is tailored to your exact specifications. Whether you need storage solutions, functional designs, or a complete transformation of your space, we are here to help. Start creating the space you've always dreamed of. <a href='/contact-us'><b>Contact us today</b></a> to explore the possibilities of custom cabinetry that is as unique as you are.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "The Benefits of Working with Us",
    titles: [
      "Expert Craftsmanship You Can Trust",
      "Tailored Designs for Every Space",
      "A Commitment to Exceptional Service",
    ],
    descriptions: [
      "At Custom Cabinets and Closets, we take pride in our superior craftsmanship. Our expert team combines advanced woodworking techniques with innovative interior design to ensure that every piece is not only functional but also beautifully crafted to your specifications.",
      "We specialize in creating personalized, tailor-made solutions that perfectly fit your space and lifestyle. Whether it's a custom closet, a kitchen makeover, or a full home transformation, we design to optimize storage, enhance style, and improve the flow of your space.",
      "Customer satisfaction is at the heart of everything we do. We don't just build cabinets and closets – we build lasting relationships. From consultation to installation and beyond, we're with you every step of the way, ensuring that every detail is perfect and that you're completely satisfied with the results.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const REVIEWS: reviewsData[] = [
  {
    title: "Excellent Service!",
    description:
      "The team was professional, timely, and delivered high-quality results. Highly recommended!",
    reviewer: "John Doe",
    rating: 5,
  },
  {
    title: "Great Experience",
    description:
      "Very satisfied with the work. The attention to detail was impressive.",
    reviewer: "Jane Smith",
    rating: 4,
  },
  {
    title: "Could be better",
    description:
      "Service was good, but there were slight delays. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ut, impedit exercitationem dignissimos consequuntur assumenda, placeat ea provident saepe tempora asperiores expedita iusto officia eos dolore iure ducimus quidem quia mollitia facilis amet quos. Nemo, molestias in molestiae ab illum dolores. Sit, dicta asperiores dignissimos reiciendis quae eligendi cupiditate et neque voluptate dolore culpa quisquam nulla temporibus veritatis possimus vel in porro odio, recusandae, similique debitis! Rerum animi odit reiciendis minima, debitis voluptate perspiciatis obcaecati cum suscipit dignissimos dolore nulla cumque provident dolorum amet culpa in nostrum eum modi dolor, maxime neque. Quo repellat tempore dignissimos tenetur sed nesciunt deserunt?",
    reviewer: "Alice Brown",
    rating: 5,
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

export const WETBARSCARDSECTION: cardSection[] = [
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
    label: "Custom & Commercial Cabinets",
    imageUrl: IMAGES.serviceCabinets,
  },
  {
    url: ROUTES.cabinets,
    icon: BiCabinet,
    label: "Custom & Commercial Cabinets",
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
    icon: FaSink,
    label: "Wet Bars",
    imageUrl: IMAGES.serviceComCabinets,
  },
  {
    url: ROUTES.cabinets,
    icon: FaSink,
    label: "Wet Bars",
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
  { name: "Connect", route: ROUTES.contactUs, icon: BsMailbox },
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
  { name: "Built-In Furniture", route: ROUTES.builtIn, icon: GiWoodenChair },
  { name: "Wet Bars", route: ROUTES.wetBars, icon: FaSink },
  { name: "Home Organization", route: ROUTES.homeOrg, icon: IoHome },
];

export const SOCIALLINKS: socialLinks[] = [
  {
    icon: FaFacebook,
    url: "https://www.facebook.com/share/HxGstcCJkD1h5TqB/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: FaXTwitter,
    url: "https://x.com/bellacrafts01?s=11",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/bellacraftsofficial?igsh=ZDNoaW15ZmFjNXVy&utm_source=qr",
    label: "Instagram",
  },
];

export const CONTACTINFO: contactInfo[] = [
  {
    label: "Email",
    url: `mailto:${contactEmail}`,
    value: contactEmail,
  },
  {
    label: "Phone",
    url: `tel:${contactNo}`,
    value: contactNo,
  },
  {
    label: "Address",
    url: CONTACT_MAP,
    value: contactAddress,
  },
];
