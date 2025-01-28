import {
  FaAddressBook,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaNewspaper,
  FaPhotoVideo,
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
  Links,
  socialLinks,
  contactInfo,
  serviceSection,
  mainPosterData,
  routeTitles,
  reviewsData,
  servicesHome,
  teamData,
  cardSection,
  galleryItem,
} from "./types";

const contactEmail: string = "luxekitchencabinets@gmail.com";
const contactNo: string = "+1403-796-7399";
const contactAddress: string = "#116 - 8 heatherglen pl, Rocky View AB";
export const CONTACT_MAP = "https://maps.app.goo.gl/DJonswjCub4mKbZWA";

export const EMBED_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.409894502563!2d-113.8907439239054!3d50.99009724836266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371795ec5ab0c21%3A0xe8e850edfad8b46c!2s8%20Heatherglen%20Pl%20%23116%2C%20Rocky%20View%2C%20AB%20T1X%202K3%2C%20Canada!5e0!3m2!1sen!2s!4v1735992812266!5m2!1sen!2s";

export const CURR_YEAR = new Date().getFullYear();

export const dummyData: cardSection = {
  heading: "Luxe Kitchen Cabinets",
  mainDesc:
    "Transform your home with Luxe Kitchen Cabinets - custom cabinetry in Calgary. We specialize in custom kitchen cabinets, bathroom storage, custom closets, built-in furniture, and commercial cabinets. Our expert team designs functional and stylish solutions tailored to your space, using premium materials and innovative features. Whether it's a wet bar, laundry storage, or custom cabinets, we ensure each project maximizes space and enhances your home's style.",
  titles: ["Quality Craftsmanship", "Innovative Designs", "Space Optimization"],
  descriptions: [
    "Our cabinets are crafted with precision and attention to detail, ensuring durability and style.",
    "We offer cutting-edge designs to match your taste and preferences, creating the perfect storage solutions.",
    "Maximize your space with our custom solutions, making your home organized and efficient.",
  ],
  imageUrl: IMAGES.landingImage,
};

export const ROUTES_TITLES: routeTitles = {
  "/": "Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/contact-us":
    "Contact Us - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/blogs":
    "Blogs - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/our-team":
    "Our Team - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/gallery":
    "Gallery - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services":
    "Our Services - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/about-us":
    "About Us - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/kitchen":
    "Kitchen Cabinets - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/bathroom-storage":
    "Bathroom Storage - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/built-in":
    "Built-in Cabinets - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/cabinets":
    "Custom & Commercial Cabinets - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/closets":
    "Closets - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/home-organization":
    "Home Organization - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/laundry-storage":
    "Laundry Storage - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
  "/services/wet-bars":
    "Wet Bars - Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
};

export const MAINPOSTERCONTENT: mainPosterData = {
  "/": {
    title:
      "Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets",
    description:
      "Transform your home with Luxe Kitchen Cabinets, the leading provider of custom cabinetry in Calgary. We specialize in custom kitchen cabinets, bathroom storage, custom closets, built-in furniture, and commercial cabinets. Our expert team designs functional, stylish, and innovative solutions tailored to your space. Whether it’s creating a wet bar, enhancing laundry storage, or installing custom cabinets, we maximize space and improve your home's style with premium materials and superior craftsmanship.",
    imageUrl: IMAGES.landingImage,
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Have questions or need expert advice? Reach out to us for personalized assistance in creating your dream space with Luxe Kitchen Cabinets. Our team in Calgary is here to guide you through every step of your cabinetry journey, ensuring your satisfaction. Whether you're ready to start a project or need more information about custom cabinetry, we're always happy to help.",
    imageUrl: IMAGES.g25,
  },
  "/blogs": {
    title: "Blogs",
    description:
      "Stay inspired with our latest blogs on kitchen design, cabinetry trends, and expert tips. Explore creative ideas, practical advice, and industry insights to help you transform your space with Luxe Kitchen Cabinets. Whether you're looking for renovation inspiration or expert guidance on custom cabinetry, our blog has everything you need to bring your dream kitchen to life.",
    imageUrl: IMAGES.g27,
  },
  "/gallery": {
    title: "Gallery",
    description:
      "Explore our gallery to see the exceptional craftsmanship and design excellence of Luxe Kitchen Cabinets. From modern kitchens to custom closets, our completed projects showcase the quality, functionality, and style that define our work. Get inspired for your next cabinetry project in Calgary with our visually stunning, functional designs.",
    imageUrl: IMAGES.builtImg4,
  },
  "/our-team": {
    title: "Our Team",
    description:
      "Meet the skilled craftsmen and designers behind Luxe Kitchen Cabinets' innovative solutions in Calgary. With years of experience and a dedication to excellence, our team ensures every project meets the highest standards of quality, precision, and customer satisfaction. We pride ourselves on our attention to detail and commitment to creating spaces that exceed client expectations.",
    imageUrl: IMAGES.g19,
  },
  "/services": {
    title: "Our Services",
    description:
      "From initial design to flawless installation, our services are tailored to create functional and stunning spaces. Whether it’s kitchen remodeling, closet organization, or home storage systems, Luxe Kitchen Cabinets offers custom cabinetry solutions. We work closely with you to ensure that each solution is a perfect fit for your lifestyle, aesthetic preferences, and functional needs.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/kitchen": {
    title: "Kitchen Design & Storage",
    description:
      "Reimagine your kitchen in Calgary with elegant and practical cabinetry solutions from Luxe Kitchen Cabinets. Our designs maximize storage, improve organization, and create a kitchen that complements your lifestyle and aesthetic preferences. From sleek modern designs to warm traditional styles, we have the perfect custom cabinetry solution for your home.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/bathroom-storage": {
    title: "Bathroom Storage Solutions",
    description:
      "Create a spa-like retreat with our innovative bathroom storage designs in Calgary. Maximize space, add a touch of luxury, and ensure your bathroom remains both organized and stylish with our custom cabinetry solutions. We incorporate smart storage elements and premium finishes to ensure your bathroom is as functional as it is beautiful.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/built-in": {
    title: "Built-In Cabinetry",
    description:
      "Enhance your home in Calgary with built-in cabinetry solutions designed to seamlessly integrate with your space. From living rooms to offices, Luxe Kitchen Cabinets’ bespoke built-in designs combine style and functionality for a perfect fit. These built-ins provide both beauty and utility, making them an ideal addition to any home, whether contemporary or classic.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/cabinets": {
    title: "Custom & Commercial Cabinets",
    description:
      "Upgrade your home or business in Calgary with precision-crafted custom cabinets from Luxe Kitchen Cabinets. Our designs are stylish, highly functional, and tailored to fit any room. Offering smart storage solutions that blend seamlessly with your décor, we create custom cabinets for kitchens, bathrooms, and commercial spaces that enhance organization and overall aesthetic appeal.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/closets": {
    title: "Closets",
    description:
      "Transform your closet into a beautifully organized space with Luxe Kitchen Cabinets' custom closet solutions in Calgary. Our closet designs maximize storage, reduce clutter, and ensure every inch is utilized efficiently, all while looking stylish. Whether it’s a walk-in closet or compact space, we create functional and beautiful designs that suit your personal needs and style.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/home-organization": {
    title: "Home Organization",
    description:
      "Discover the joy of a well-organized home with Luxe Kitchen Cabinets' custom storage solutions in Calgary. From shelves to storage units, our designs help declutter spaces while enhancing both functionality and visual appeal. We create customized home organization systems that maximize every inch of your home while maintaining a stylish and cohesive look.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/wet-bars": {
    title: "Wet Bars",
    description:
      "Enhance your home entertainment in Calgary with custom-designed wet bars from Luxe Kitchen Cabinets. Featuring premium materials, sleek finishes, and ample storage, our wet bars are perfect for hosting guests or enjoying quiet evenings. Whether you need a compact design or a larger setup, our wet bars are a sophisticated addition to your entertainment space.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/laundry-storage": {
    title: "Laundry Storage Solutions",
    description:
      "Simplify your laundry routine with smart storage solutions from Luxe Kitchen Cabinets in Calgary. Our custom designs maximize space, improve efficiency, and add a touch of style, making your laundry room both functional and organized. Say goodbye to cluttered countertops and hello to a sleek, organized space with our innovative designs.",
    imageUrl: IMAGES.serviceImage,
  },
  "/about-us": {
    title: "About Us",
    description:
      "At the core of Luxe Kitchen Cabinets lies a passion for craftsmanship, innovation, and customer satisfaction. We're dedicated to delivering top-notch cabinetry solutions that enhance your home’s beauty, organization, and functionality. Our experienced team in Calgary works closely with clients to bring their vision to life, ensuring every detail reflects their unique needs and preferences.",
    imageUrl: IMAGES.aboutImage,
  },
};

export const HOMECARDSECTION: cardSection[] = [
  {
    heading:
      "Who is Luxe Kitchen Cabinets - Custom Cabinetry Experts in Calgary",
    titles: ["Who Are We?", "What We Do?", "Our Core Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate custom cabinet makers based in Calgary, Alberta, specializing in high-quality kitchen cabinets, bathroom cabinets, and office cabinetry solutions. With over 13 years of experience, our expertise lies in transforming homes and offices with tailor-made custom cabinetry that combines functionality and style. Our team of skilled craftsmen delivers exceptional quality to every project, ensuring a perfect fit for your space.",
      "We offer a comprehensive range of services from initial consultation to flawless installation. Whether you're looking for elegant kitchen cabinets in Calgary or stylish bathroom and office cabinetry, Luxe Kitchen Cabinets provides innovative and functional designs that enhance your space. Every piece is crafted with care, attention to detail, and a commitment to making your vision come to life.",
      "Integrity, precision, and trust are the foundations of Luxe Kitchen Cabinets. As trusted cabinet makers in Calgary, we work closely with clients in Calgary and the surrounding areas, delivering superior craftsmanship in all our cabinet-making projects. Our dedication to quality ensures that your custom cabinetry not only meets but exceeds your expectations.",
    ],
    imageUrl: IMAGES.kitchenImg3,
  },
  {
    heading:
      "Transform Your Space with Luxe Kitchen Cabinets - Calgary's Premier Cabinet Builders",
    titles: [
      '"Luxe Kitchen Cabinets" - 13+ Years of Custom Cabinetry Excellence in Calgary',
    ],
    descriptions: [
      "For over 13 years, Luxe Kitchen Cabinets has been a leader in designing and building custom kitchen cabinets in Calgary, Alberta. We are known for delivering bespoke solutions that reflect your unique style, whether it’s for kitchen cabinets, bathroom storage, office cabinetry, or any other space. Our commitment to exceptional craftsmanship and innovative designs has made us a trusted name in the custom cabinetry industry in Calgary. Our locally owned and operated shop offers personalized services tailored to your needs. From designing luxurious bathroom cabinets to organizing your closet or enhancing your office space, Luxe Kitchen Cabinets combines advanced techniques and attention to detail to bring your vision to life. Our team takes pride in creating cabinetry that is not only beautiful but also highly functional. Whether you're renovating your kitchen or organizing your office, our custom cabinetry solutions are designed to suit your lifestyle. <a href='/contact-us'><b>Contact us today</b></a> to start your transformation with the best custom cabinet builders in Calgary.",
    ],
    imageUrl: IMAGES.servicesImg4,
  },
  {
    heading:
      "The Benefits of Choosing Luxe Kitchen Cabinets - Trusted Cabinet Makers in Calgary",
    titles: [
      "Expert Craftsmanship for Kitchen Cabinets in Calgary",
      "Tailored Designs for Cabinets in Calgary Homes and Offices",
      "Unmatched Service for Custom Cabinets in Calgary",
    ],
    descriptions: [
      "As expert cabinet makers in Calgary, Luxe Kitchen Cabinets takes pride in delivering superior craftsmanship with over 13 years of experience in creating stunning kitchen cabinets. Our custom cabinetry solutions are designed to elevate your space while providing exceptional functionality. Whether you need custom kitchen cabinets, bathroom storage, or office cabinets in Calgary, our skilled team ensures every piece is crafted to perfection.",
      "Luxe Kitchen Cabinets provides tailored designs that fit seamlessly into any space. Whether it's creating modern kitchen cabinets for a contemporary home or designing functional office cabinetry, we are Calgary's trusted experts. We work with you to ensure that your custom cabinets maximize storage while enhancing the aesthetic appeal of your home or office.",
      "Customer satisfaction is our top priority. From consultation to installation, Luxe Kitchen Cabinets works closely with clients to deliver cabinetry that exceeds expectations. Our team specializes in custom cabinet painting, precision craftsmanship, and quality service, ensuring your cabinetry in Calgary lasts for years to come.",
    ],
    imageUrl: IMAGES.bathroomImg2,
  },
];

export const REVIEWS: reviewsData[] = [
  {
    title: "Exceptional Craftsmanship!",
    description:
      "Luxe Kitchen Cabinets exceeded our expectations! The custom kitchen cabinets they crafted for our home are not only beautiful but also incredibly functional. The team was professional and detail-oriented throughout the entire process. Highly recommend their services in Calgary!",
    reviewer: "Michael Carter",
    rating: 5,
  },
  {
    title: "Professional and Timely Service",
    description:
      "From consultation to installation, the experience was seamless. The team designed a stunning wet bar for our entertainment space that perfectly matches our style. Their attention to detail and use of quality materials are unmatched.",
    reviewer: "Sarah Thompson",
    rating: 5,
  },
  {
    title: "Great Results, Slight Delays",
    description:
      "The cabinets turned out fantastic and really elevated our home's aesthetic. However, there were minor delays in the project timeline. Overall, the quality of the work makes up for it, and I'd still recommend Luxe Kitchen Cabinets.",
    reviewer: "Alice Brown",
    rating: 4,
  },
  {
    title: "Highly Satisfied with Custom Closets",
    description:
      "The team at Luxe Kitchen Cabinets designed custom closets for our home, and we couldn't be happier! The storage solutions are tailored to our needs, and the build quality is exceptional. Their expertise truly shows in their work.",
    reviewer: "Emma Davis",
    rating: 5,
  },
  {
    title: "Wonderful Kitchen Renovation",
    description:
      "We had Luxe Kitchen Cabinets handle our kitchen renovation, and the results were amazing. The team was knowledgeable, courteous, and efficient. Our new kitchen cabinets are exactly what we envisioned. Thank you for the great service!",
    reviewer: "James Wilson",
    rating: 5,
  },
];

export const SERVICESHOME: servicesHome[] = [
  {
    title:
      "Transform Your Home with Luxe Kitchen Cabinets - Calgary's Premier Custom Cabinetry Experts",
    description:
      "When it comes to enhancing the style and functionality of your home, Luxe Kitchen Cabinets is Calgary's trusted name in custom cabinetry solutions. With over 13 years of experience, we specialize in creating custom kitchen cabinets for both new builds and renovations, tailored to suit your unique needs and preferences. Our expertise also extends to custom bathroom cabinets, custom closets, and modern kitchen cabinets, ensuring that every space in your home is both stylish and functional.",
  },
  {
    title: "Custom Kitchen Cabinets in Calgary",
    description:
      "Your kitchen is the heart of your home, and we believe it should be as functional as it is beautiful. At Luxe Kitchen Cabinets, our custom kitchen cabinets are designed to optimize space while complementing your home's style. Whether you prefer sleek modern designs, including high gloss cabinets or classic traditional aesthetics, we bring your dream kitchen to life with custom kitchen renovations, luxurious storage solutions, and shaker style kitchen cabinets.",
  },
  {
    title: "Personalized Closet Designs for Organized Living",
    description:
      "Say goodbye to clutter with our personalized closet designs. We create custom storage solutions that maximize space, improve organization, and reflect your personal style. Whether it's a walk-in wardrobe or a compact solution, we ensure every detail is tailored to your needs. From custom closets in Calgary to innovative closet designs in Alberta, we create spaces that help you stay organized.",
  },
  {
    title: "Luxury Bathroom Vanities in Calgary",
    description:
      "Upgrade your bathroom with our luxury bathroom vanities, designed to add sophistication and practicality to your space. From contemporary floating designs to timeless double-sink setups, we deliver vanities that blend seamlessly with your décor. Whether you're looking for pre-finished kitchen cabinets or custom bathroom cabinetry, we offer solutions that enhance your home's elegance.",
  },
  {
    title: "Tailored Cabinetry Solutions for Every Room",
    description:
      "Our expertise doesn't stop at kitchens. We offer tailored cabinetry solutions for bathrooms, bars, closets, and more. Each design is crafted with precision to enhance your space's functionality and elegance. From custom cabinets in Calgary to luxury home cabinetry, we work closely with you to create cabinetry that fits your lifestyle and taste.",
  },
  {
    title: "Calgary Cabinetry for Renovation Projects",
    description:
      "If you're renovating your home, our Calgary cabinetry services are here to help. We collaborate closely with homeowners and contractors to deliver stunning results that align with your vision and timeline. Whether it's a custom kitchen renovation, bathroom cabinets, or modern kitchen cabinets, we provide cabinetry solutions that make your home feel like new.",
  },
  {
    title: "Our Best Services",
    description:
      "At Luxe Kitchen Cabinets, we pride ourselves on offering the best custom cabinetry services in Calgary. Whether you're looking for custom kitchen cabinets, modern kitchen renovations, luxury bathroom vanities, or custom closets, our team is dedicated to bringing your vision to life. We specialize in high gloss cabinets, shaker style kitchen cabinets, and custom storage solutions to make your home truly exceptional. From full home renovations to simple upgrades, our expert craftsmanship and attention to detail ensure that every project is a success.",
  },
];

export const ABOUTCARDSECTION: cardSection[] = [
  {
    heading: "Our Story",
    titles: [
      "How Luxe Kitchen Cabinets Began",
      "Our Growth in Custom Cabinetry",
      "Our Passion for Kitchen Renovations",
    ],
    descriptions: [
      "At Luxe Kitchen Cabinets Calgary, our journey began with a simple yet powerful idea: to create kitchens and spaces that are not just functional but also inspiring. From humble beginnings in Calgary, we have grown into a trusted name in custom cabinetry, built on passion, craftsmanship, and a commitment to excellence in custom kitchen cabinets.",
      "Over the years, Luxe Kitchen Cabinets Calgary has expanded from a small team of dedicated artisans to a full-scale operation, serving homes and offices with innovative and personalized cabinetry solutions. Whether you're looking for modern kitchen cabinets, bathroom storage, or luxury office cabinets, we bring innovation to your space.",
      "Our passion lies in creating timeless designs that blend functionality with aesthetics, ensuring every project tells a unique story. From kitchen cabinets Calgary to bathroom cabinets and office cabinets, Luxe Kitchen Cabinets caters to diverse needs and delivers high-quality, custom storage solutions.",
    ],
    imageUrl: IMAGES.g26,
  },
  {
    heading: "Our Expertise",
    titles: [
      "Tailored Kitchen Solutions",
      "Custom Closets & Cabinets",
      "Bathroom & Laundry Storage",
      "Built-In Furniture & Wet Bars",
      "Home Organization Systems",
    ],
    descriptions: [
      "Our kitchen solutions are designed to enhance your cooking experience with innovative storage ideas, modern aesthetics, and functional layouts that suit your lifestyle. Whether you need kitchen cabinets in Calgary or custom kitchen designs, we specialize in modern kitchen cabinets, luxury kitchen renovations, and custom storage solutions that perfectly match your needs.",
      "We design custom closets and cabinets that cater to your specific needs, whether it's maximizing storage or adding a touch of luxury to your space. Our expertise in creating bespoke cabinetry, including custom kitchen cabinets, bathroom cabinets, and closet systems, makes us a top choice for cabinet makers in Calgary. We offer custom storage solutions for every room in your home.",
      "Our bathroom and laundry storage solutions provide a balance of style and function, keeping your spaces organized and efficient, even in smaller areas. We offer custom bathroom cabinets in Calgary that are both practical and stylish, with a focus on luxury bathroom vanities and custom storage solutions.",
      "From built-in furniture to wet bars, we craft unique, integrated pieces that complement your living spaces, offering both beauty and functionality. Our custom-built furniture ensures that every piece fits seamlessly into your home, whether you're looking for a luxe kitchen, a wet bar, or custom storage solutions for your home.",
      "Our home organization systems are designed to simplify your life. We create storage solutions that help you maintain a clutter-free and organized home, making it easier to manage everyday tasks. Explore our range of custom cabinets and home organization solutions in Calgary, including custom closets, kitchen cabinetry, and luxury home cabinets.",
    ],
    imageUrl: IMAGES.g33,
  },
  {
    heading: "Why Choose Luxe Kitchen Cabinets",
    titles: [
      "Innovative Kitchen Designs Calgary",
      "Premium Materials for Cabinets",
      "Customer-Focused Cabinetry Services",
    ],
    descriptions: [
      "Our team works closely with you to understand your vision and goals, ensuring every detail is meticulously crafted. With a focus on quality and functionality, we create custom kitchen solutions that not only meet but exceed expectations. From luxury kitchen cabinets to custom closets, our designs are always on-trend and highly functional.",
      "We use only the finest materials, ensuring durability, longevity, and an elegant finish in every project we undertake. Our commitment to quality makes us the preferred choice for custom cabinets and cabinetry solutions in Calgary, ensuring your investment lasts for years to come.",
      "Customer satisfaction is our top priority. From consultation to installation, we ensure every step is seamless and every expectation is exceeded. Our dedication to excellence has earned us a reputation as one of the best custom cabinet makers in Calgary, providing high-quality kitchen and bathroom cabinetry solutions.",
    ],
    imageUrl: IMAGES.g29,
  },
  {
    heading: "Our Process",
    titles: [
      "Personalized Consultation for Your Cabinets",
      "Custom Design Process",
      "Expert Installation Services",
    ],
    descriptions: [
      "Our process begins with a personalized consultation to understand your needs. From there, we craft tailored designs that blend functionality with aesthetics, ensuring your space is transformed into something truly unique.",
      "Our expert designers then create custom kitchen and cabinet designs that combine style, function, and your unique vision. We ensure every element aligns with your lifestyle and preferences, resulting in a perfect fit for your home.",
      "With precision and care, our expert team executes the installation of your custom kitchen cabinets, bathroom storage, or home organization systems. Every detail is meticulously aligned with the design plan to deliver exceptional results.",
    ],
    imageUrl: IMAGES.g30,
  },
];

export const TEAMCARDSECTION: cardSection[] = [
  {
    heading: "Leadership Team",
    titles: [
      "Visionary Leaders",
      "Strategic Thinkers",
      "Passionate Innovators",
    ],
    descriptions: [
      "Our leadership team is a group of seasoned professionals, each bringing vast experience and specialized knowledge to propel the company forward. Together, we foster a culture of excellence, ensuring innovative design solutions, exceptional craftsmanship, and an unwavering commitment to customer satisfaction. Our leaders guide the company towards long-term success while inspiring creativity and collaboration at every level.",
      "With a shared vision of pushing the boundaries of design, our leadership team consistently champions the importance of quality and innovation. Their strategic thinking and decision-making ensure that Luxe Kitchen Cabinets remains a trusted name, setting industry standards and continuously raising the bar for design excellence.",
      "Their dedication to craftsmanship, innovation, and client satisfaction is reflected in everything we do. Our leadership team’s expertise and passion create an environment that allows every team member to thrive, ensuring that every project is executed with the highest level of detail and care.",
    ],
    imageUrl: IMAGES.g26,
  },
  {
    heading: "Design Experts",
    titles: ["Creative Minds", "Tailored Designs", "Attention to Detail"],
    descriptions: [
      "Our design experts are masters of blending creativity with functionality. With a keen eye for design and an understanding of your unique vision, they bring your ideas to life, ensuring that every project is a perfect reflection of your personal style. They specialize in creating harmonious designs that are not only aesthetically stunning but also highly practical for everyday use.",
      "By closely collaborating with clients throughout the design process, our experts ensure that every detail, from layout to material selection, is aligned with your vision. Their ability to translate ideas into functional, beautiful designs enhances your living space, creating environments that are as enjoyable as they are functional.",
      "With a passion for precision and craftsmanship, our design team ensures every element is meticulously executed, paying close attention to even the smallest details. Their commitment to quality guarantees that each project surpasses the highest standards of design, creating timeless spaces that enhance your lifestyle.",
    ],
    imageUrl: IMAGES.g34,
  },
  {
    heading: "Skilled Craftsmen",
    titles: ["Master Artisans", "Quality Craftsmanship", "Reliable Execution"],
    descriptions: [
      "Our skilled craftsmen are true artisans, dedicating themselves to delivering the highest quality work on every project. They use the finest materials and state-of-the-art techniques to ensure that each piece is as durable as it is beautiful. With an unwavering commitment to perfection, our craftsmen bring your vision to life, providing lasting beauty and practicality.",
      "With years of experience, our craftsmen blend traditional techniques with modern innovations, ensuring every project stands the test of time. Their expert knowledge and dedication to quality guarantee that each design is crafted with precision, providing both visual appeal and lasting durability.",
      "From start to finish, our craftsmen oversee every detail of the process, ensuring that your project is executed with the highest standard of excellence. Their ability to manage each phase of production with care and precision guarantees that your vision becomes a reality, delivered on time and without compromise.",
    ],
    imageUrl: IMAGES.g27,
  },
  {
    heading: "Customer Success Team",
    titles: ["Dedicated Support", "Clear Communication", "Client Satisfaction"],
    descriptions: [
      "Our customer success team is committed to providing exceptional service at every stage of your journey with us. From the first consultation to the final installation, we offer personalized support, ensuring that all your questions are answered and your needs are met. Our team is dedicated to making your experience smooth, stress-free, and enjoyable.",
      "We believe in transparency and open communication. Our customer success team maintains an ongoing dialogue throughout the entire process, ensuring you are always informed and involved. Your feedback is essential to us, and we ensure that your ideas are fully integrated into every aspect of the project.",
      "We go above and beyond to ensure that you are completely satisfied with our work. Our focus is on delivering exceptional results that reflect your vision, ensuring every detail is just right. From the first idea to the final product, your satisfaction is our top priority.",
    ],
    imageUrl: IMAGES.g25,
  },
];

export const TEAMDATA: teamData[] = [
  {
    name: "Arsalan Anwar (SHANI)",
    designation: "Co-Founder & Operations Strategist",
    picture: IMAGES.ArsalanAnwar,
    description:
      "Arsalan Anwar, the Co-Founder and Operations Strategist at Luxe Kitchen Cabinets, ensures that every aspect of the business runs smoothly. With over 13 years of experience in operations and project management, he specializes in optimizing workflows to deliver exceptional results on time and within budget. Mr. Arsalan's meticulous attention to detail and commitment to customer satisfaction ensure that each project not only meets but exceeds expectations. His strategic approach has been instrumental in expanding Luxe Kitchen Cabinets' reach and maintaining its reputation for excellence in Calgary, Alberta and beyond.",
  },
  {
    name: "Ghulam Ahmed (SONY)",
    designation: "Co-Founder & Creative Director",
    picture: IMAGES.GhulamAhmed,
    description:
      "As the Co-Founder and Creative Director of Luxe Kitchen Cabinets, Ghulam Ahmed leads the design vision, ensuring that each project combines style and practicality. With a passion for innovative solutions, he brings over 17 years of experience in crafting bespoke cabinetry. Mr. Ahmed excels at transforming spaces through designs that maximize functionality while reflecting the unique preferences of each client. His dedication to staying ahead of design trends and incorporating premium materials has solidified Luxe Kitchen Cabinets' reputation as Calgary's premier custom cabinetry provider.",
  },
  {
    name: "Gurvinder Singh",
    designation: "Product Manager",
    picture: IMAGES.GurvinderSingh,
    description:
      "Gurvinder Singh, the Product Manager at Luxe Kitchen Cabinets, plays a pivotal role in overseeing product development and innovation. With a keen eye for detail and a strategic mindset, Mr. Gurvinder ensures that all products meet the highest standards of quality and functionality. His expertise in market analysis and customer insights helps shape designs that resonate with clients' needs. He's leadership has been instrumental in driving growth and maintaining Luxe Kitchen Cabinets' reputation for excellence in the industry.",
  },
];

export const GALLERYITEMS: galleryItem[] = [
  {
    src: IMAGES.g1,
    title: "Modern Kitchen Cabinets Calgary - Luxe Kitchen Cabinets",
    desc: "Explore this sleek and stylish modern kitchen with custom kitchen cabinets designed for both aesthetics and functionality in Calgary.",
  },
  {
    src: IMAGES.g2,
    title: "Luxury Bathroom Cabinets Calgary - Custom Bathroom Design",
    desc: "Elegant bathroom design featuring luxurious custom bathroom cabinets, designed to enhance your bathroom renovation in Calgary.",
  },
  {
    src: IMAGES.g3,
    title: "Minimalist Bathroom Cabinets - Custom Storage Solutions Calgary",
    desc: "A clean and minimalist white-themed bathroom featuring custom bathroom cabinets that maximize space and functionality.",
  },
  {
    src: IMAGES.g4,
    title: "Vintage Bathroom Cabinets Calgary - Classic Custom Cabinetry",
    desc: "A classic vintage-style bathroom design featuring timeless custom bathroom cabinets made for luxury home renovations in Calgary.",
  },
  {
    src: IMAGES.g5,
    title: "Modern Bathtub with Luxe Cabinets - Custom Bathroom Solutions",
    desc: "A spacious bathtub design illuminated by the beauty of custom cabinetry, perfect for your luxury bathroom renovation in Calgary.",
  },
  {
    src: IMAGES.g6,
    title: "Wooden Cabinets Calgary - Custom Cabinets for Storage",
    desc: "Custom-made wooden cabinets designed to optimize storage space in your home, perfect for a kitchen or bathroom renovation in Calgary.",
  },
  {
    src: IMAGES.g7,
    title: "Home Organization with Custom Closets Calgary",
    desc: "Efficient and stylish home organization solutions featuring custom closets, perfect for creating an organized home in Calgary.",
  },
  {
    src: IMAGES.g8,
    title: "Walk-In Closet Design Calgary - Luxe Custom Closets",
    desc: "A stylish walk-in closet designed with custom storage solutions, offering the perfect luxury closet experience in Calgary.",
  },
  {
    src: IMAGES.g9,
    title: "Modular Kitchen Cabinets Calgary - Custom Kitchen Solutions",
    desc: "A smart and efficient modular kitchen setup designed with custom kitchen cabinets to optimize your Calgary kitchen renovation.",
  },
  {
    src: IMAGES.g10,
    title: "Open Wardrobe Design Calgary - Custom Closet Storage",
    desc: "Open wardrobe design offering easy access to your belongings, crafted with custom closet solutions for Calgary homes.",
  },
  {
    src: IMAGES.g11,
    title: "Luxury Walk-In Closet Calgary - Luxe Custom Closets",
    desc: "A spacious luxury walk-in closet designed with custom storage solutions to elevate your home in Calgary.",
  },
  {
    src: IMAGES.g12,
    title: "Luxury Walk-In Closet Design Calgary - Custom Luxury Closets",
    desc: "This luxury walk-in closet is crafted with high-end materials and custom closet solutions for a beautiful home renovation in Calgary.",
  },
  {
    src: IMAGES.g13,
    title: "High-End Walk-In Closet Calgary - Luxe Custom Closets",
    desc: "A high-end luxury walk-in closet with custom cabinets and beautiful wooden panels, perfect for your home renovation in Calgary.",
  },
  {
    src: IMAGES.g14,
    title: "Custom Walk-In Closet Calgary - Luxe Kitchen Cabinets",
    desc: "A spacious and luxurious walk-in closet, featuring custom storage solutions and cabinetry, designed for homes in Calgary.",
  },
  {
    src: IMAGES.g15,
    title: "Modern Walk-In Closet Design Calgary - Luxe Closets",
    desc: "A modern walk-in closet with luxurious custom cabinetry and thoughtful design, ideal for your Calgary home renovation.",
  },
  {
    src: IMAGES.g16,
    title: "Luxury Walk-In Closet Calgary - Custom Storage Solutions",
    desc: "Transform your home with a luxury walk-in closet designed with custom storage solutions to meet your specific needs in Calgary.",
  },
  {
    src: IMAGES.g17,
    title: "Custom Walk-In Closet Calgary - Luxe Cabinetry Solutions",
    desc: "A custom-designed walk-in closet made with high-quality cabinetry for a sophisticated and organized space in your Calgary home.",
  },
  {
    src: IMAGES.g18,
    title: "Luxury Walk-In Closet Design Calgary - Custom Storage Cabinets",
    desc: "Spacious luxury walk-in closet featuring premium cabinetry, perfect for your home renovation project in Calgary.",
  },
  {
    src: IMAGES.g19,
    title: "Elegant Walk-In Closet Calgary - Custom Luxe Closets",
    desc: "An elegant walk-in closet with custom cabinetry solutions, designed to add style and organization to your Calgary home.",
  },
  {
    src: IMAGES.g20,
    title: "High Gloss Walk-In Closet Calgary - Custom Luxury Cabinets",
    desc: "A luxurious high-gloss walk-in closet with custom cabinets designed to enhance the aesthetic and functionality of your home in Calgary.",
  },
  {
    src: IMAGES.g21,
    title: "Custom Walk-In Closet Alberta - Luxe Storage Solutions",
    desc: "Spacious custom walk-in closet made with luxe cabinets and storage solutions for homes across Alberta.",
  },
  {
    src: IMAGES.g22,
    title: "Luxury Custom Walk-In Closet Alberta - Storage Optimization",
    desc: "This luxurious walk-in closet, designed with custom storage solutions, offers maximum organization for Alberta homes.",
  },
  {
    src: IMAGES.g23,
    title: "Bespoke Walk-In Closet Alberta - Luxe Custom Closets",
    desc: "A bespoke walk-in closet offering luxurious and organized storage, made with custom cabinetry for homes in Alberta.",
  },
  {
    src: IMAGES.g24,
    title: "Luxe Walk-In Closet Alberta - Custom Luxury Cabinets",
    desc: "Luxe custom cabinetry transforms your space into a sophisticated walk-in closet, designed to perfection for homes in Alberta.",
  },
];

export const SERVICESCARDSECTION: cardSection[] = [
  {
    heading: "Custom Kitchen Designs",
    titles: ["Tailored Solutions", "Functional Spaces", "Elegant Aesthetics"],
    descriptions: [
      "Our custom kitchen designs in Calgary are crafted to suit your unique lifestyle and preferences. From modern minimalism to classic elegance, we bring your dream kitchen to life with custom kitchen cabinets, luxury kitchen renovations, and modern kitchen designs. Every project begins with a detailed consultation to understand your needs, ensuring the final design fits perfectly into your space. Whether it's maximizing storage or incorporating the latest trends, we create solutions that are both practical and aesthetically pleasing.",
      "We optimize every inch of your space, ensuring seamless functionality while maintaining a sophisticated look. Our custom kitchen solutions focus on making your kitchen work effortlessly for your daily activities, with smart storage solutions, hidden compartments, and easy access to everything you need. We specialize in custom storage solutions and sleek designs to ensure that your kitchen is both beautiful and functional.",
      "Every design is a blend of creativity and precision, resulting in kitchens that are both beautiful and practical. Our team meticulously selects materials and finishes that complement your vision, ensuring a timeless aesthetic that enhances the overall ambiance. From luxury home cabinets to shaker style kitchen cabinets, we create kitchens that inspire, offering a balance of elegance and durability for years to come.",
    ],
    imageUrl: IMAGES.servicesImg1,
  },
  {
    heading: "Smart Storage Solutions",
    titles: ["Innovative Designs", "Space Optimization", "Clutter-Free Living"],
    descriptions: [
      "Say goodbye to clutter with our smart storage solutions in Calgary, designed to maximize every corner of your home or office. We combine innovation and style to create designs that make the most of available space while adding a touch of elegance. Whether it's custom closets, kitchen cabinetry, or home organization systems, our designs turn every inch into a functional and aesthetically pleasing part of your space.",
      "From custom cabinets to hidden compartments, our storage solutions ensure a perfect balance between design and utility. We understand that every space is unique, which is why we craft solutions that cater to your specific needs. Our designs aim to make your space feel larger, more organized, and visually appealing, with a focus on maximizing storage and functionality.",
      "Our storage systems are crafted to provide long-lasting functionality without compromising on style. We focus on creating systems that simplify your life by keeping your belongings neatly organized and easily accessible. From luxury kitchen cabinets to custom closets, we ensure your home or office remains clutter-free while looking sophisticated and welcoming.",
    ],
    imageUrl: IMAGES.servicesImg2,
  },
  {
    heading: "Bathroom Cabinetry",
    titles: ["Stylish Designs", "Durable Materials", "Efficient Use of Space"],
    descriptions: [
      "Upgrade your bathroom with our elegant and durable cabinetry solutions in Calgary tailored to fit your space. Our designs offer a perfect blend of style and functionality, enhancing the overall aesthetic of your bathroom. Whether you're looking for sleek modern bathroom cabinets or timeless classic vanities, we ensure your bathroom remains both luxurious and practical for years to come.",
      "We use premium materials designed to withstand moisture and daily wear while adding aesthetic appeal. Each piece is crafted with durability in mind, ensuring that your cabinetry maintains its beauty and function even in the most demanding environments. From high-quality wood finishes to water-resistant coatings, our materials are chosen to stand the test of time.",
      "Our designs focus on efficiency, ensuring every cabinet serves a purpose. We maximize storage while maintaining an uncluttered, polished look that complements your space. Whether it's hidden storage or cleverly designed shelving, we ensure your bathroom feels open and organized, with everything you need within reach.",
    ],
    imageUrl: IMAGES.servicesImg3,
  },
  {
    heading: "Commercial Spaces",
    titles: ["Office Cabinets", "Retail Displays", "Custom Workspaces"],
    descriptions: [
      "Enhance your commercial space with custom cabinetry and storage solutions designed for efficiency and style. Our office cabinets in Calgary are crafted to meet the demands of a professional environment while maintaining a sleek and modern design. Whether for storage, organization, or display, we ensure that your office is both productive and visually appealing.",
      "From office workstations to retail shelving, we deliver functional and visually appealing solutions. Our custom displays are designed to enhance the shopping experience, offering a balance of style and practicality. We focus on creating displays that not only showcase your products but also optimize the space and flow of your store.",
      "We understand the unique requirements of commercial spaces and design accordingly. Whether you're looking to create an efficient workstation, a collaborative area, or a functional retail setup, we offer customized solutions that cater to your business needs. Our designs prioritize organization, accessibility, and aesthetic appeal, ensuring your workspace is both efficient and inspiring.",
    ],
    imageUrl: IMAGES.servicesImg5,
  },
  {
    heading: "Closet Organizers",
    titles: ["Custom Closets", "Maximized Storage", "Personalized Design"],
    descriptions: [
      "Transform your closet into an organized haven with our custom closet solutions in Calgary. Our designs are built around your lifestyle and storage needs, ensuring a perfect fit for your space and belongings. We offer a range of layouts and features, including custom storage solutions, to suit every style, from walk-in closets to compact spaces, creating a functional and aesthetically pleasing storage solution.",
      "We design layouts that maximize storage space and keep your belongings easily accessible. By incorporating adjustable shelves, hanging systems, and hidden compartments, we create closets that are as functional as they are beautiful. Our goal is to make the most out of every inch, providing efficient storage while maintaining an organized, clean look.",
      "Every closet is tailored to your personal style and storage requirements. We collaborate with you to ensure that your closet is not only a practical solution but also a reflection of your taste and preferences. From the choice of materials to custom features, we create closets that perfectly match your vision and needs.",
    ],
    imageUrl: IMAGES.servicesImg4,
  },
];

export const KITCHENCARDSECTION: cardSection[] = [
  {
    heading: "Modern Kitchens",
    titles: ["Sleek Designs", "Smart Technology", "Premium Finishes"],
    descriptions: [
      "Experience the perfect blend of style and functionality with our modern kitchen designs in Calgary. Every detail is carefully crafted to create a contemporary and efficient space, ensuring your kitchen becomes the heart of your home.",
      "We integrate smart technology, including intelligent storage solutions and automated appliances, for a seamless cooking experience. Our modern kitchens are designed to evolve with your needs, incorporating the latest advancements for convenience and ease.",
      "Our kitchens feature premium finishes and durable materials, ensuring both aesthetic appeal and long-lasting quality. Each element is selected with care to guarantee both beauty and functionality for years to come.",
    ],
    imageUrl: IMAGES.kitchenImg1,
  },
  {
    heading: "Classic Kitchens",
    titles: ["Timeless Designs", "Rich Details", "Elegant Craftsmanship"],
    descriptions: [
      "Bring timeless elegance to your home with our classic kitchen designs in Calgary that never go out of style. With a focus on tradition and enduring appeal, we create kitchens that will always feel current and inviting.",
      "We focus on intricate details, rich textures, and warm finishes that create an inviting atmosphere. Every corner is thoughtfully designed to provide a luxurious yet comfortable space for cooking and entertaining.",
      "Each design reflects traditional craftsmanship blended with modern functionality. We emphasize quality construction and a commitment to detail, creating kitchens that are both beautiful and practical.",
    ],
    imageUrl: IMAGES.kitchenImg2,
  },
  {
    heading: "Open Concept Kitchens",
    titles: ["Spacious Layouts", "Seamless Flow", "Integrated Living"],
    descriptions: [
      "Our open-concept kitchens in Calgary are designed to create a sense of spaciousness and seamless connection with the rest of your home. The layout encourages interaction, ensuring that the kitchen becomes a central part of your living space.",
      "We prioritize layouts that enhance movement, accessibility, and interaction among family and guests. The kitchen becomes a fluid extension of your home, making meal prep and socializing effortless.",
      "These designs combine style and practicality for a dynamic living space. Our kitchens don't just serve as places to cook—they're designed to integrate into your home's lifestyle, enhancing how you live.",
    ],
    imageUrl: IMAGES.kitchenImg3,
  },
  {
    heading: "Luxury Kitchens",
    titles: [
      "High-End Finishes",
      "State-of-the-Art Appliances",
      "Exclusive Designs",
    ],
    descriptions: [
      "Indulge in sophistication with our luxury kitchen designs in Calgary, featuring high-end finishes and state-of-the-art appliances. We carefully select the best materials and finishes to create a space that's as luxurious as it is practical.",
      "Each luxury kitchen is crafted with precision and attention to detail, ensuring an exclusive and elegant aesthetic. We integrate the latest appliances to provide convenience and ensure your kitchen is equipped for the future.",
      "We create spaces that redefine comfort, style, and opulence. Our exclusive designs elevate the heart of your home, bringing unparalleled elegance and functionality into one beautiful package.",
    ],
    imageUrl: IMAGES.kitchenImg5,
  },
  {
    heading: "Custom Cabinetry",
    titles: ["Tailored Storage", "Unique Designs", "Maximum Efficiency"],
    descriptions: [
      "Maximize your kitchen's potential with our custom cabinetry solutions in Calgary, tailored to your unique storage needs. Every cabinet and shelf is meticulously designed to organize and optimize your space.",
      "We design cabinets that blend functionality with aesthetics, ensuring every inch of space is utilized efficiently. With attention to detail and unique customizations, we create kitchens that reflect your style and needs.",
      "Our team works closely with you to create personalized designs that reflect your style and preferences. Every design decision is made with the goal of creating a functional, efficient, and organized kitchen that fits your lifestyle.",
    ],
    imageUrl: IMAGES.kitchenImg4,
  },
];

export const BATHROOMCARDSECTION: cardSection[] = [
  {
    heading: "Modern Bathrooms",
    titles: ["Sleek Designs", "Innovative Fixtures", "Smart Technology"],
    descriptions: [
      "Transform your bathroom into a modern oasis with sleek designs and clean lines that offer both style and functionality. Our designs focus on simplicity and elegance, turning your bathroom into a space of relaxation and rejuvenation.",
      "Our innovative fixtures, including smart faucets and automated lighting, enhance convenience and efficiency. These features bring modern technology into your daily routine, making your bathroom more intuitive and user-friendly.",
      "We use premium materials and finishes to create a contemporary look that stands the test of time. Each element is carefully chosen to provide both style and durability, ensuring your bathroom remains timeless.",
    ],
    imageUrl: IMAGES.bathroomImg1,
  },
  {
    heading: "Luxury Bathrooms",
    titles: ["Premium Finishes", "Spa-Like Experience", "Exclusive Designs"],
    descriptions: [
      "Indulge in the comfort of a spa-like bathroom designed with luxury and relaxation in mind. Our premium finishes add a touch of opulence, transforming your bathroom into a sanctuary for rest and renewal.",
      "Our high-end materials, elegant fixtures, and attention to detail ensure an unmatched level of sophistication. From custom vanities to intricate tile work, every design element is crafted to create a peaceful retreat.",
      "From freestanding bathtubs to designer vanities, every element is crafted to perfection. We offer unique designs that elevate your bathroom's appeal, creating a space that is as functional as it is luxurious.",
    ],
    imageUrl: IMAGES.bathroomImg2,
  },
  {
    heading: "Custom Vanities",
    titles: ["Tailored Designs", "Optimal Storage", "Elegant Aesthetics"],
    descriptions: [
      "Upgrade your bathroom with custom vanities designed to meet your style and storage needs. Our bespoke vanities are built with both aesthetics and functionality in mind, creating the perfect balance between form and function.",
      "We create vanities that are not only functional but also serve as a statement piece in your bathroom. With clever storage solutions, we ensure your space remains tidy while maintaining a visually striking design.",
      "Our designs focus on maximizing space while maintaining a clean and elegant appearance. Every detail is meticulously planned to ensure your bathroom feels spacious, inviting, and visually stunning.",
    ],
    imageUrl: IMAGES.bathroomImg3,
  },
  {
    heading: "Small Space Solutions",
    titles: ["Space Optimization", "Functional Designs", "Stylish Solutions"],
    descriptions: [
      "Make the most of compact spaces with our innovative small bathroom designs. We specialize in transforming smaller bathrooms into efficient and stylish spaces that meet all your needs without sacrificing aesthetics.",
      "We optimize every inch of space with clever storage solutions and efficient layouts. Our designs are not only beautiful but highly functional, ensuring your bathroom is both practical and visually appealing.",
      "Stylish fixtures and thoughtful designs ensure a seamless blend of practicality and aesthetics. We aim to make every bathroom a space where form and function coexist harmoniously.",
    ],
    imageUrl: IMAGES.bathroomImg4,
  },
];

export const BUILTINCARDSECTION: cardSection[] = [
  {
    heading: "Custom Built-In Cabinets",
    titles: ["Tailored Fit", "Maximized Space", "Seamless Integration"],
    descriptions: [
      "Our custom built-in cabinets are designed to seamlessly blend into your space, offering a tailored fit that enhances any room. We prioritize creating designs that match your specific needs, ensuring a personalized and functional solution.",
      "Maximize your storage potential with innovative designs that optimize every inch of available space. Whether you're working with a small area or a larger room, our custom solutions help you make the most of your space.",
      "Enjoy a cohesive and integrated look that enhances the overall aesthetic of your home. Our built-in designs ensure that your cabinetry blends harmoniously with your existing décor, adding elegance and functionality.",
    ],
    imageUrl: IMAGES.builtImg1,
  },
  {
    heading: "Entertainment Units",
    titles: ["Stylish Displays", "Functional Storage", "Modern Designs"],
    descriptions: [
      "Create the perfect entertainment space with custom-built units designed for your TV, speakers, and media accessories. Our stylish designs ensure your entertainment setup becomes a focal point in your living room while providing practical storage solutions.",
      "Our designs combine style and functionality to provide optimal storage and a clean, organized look. From sleek shelving to hidden compartments, every detail is designed to maintain a clutter-free environment.",
      "Modern aesthetics ensure your entertainment unit becomes a centerpiece in your living room. With sleek lines and contemporary materials, our designs exude sophistication and style.",
    ],
    imageUrl: IMAGES.builtImg2,
  },
  {
    heading: "Home Office Solutions",
    titles: ["Ergonomic Designs", "Smart Storage", "Productive Spaces"],
    descriptions: [
      "Enhance your home office with built-in solutions that promote productivity and organization. We focus on creating layouts that maximize comfort and efficiency, making your workspace an inspiring place to work.",
      "Custom shelving and smart storage solutions keep your workspace tidy and functional. Our designs ensure everything has its place, helping you stay organized and focused throughout your day.",
      "Ergonomic designs ensure comfort and efficiency, even during long hours of work. Our home office solutions are tailored to provide you with a functional space that boosts productivity.",
    ],
    imageUrl: IMAGES.builtImg3,
  },
  {
    heading: "Bedroom Wardrobes",
    titles: ["Space Optimization", "Custom Compartments", "Elegant Style"],
    descriptions: [
      "Our built-in bedroom wardrobes offer maximum space utilization and custom compartments for your belongings. We design wardrobes that help you keep your clothing and accessories organized and easily accessible.",
      "Keep your clothes, shoes, and accessories organized with a layout tailored to your lifestyle. Whether you need more hanging space, shelves, or drawers, our wardrobes are designed to suit your specific needs.",
      "Elegant finishes and premium craftsmanship add sophistication to your bedroom space. We combine functionality with style, creating wardrobes that elevate the overall look of your room.",
    ],
    imageUrl: IMAGES.builtImg4,
  },
  {
    heading: "Library & Shelving Units",
    titles: ["Personal Libraries", "Creative Displays", "Organized Spaces"],
    descriptions: [
      "Design a personal library or shelving unit that perfectly complements your space. Our custom designs help you display your books, artwork, or decorative pieces with creativity and style. Each piece is crafted to maximize functionality while enhancing your room’s aesthetics. Let us bring your vision to life with bespoke shelving solutions tailored just for you.",
      "Showcase your book collection, décor, and keepsakes with creative built-in displays. We design units that add personality and charm to your living area while keeping everything organized.",
      "Our designs ensure a balance of style, functionality, and organization. Whether you're organizing a library, display area, or collection, our solutions help you maintain a tidy yet stylish space.",
    ],
    imageUrl: IMAGES.builtImg5,
  },
];

export const CABINETSCARDSECTION: cardSection[] = [
  {
    heading: "Kitchen Cabinets",
    titles: ["Modern Designs", "Custom Solutions", "Durable Materials"],
    descriptions: [
      "Our kitchen cabinets in Calgary combine modern aesthetics with functionality to create a space you'll love to cook in. Each design is carefully planned to blend seamlessly with contemporary interiors, offering a stylish yet practical solution. From sleek finishes to innovative layouts, every detail is crafted with your comfort and convenience in mind.",
      "Every cabinet is custom-designed to fit your kitchen layout and meet your storage needs. Our team works closely with you to understand your vision and deliver a design that maximizes space. Whether it's smart corner solutions or specialized compartments, your cabinets will be tailored to perfection.",
      "We use high-quality materials to ensure durability and longevity for years to come. From solid wood to premium hardware, every component is chosen to stand the test of time. Our cabinets are designed to endure daily wear and tear without compromising on style.",
    ],
    imageUrl: IMAGES.kitchenImg3,
  },
  {
    heading: "Bathroom Cabinets",
    titles: ["Space Optimization", "Elegant Finishes", "Moisture Resistant"],
    descriptions: [
      "Enhance your bathroom space with cabinets designed for optimal storage and style. Our bathroom cabinets in Calgary focus on utilizing every inch of space efficiently, offering clever storage options. Whether it's under-sink cabinets or vertical storage units, every design element serves a purpose.",
      "Choose from a variety of elegant finishes to match your bathroom décor. From matte textures to glossy surfaces, our finishes add a sophisticated touch. Each option is selected to complement the overall aesthetic of your bathroom.",
      "Our cabinets are built to withstand moisture and humidity, ensuring long-lasting performance. Special coatings and water-resistant materials prevent warping and damage. You can trust our designs to remain beautiful and functional even in the dampest conditions.",
    ],
    imageUrl: IMAGES.servicesImg3,
  },
  {
    heading: "Custom Cabinets",
    titles: ["Tailored Designs", "Premium Craftsmanship", "Unique Styles"],
    descriptions: [
      "Whether it's a home office, living room, or hallway, our custom cabinets in Calgary fit perfectly in any space. Every design is uniquely crafted to suit the dimensions and requirements of your room. From built-in shelves to multipurpose units, our cabinets adapt to your lifestyle.",
      "We ensure every cabinet is crafted with precision and attention to detail. Our skilled artisans combine traditional techniques with modern technology to achieve exceptional results. The final product is a testament to our dedication to quality and excellence.",
      "Add a unique touch to your home with custom styles and finishes. From minimalist designs to bold statement pieces, our range caters to diverse tastes. Your cabinets will not only be functional but also a reflection of your personal style.",
    ],
    imageUrl: IMAGES.cabinetsImg3,
  },
];

export const CLOSETSCARDSECTION: cardSection[] = [
  {
    heading: "Walk-In Closets",
    titles: ["Spacious Layouts", "Luxury Design", "Custom Shelving"],
    descriptions: [
      "Experience luxury with our walk-in closets in Calgary, offering ample space and organization. Designed to accommodate your wardrobe effortlessly, these closets provide designated areas for clothing, shoes, and accessories. Every detail is thoughtfully planned to deliver a clutter-free and visually stunning space.",
      "Our designs prioritize elegance and functionality to create your dream closet. From premium finishes to stylish fixtures, every element is chosen to enhance the overall appeal. Step into a space where luxury meets practicality, making your daily routine a pleasure.",
      "Custom shelving ensures every item has its place. Whether it's for shoes, handbags, or seasonal clothing, each shelf is designed to maximize efficiency. Our tailored approach guarantees an organized and accessible layout for your belongings.",
    ],
    imageUrl: IMAGES.servicesImg4,
  },
  {
    heading: "Reach-In Closets",
    titles: ["Space Efficient", "Organized Storage", "Modern Look"],
    descriptions: [
      "Our reach-in closets in Calgary are perfect for smaller spaces without compromising on style or organization. Thoughtfully designed compartments and hanging areas make the most of limited space. These closets prove that size doesn't limit style or functionality.",
      "Smart storage solutions make the most of every inch. From pull-out drawers to adjustable shelves, every feature is designed with convenience in mind. Say goodbye to clutter and hello to effortless organization.",
      "Modern designs add sophistication to your room. Sleek lines, contemporary finishes, and stylish hardware create a refined aesthetic. Our reach-in closets bring elegance and charm to any space they occupy.",
    ],
    imageUrl: IMAGES.closetsImg2,
  },
  {
    heading: "Wardrobe Closets",
    titles: ["Custom Compartments", "Elegant Finishes", "Functional Design"],
    descriptions: [
      "Maximize your storage with wardrobe closets tailored to your needs in Calgary. Designed to fit your unique lifestyle, each compartment is crafted for specific items. From hanging sections to hidden drawers, everything has a dedicated space.",
      "Custom compartments keep your clothing and accessories organized. With premium materials and refined details, every finish adds a touch of class. These thoughtful designs ensure a perfect balance between functionality and style.",
      "Elegant finishes ensure your closet is both stylish and functional. With a focus on usability and durability, our wardrobe closets are designed to enhance your daily routine. Every detail is fine-tuned to deliver a seamless experience.",
    ],
    imageUrl: IMAGES.closetsImg3,
  },
];

export const HOMEORGCARDSECTION: cardSection[] = [
  {
    heading: "Pantry Organization",
    titles: ["Efficient Storage", "Smart Solutions", "Custom Shelving"],
    descriptions: [
      "Keep your pantry tidy and accessible with smart storage solutions. Our designs maximize every inch of space, making it easy to find and reach your essentials. Enjoy a well-organized pantry that simplifies meal preparation and grocery storage.",
      "Custom shelving ensures every item has its designated space. From spices to bulk groceries, everything is arranged for easy access and visibility. Say goodbye to clutter and wasted space.",
      "Our designs make your pantry both functional and visually appealing. With adjustable shelves and clever compartments, your pantry becomes a perfect blend of style and practicality.",
    ],
    imageUrl: IMAGES.homeOrg1,
  },
  {
    heading: "Garage Storage",
    titles: ["Durable Cabinets", "Tool Organization", "Maximized Space"],
    descriptions: [
      "Transform your garage into an organized and efficient space. Our durable cabinets are built to withstand heavy-duty use while maintaining their appearance. Enjoy a clutter-free and functional workspace.",
      "Custom cabinets and tool organization systems keep clutter at bay. Every tool has its place, ensuring easy access and efficient workflows for your projects. Stay focused with a tidy workspace.",
      "Make the most of your garage with smart design solutions. Vertical storage, custom shelving, and multi-functional spaces ensure every corner serves a purpose. Experience unmatched efficiency and organization.",
    ],
    imageUrl: IMAGES.homeOrg2,
  },
  {
    heading: "Laundry Room Organization",
    titles: ["Functional Spaces", "Custom Storage", "Easy Access"],
    descriptions: [
      "Streamline your laundry routine with organized and accessible spaces. Our designs optimize every inch, ensuring that everything is within arm's reach for a hassle-free experience. Enjoy a space where efficiency meets style.",
      "Custom storage solutions keep detergents and supplies neatly arranged. Every item has its place, reducing mess and improving accessibility. Keep your laundry room clean and clutter-free.",
      "Functional designs ensure your laundry room is both efficient and stylish. Thoughtfully placed shelves, cabinets, and counters make every task seamless. Turn your laundry room into a space you'll love to use.",
    ],
    imageUrl: IMAGES.homeOrg3,
  },
];

export const WETBARSCARDSECTION: cardSection[] = [
  {
    heading: "Custom Wet Bars",
    titles: ["Stylish Designs", "Functional Spaces", "Premium Materials"],
    descriptions: [
      "Elevate your home entertainment experience with custom-designed wet bars. Our designs seamlessly blend elegance and practicality, creating a focal point in your home. Enjoy hosting with a setup tailored to your unique style.",
      "Our wet bar designs combine style and functionality, creating the perfect hosting space. From sleek counters to optimized storage, every element is thoughtfully designed for ease of use and sophistication.",
      "Crafted from premium materials, our wet bars are built to impress and last. Durable finishes and high-quality construction ensure your wet bar stands the test of time while maintaining its luxurious appeal.",
    ],
    imageUrl: IMAGES.g10,
  },
  {
    heading: "Compact Wet Bars",
    titles: ["Space-Saving", "Efficient Layout", "Modern Style"],
    descriptions: [
      "Perfect for smaller spaces, our compact wet bars offer functionality without compromise. Thoughtful layouts maximize space, ensuring every inch serves a purpose. Small space, big impact!",
      "Efficient layouts ensure you have everything you need in an organized space. From glass holders to bottle storage, every detail enhances usability and convenience. Stay organized, even in compact settings.",
      "Modern designs blend seamlessly with your home décor. Whether minimalist or bold, our wet bars integrate effortlessly into your living space, enhancing both style and functionality.",
    ],
    imageUrl: IMAGES.wet2,
  },
  {
    heading: "Luxury Wet Bars",
    titles: ["High-End Finishes", "Custom Features", "Entertainment Ready"],
    descriptions: [
      "Add a touch of luxury to your home with a fully customized wet bar. Elegant finishes, premium materials, and refined craftsmanship come together to create a show-stopping centerpiece.",
      "High-end finishes and tailored features make every detail exceptional. From built-in lighting to custom shelving, every feature enhances both style and practicality.",
      "Designed for entertainment, your guests will love the experience. A well-planned wet bar ensures everything you need is within reach, making hosting seamless and enjoyable. Cheers to unforgettable moments!",
    ],
    imageUrl: IMAGES.wet3,
  },
];

export const LAUNDRYCARDSECTION: cardSection[] = [
  {
    heading: "Laundry Room Cabinets",
    titles: ["Organized Spaces", "Custom Shelving", "Durable Materials"],
    descriptions: [
      "Transform your laundry room into an efficient and organized space. With thoughtfully designed layouts, every corner serves a purpose, eliminating clutter and enhancing productivity. Enjoy a space where everything is neatly arranged and easy to access.",
      "Custom shelving ensures easy access to all your laundry essentials. From detergents to baskets, each item has a dedicated spot for maximum convenience. Our shelving solutions are designed to keep your workspace tidy and functional.",
      "Built with durable materials, our cabinets withstand daily use. Resistant to wear and tear, they maintain their quality and finish even in high-traffic areas. Invest in solutions that are built to last.",
    ],
    imageUrl: IMAGES.laundryImg1,
  },
  {
    heading: "Functional Laundry Spaces",
    titles: ["Smart Design", "Maximized Storage", "Easy Maintenance"],
    descriptions: [
      "Our laundry room designs focus on functionality and efficiency. Every detail, from shelf placement to cabinet size, is optimized for daily tasks. Experience a space where everything works seamlessly together.",
      "Maximized storage keeps detergents, baskets, and tools neatly arranged. Smart compartments and adjustable shelves ensure every item has its place. Say goodbye to clutter and hello to smooth organization.",
      "Easy-to-maintain finishes ensure long-lasting cleanliness and style. Resistant to stains and easy to wipe clean, our surfaces stay fresh and polished with minimal effort.",
    ],
    imageUrl: IMAGES.laundryImg3,
  },
  {
    heading: "Modern Laundry Rooms",
    titles: ["Contemporary Style", "Ergonomic Design", "Seamless Integration"],
    descriptions: [
      "Add a modern touch to your laundry room with stylish designs. Clean lines, sleek finishes, and modern hardware bring a sophisticated look to this often-overlooked space. Make your laundry room as stylish as the rest of your home.",
      "Ergonomic layouts make laundry tasks easier and more efficient. With strategically placed shelves, baskets, and counters, every movement feels natural and effortless. Experience comfort in every task.",
      "Seamlessly integrate style and practicality into your daily routine. Our laundry room solutions balance aesthetics and functionality, creating a space that works for you while looking stunning.",
    ],
    imageUrl: IMAGES.laundryImg2,
  },
];

export const BLOGSCARDSECTION: cardSection[] = [
  {
    heading: "How to Choose the Best Custom Closets for Your Home",
    mainDesc:
      "A well-designed custom closet can transform your home by providing optimal storage, improving organization, and enhancing aesthetics. Whether you need a walk-in closet, a reach-in wardrobe, or a luxurious dressing room, selecting the right custom closet involves several factors. Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets offers premium custom closet solutions tailored to your needs.",
    titles: [
      "Assess Your Storage Needs",
      "Choose the Right Style and Materials",
      "Optimize Space with Smart Features",
      "Incorporate Aesthetic Appeal",
      "Work with Professionals",
      "Final Thought",
    ],
    descriptions: [
      "Start by evaluating what you need to store—clothing, shoes, accessories, or household items. A clear understanding of your storage requirements will help determine the design and layout.",
      "Select materials that complement your home's décor. Popular options include high-gloss finishes, wood veneer, and laminated surfaces. Consider classic white shaker-style designs for a timeless look. Luxe Kitchen Cabinets specializes in crafting high-quality custom closets that fit your style and preferences.",
      "Enhance functionality with features like adjustable shelves, pull-out drawers, hidden compartments, and LED lighting. Custom solutions can maximize space efficiency, even in small areas.",
      "A well-designed custom closet should not only be functional but also stylish. Glass doors, mirrored panels, and elegant handles can add sophistication to your closet. Luxe Kitchen Cabinets provides expert craftsmanship to elevate your home's interior.",
      "Consulting a professional closet designer ensures precision, durability, and a tailored approach to your storage solutions. Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets guarantees expertly designed closets that meet your expectations.",
      "Investing in a custom closet enhances your home's value while offering a clutter-free, organized space. Luxe Kitchen Cabinets is your go-to source for high-end, personalized storage solutions.",
    ],
    imageUrl: IMAGES.blogImg1,
  },
  {
    heading: "Vanity vs. Vanities: Which One Suits Your Bathroom?",
    mainDesc:
      "When renovating a bathroom, choosing between a single vanity and multiple vanities is crucial. Your decision will depend on space, functionality, and style preferences. Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets provides expertly crafted vanities to enhance your bathroom.",
    titles: [
      "What is a Vanity?",
      "What Are Vanities?",
      "Space Availability",
      "Functionality",
      "Aesthetic Appeal",
      "Final Thought",
    ],
    descriptions: [
      "A vanity typically refers to a single bathroom unit with a sink, countertop, and storage space underneath. Ideal for small bathrooms, a single vanity saves space while providing essential storage.",
      "Vanities, the plural form, often refer to double-sink bathroom units or multiple vanity stations in a shared space. They are perfect for master bathrooms or homes with multiple users.",
      "Single vanities work well in compact bathrooms, while double vanities require a larger area.",
      "If multiple users need simultaneous access, double vanities are more convenient.",
      "Modern high-gloss cabinets or painted kitchen cabinets used in vanity designs can enhance bathroom elegance. Luxe Kitchen Cabinets offers a range of styles to match your vision.",
      "Whether you choose a single vanity or double vanities, ensure it aligns with your bathroom's layout and your lifestyle needs. Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets ensures your bathroom is both stylish and functional.",
    ],
    imageUrl: IMAGES.blogImg2,
  },
  {
    heading: "Kitchen Renovation Tips with Pre-Finished Kitchen Cabinets",
    mainDesc:
      "Pre-finished kitchen cabinets offer a practical and stylish solution for homeowners looking to renovate their kitchens efficiently. They come pre-painted or laminated, reducing installation time and costs. Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets provides top-quality pre-finished kitchen cabinets for seamless renovations.",
    titles: [
      "Benefits of Pre-Finished Kitchen Cabinets",
      "Choose the Right Cabinet Style",
      "Optimize Kitchen Layout",
      "Complement Cabinets with Countertops & Backsplash",
      "Final Thought",
    ],
    descriptions: [
      "<b>Time-Saving:</b> No need for painting or finishing on-site.<br> <b>Durability:</b> Factory-applied finishes provide superior resistance to stains and moisture. <br> <b>Cost-Effective:</b> Often more affordable than custom-painted kitchen cabinets.",
      "<b>White Shaker Kitchen Cabinets:</b> Classic and timeless, perfect for modern and traditional homes. <br> <b>High-Gloss Cabinets:</b> Sleek and contemporary, ideal for a minimalist aesthetic. <br> <b>Custom Kitchen Cabinets:</b> If you need tailored storage solutions, custom pre-finished cabinets can be designed to fit your space. Luxe Kitchen Cabinets specializes in high-quality finishes and premium designs.",
      "Ensure an efficient workflow by placing cabinets strategically near work areas such as the sink, stove, and refrigerator. This enhances functionality and convenience.",
      "Pairing pre-finished cabinets with high-quality countertops and backsplashes can elevate the overall look of your kitchen. Consider quartz or granite countertops for a luxurious touch. Luxe Kitchen Cabinets provides expert recommendations for a cohesive kitchen design.",
      "Pre-finished kitchen cabinets simplify renovations, offering a balance of affordability, style, and durability. Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets ensures a flawless finish, making your dream kitchen a reality.",
    ],
    imageUrl: IMAGES.blogImg3,
  },
  {
    heading: "How to Design a Custom Closet for Maximum Space Optimization",
    titles: [
      "Why Custom Closets Matter",
      "Choosing the Best Layout for Your Space",
      "Must-Have Features in a Custom Closet",
      "Styling Your Closet for Elegance",
      "Why Luxe Kitchen Cabinets Is Your Trusted Closet Designer",
    ],
    descriptions: [
      "A well-designed custom closet enhances storage, keeps your home organized, and adds value to your property. Whether you need a walk-in closet, reach-in wardrobe, or built-in storage, the right design ensures maximum space utilization.",
      "When designing custom closets, consider:<br><b>Walk-In Closets:</b> Best for spacious bedrooms, allowing for premium storage systems like shelves, drawers, and a vanity.<br> <b>Reach-In Closets:</b> Ideal for smaller spaces, offering smart storage solutions like sliding doors and adjustable racks. <br> <b>Built-In Closets:</b> Integrated into walls for a seamless look, perfect for modern homes.",
      "High-gloss cabinets for a sleek, modern look.<br>Painted kitchen cabinets repurposed for stylish closet storage.<br>LED lighting to improve visibility and aesthetics.<br>Hidden compartments for storing valuables securely.<br>Adjustable shelving to accommodate seasonal wardrobe changes.",
      "The right materials and finishes transform a simple closet into a luxury storage solution. Opt for:<br>White shaker cabinets for a classic look.<br>Custom furniture with tailored storage solutions for personalized elegance.<br>Sustainable cabinets made from eco-friendly materials.",
      "At Luxe Kitchen Cabinets Calgary, Canada, we specialize in custom storage solutions tailored to your home's needs. Our closet designers create elegant closet designs that balance functionality and style, ensuring a clutter-free, organized space.",
    ],
    imageUrl: IMAGES.blogImg4,
  },
  {
    heading: "Why White Shaker Kitchen Cabinets Are a Timeless Choice",
    titles: [
      "The History of Shaker-Style Kitchen Cabinets",
      "Benefits of White Shaker Kitchens",
      "How to Style White Shaker Cabinets in Your Home",
      "Customizing White Shaker Cabinets with Luxe Kitchen Cabinets",
      "Final Thoughts: Why They're a Smart Investment",
    ],
    descriptions: [
      "Shaker-style kitchen cabinets date back to the 18th century and are known for their clean lines, durability, and timeless appeal. Today, they remain a favorite among homeowners seeking a blend of traditional and modern aesthetics.",
      "A white shaker kitchen offers:<br><b>Versatility:</b> Complements various design styles, from modern kitchen cabinets to custom kitchen cabinets.<br><b> Timeless Appeal:</b>Unlike trendy designs, shaker-style kitchen cabinets never go out of style.<br><b>Easy Maintenance:</b> Painted kitchen cabinets in white hide dust and smudges better than darker shades.<br><b>Bright and Airy Feel:</b> Enhances natural light, making small kitchens appear more spacious.",
      "Pair with High-Gloss Cabinets - Add a sleek contrast for a modern touch.<br>Use Luxe Kitchen Cabinets' Customization - Choose pre-finished kitchen cabinets for faster installation and durability.<br>Complement with Elegant Countertops - Quartz, granite, or marble elevate the luxurious feel.",
      "<b>Our Luxury Cabinet Makers in Calgary offer:</b><br>Bespoke cabinets tailored to your kitchen layout.<br>Cabinet installation for seamless fitting.<br>Smart storage solutions that optimize kitchen space.<br>Sustainable cabinets made from high-quality, eco-friendly materials.",
      "A white shaker kitchen adds timeless elegance, boosts home organization, and increases property value. Whether you’re undergoing a kitchen renovation or planning a home renovation, Luxe Kitchen Cabinets Calgary Canada provides the best kitchen storage solutions to transform your space.",
    ],
    imageUrl: IMAGES.blogImg5,
  },
];

export const CONTACTCARDSECTION: cardSection[] = [
  {
    heading: "Get in Touch",
    titles: [
      "Have Questions about Custom Cabinets Calgary?",
      "Need Assistance with Your Kitchen Renovation Calgary?",
      "Collaborate with Luxe Kitchen Cabinets Calgary",
    ],
    descriptions: [
      "Our team is ready to provide detailed answers and guidance regarding Custom Cabinets Calgary, Kitchen Cabinets Calgary, and Cabinet Installation Calgary. Don't hesitate to reach out, and we'll help clarify any doubts you may have.",
      "Whether you're working on a current Kitchen Remodeling Calgary project or need help refining your ideas, our dedicated support team is here to assist. We're committed to making your experience with Custom Storage Solutions Calgary smooth and successful every step of the way.",
      "We're always open to new opportunities and ideas! If you're interested in collaborating with Luxe Kitchen Cabinets Calgary or creating custom kitchen cabinets, let's connect and explore how we can design extraordinary solutions together.",
    ],
    imageUrl: IMAGES.g1,
  },
  {
    heading: "Visit Our Showroom",
    titles: [
      "Experience Our Custom Closets Calgary Designs",
      "Personal Consultation for Luxe Cabinets",
      "Explore Modern Kitchen Cabinets Calgary Options",
    ],
    descriptions: [
      "Visit us to see, touch, and experience our diverse collection of Kitchen Cabinets Calgary, Modern Kitchen Cabinets Calgary, and Bathroom Cabinets Calgary. Our showroom offers a hands-on opportunity to explore the quality and craftsmanship behind each of our creations.",
      "Schedule a one-on-one consultation with our design experts to discuss your Kitchen Renovation Alberta or Bathroom Cabinets Alberta project needs. We'll guide you through the process and present tailored solutions that align with your vision, whether it's Luxe Kitchen Cabinets or custom closets.",
      "Discover the endless possibilities available to you. Our showroom features a variety of finishes, including Shaker Style Kitchen Cabinets, High Gloss Cabinets, and Custom Kitchen Cabinets. Let us help you envision how our designs can transform your space.",
    ],
    imageUrl: IMAGES.g16,
  },
  {
    heading: "Connect With Us",
    titles: [
      "Follow Us Online",
      "Share Your Experience with Luxe Kitchen Cabinets",
      "Working Hours for Cabinet Installation Alberta",
    ],
    descriptions: [
      "<a target='_blank' rel='preload noopener noreferrer' href='https://www.facebook.com/share/HxGstcCJkD1h5TqB/?mibextid=wwXIfr'><b>Facebook</b></a>, <a target='_blank' rel='preload noopener noreferrer' href='https://www.instagram.com/bellacraftsofficial?igsh=ZDNoaW15ZmFjNXVy&utm_source=qr'><b>Instagram</b></a> & <a target='_blank' rel='preload noopener noreferrer' href='https://x.com/bellacrafts01?s=11'><b>X</b></a> to stay updated with our latest projects, Luxe Kitchen Cabinets, and custom storage solutions. Join our online community and be part of our design journey, getting inspired by behind-the-scenes content and success stories.",
      "We value your feedback! Share your experience with Luxe Kitchen Cabinets Calgary, and help us improve. Your reviews inspire us to continually raise our standards in Custom Cabinets Alberta and Cabinet Installation Alberta. Connect with us and let your voice shape our future projects.",
      "Mon - Fri: 9:00 AM - 6:00 PM <br> Sat: 10:00 AM - 4:00 PM <br> Sun: Closed.",
    ],
    imageUrl: IMAGES.g17,
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
    url: ROUTES.wetBars,
    icon: FaSink,
    label: "Wet Bars",
    imageUrl: IMAGES.g10,
  },
  {
    url: ROUTES.wetBars,
    icon: FaSink,
    label: "Wet Bars",
    imageUrl: IMAGES.g10,
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
  { name: "Gallery", route: ROUTES.gallery, icon: FaPhotoVideo },
  { name: "Blogs", route: ROUTES.blogs, icon: FaNewspaper },
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
