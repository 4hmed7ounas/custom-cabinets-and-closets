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
  gallerySection,
  cardSection,
  galleryItem,
} from "./types";

const contactEmail: string = "luxekitchencabinets@gmail.com";
const contactNo: string = "+1 403-870-7426";
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
  "/": "Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/contact-us":
    "Contact Us - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  // "/news": "News - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/blogs":
    "Blogs - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/our-team":
    "Our Team - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/gallery":
    "Gallery - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services":
    "Our Services - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/about-us":
    "About Us - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/kitchen":
    "Kitchen Cabinets - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/bathroom-storage":
    "Bathroom Storage - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/built-in":
    "Built-in Cabinets - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/cabinets":
    "Custom & Commercial Cabinets - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/closets":
    "Closets - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/home-organization":
    "Home Organization - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/laundry-storage":
    "Laundry Storage - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
  "/services/wet-bars":
    "Wet Bars - Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
};

export const MAINPOSTERCONTENT: mainPosterData = {
  "/": {
    title:
      "Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation",
    description:
      "Transform your home with Luxe Kitchen Cabinets - custom cabinetry in Calgary. We specialize in custom kitchen cabinets, bathroom storage, custom closets, built-in furniture, and commercial cabinets. Our expert team designs functional and stylish solutions tailored to your space, using premium materials and innovative features. Whether it's a wet bar, laundry storage, or custom cabinets, we ensure each project maximizes space and enhances your home's style.",
    imageUrl: IMAGES.landingImage,
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Have questions or need expert advice? Reach out to us for personalized assistance in creating your dream space with Luxe Kitchen Cabinets. Our team in Calgary is here to guide you through every step of your cabinetry journey, ensuring your satisfaction. Whether you're ready to start a project or need more information, we're always happy to help.",
    imageUrl: IMAGES.landingImage,
  },
  "/blogs": {
    title: "Blogs",
    description:
      "Stay inspired with our latest blogs on kitchen design, cabinetry trends, and expert tips. Explore creative ideas, practical advice, and industry insights to help you transform your space with Luxe Kitchen Cabinets. Whether you're looking for renovation inspiration or expert guidance, our blog has everything you need to bring your dream kitchen to life.",
    imageUrl: IMAGES.landingImage,
  },
  // "/news": {
  //   title: "News",
  //   description:
  //     "Stay updated with the latest trends, product launches, and design inspirations in custom cabinetry. Discover fresh ideas and learn how Luxe Kitchen Cabinets is shaping the future of home organization with innovation and style. Our blog keeps you informed about new trends and offers expert tips for home improvement in Calgary.",
  //   imageUrl: IMAGES.landingImage,
  // },
  "/gallery": {
    title: "Gallery",
    description:
      "Explore our gallery to see the exceptional craftsmanship and design excellence of Luxe Kitchen Cabinets. From kitchens to closets, our completed projects showcase the quality, functionality, and style that define our work. Get inspired for your next cabinetry project in Calgary.",
    imageUrl: IMAGES.landingImage,
  },
  "/our-team": {
    title: "Our Team",
    description:
      "Meet the skilled craftsmen and designers behind Luxe Kitchen Cabinets' solutions in Calgary. With years of experience and a dedication to excellence, our team ensures every project meets the highest standards of quality and precision. We pride ourselves on our attention to detail and our commitment to creating spaces that exceed client expectations.",
    imageUrl: IMAGES.landingImage,
  },
  "/services": {
    title: "Our Services",
    description:
      "From initial design to flawless installation, our services are tailored to create functional and stunning spaces. Whether it's a kitchen, closet, or home organization system, Luxe Kitchen Cabinets has got you covered every step of the way. We work closely with you to ensure that each solution fits perfectly with your lifestyle and aesthetic preferences.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/kitchen": {
    title: "Kitchen Design & Storage",
    description:
      "Reimagine your kitchen in Calgary with elegant and practical cabinetry solutions from Luxe Kitchen Cabinets. Our designs maximize storage, improve organization, and create a kitchen that complements your lifestyle and aesthetic preferences. From sleek modern designs to traditional warmth, we have the perfect solution for every home.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/bathroom-storage": {
    title: "Bathroom Storage Solutions",
    description:
      "Create a spa-like retreat with our innovative bathroom storage designs in Calgary. Maximize space, add a touch of luxury, and ensure your bathroom remains both organized and stylish with our custom solutions. We incorporate smart storage elements to ensure your bathroom is as functional as it is beautiful.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/built-in": {
    title: "Built-In Cabinetry",
    description:
      "Enhance your home in Calgary with built-in cabinetry solutions designed to seamlessly integrate with your space. From living rooms to offices, Luxe Kitchen Cabinets' bespoke designs combine style and functionality for a perfect fit. These built-ins provide both beauty and utility, making them the ideal addition to any home.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/cabinets": {
    title: "Custom & Commercial Cabinets",
    description:
      "Upgrade your home in Calgary with precision-crafted cabinets from Luxe Kitchen Cabinets. Our designs are stylish, highly functional, and tailored to fit any room, offering smart storage solutions that blend seamlessly with your décor. Whether it's a cozy living room or a professional commercial space, our custom cabinets provide the perfect blend of form and function.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/closets": {
    title: "Closets",
    description:
      "Transform your closet into a beautifully organized space with Luxe Kitchen Cabinets' custom solutions in Calgary. Our closet designs maximize storage, reduce clutter, and ensure every inch is utilized efficiently, all while looking stylish. From walk-in closets to compact spaces, we create functional yet beautiful designs that suit your personal needs and style.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/home-organization": {
    title: "Home Organization",
    description:
      "Discover the joy of a well-organized home with Luxe Kitchen Cabinets' custom storage solutions in Calgary. From shelves to storage units, our designs help declutter spaces while enhancing functionality and visual appeal. We aim to create solutions that maximize every inch of your home while maintaining a stylish and cohesive look.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/wet-bars": {
    title: "Wet Bars",
    description:
      "Enhance your home entertainment in Calgary with custom-designed wet bars from Luxe Kitchen Cabinets. Featuring premium materials, sleek finishes, and ample storage, our wet bars are perfect for hosting guests or enjoying quiet evenings. Whether you need a compact design or a larger setup, our wet bars bring sophistication to your entertainment space.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/laundry-storage": {
    title: "Laundry Storage Solutions",
    description:
      "Simplify your laundry routine with smart storage solutions from Luxe Kitchen Cabinets in Calgary. Our custom designs maximize space, improve efficiency, and add a touch of style, making your laundry room both functional and organized. Say goodbye to cluttered countertops and hello to a sleek, organized space.",
    imageUrl: IMAGES.serviceImage,
  },
  "/about-us": {
    title: "About Us",
    description:
      "At the core of Luxe Kitchen Cabinets lies a passion for craftsmanship and customer satisfaction. We're dedicated to delivering top-notch cabinetry solutions that enhance your home's beauty, organization, and functionality. Our experienced team in Calgary works closely with clients to bring their vision to life, ensuring every detail reflects their unique needs.",
    imageUrl: IMAGES.aboutImage,
  },
};

export const HOMECARDSECTION: cardSection[] = [
  {
    heading:
      "Who is Luxe Kitchen Cabinets - Custom Cabinetry Experts in Calgary",
    titles: ["Who Are We?", "What We Do?", "Our Core Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate cabinet makers in Calgary, Alberta, specializing in designing and building custom kitchen cabinets, bathroom cabinets, and office cabinets. For over 13 years, we've transformed homes and offices with high-quality, custom cabinetry solutions tailored to your style and needs.",
      "Our expertise covers everything from consultation to installation, ensuring every detail is crafted to your specifications. Whether you're searching for kitchen cabinets in Calgary, Alberta, or custom cabinets for any other space, our innovative designs maximize functionality and enhance aesthetics.",
      "Integrity, precision, and trust are at the heart of Luxe Kitchen Cabinets. We collaborate closely with clients across Calgary and surrounding areas to deliver exceptional craftsmanship in all our cabinet-making projects, ensuring beauty and durability in every piece.",
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
      "Luxe Kitchen Cabinets has been crafting custom kitchen cabinets in Calgary, Alberta, for over 13 years. We are proud to be a trusted name in cabinet making and building in Calgary, offering bespoke solutions that reflect your unique taste and lifestyle. From luxurious bathroom cabinets in Calgary to functional office cabinets, our team combines advanced techniques with attention to detail to bring your vision to life. Our locally owned and operated shop provides personalized service, ensuring every cabinet meets your specific needs and enhances your space. Whether you're renovating your kitchen, organizing your closet, or upgrading your office, Luxe Kitchen Cabinets has you covered. With innovative designs and expert craftsmanship, we are the go-to choice for custom cabinets in Calgary and surrounding areas. <a href='/contact-us'><b>Contact us today</b></a> to start your transformation.",
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
      "At Luxe Kitchen Cabinets, we are proud to be leading cabinet makers in Calgary, Alberta, offering superior craftsmanship for over 13 years. Whether you're looking for custom kitchen cabinets, bathroom cabinets, or office cabinets in Calgary, we deliver beautiful, functional designs tailored to your needs.",
      "Our custom cabinetry solutions are designed to fit perfectly in your space, whether it's a modern kitchen, an organized closet, or a stylish office. As trusted cabinet builders in Calgary, we prioritize maximizing storage, enhancing aesthetics, and improving functionality.",
      "Customer satisfaction is at the heart of what we do. From initial consultation to final installation, we work closely with you every step of the way. Choose Luxe Kitchen Cabinets for expert cabinet painting in Calgary, precision craftsmanship, and lasting results that exceed expectations.",
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
      "When it comes to enhancing the style and functionality of your home, Luxe Kitchen Cabinets is Calgary's trusted name in custom cabinetry solutions. With over 13 years of experience, we specialize in creating custom kitchen cabinets for both new builds and renovations, tailored to suit your unique needs and preferences.",
  },
  {
    title: "Custom Kitchen Cabinets in Calgary",
    description:
      "Your kitchen is the heart of your home, and we believe it should be as functional as it is beautiful. At Luxe Kitchen Cabinets, our custom kitchen cabinets are designed to optimize space while complementing your home's style. Whether you prefer sleek modern designs or classic traditional aesthetics, we bring your dream kitchen to life.",
  },
  {
    title: "Personalized Closet Designs for Organized Living",
    description:
      "Say goodbye to clutter with our personalized closet designs. We create closets that maximize storage, improve organization, and reflect your personal style. Whether it's a walk-in wardrobe or a compact solution, we ensure every detail is tailored to your needs.",
  },
  {
    title: "Luxury Bathroom Vanities in Calgary",
    description:
      "Upgrade your bathroom with our luxury bathroom vanities, designed to add sophistication and practicality to your space. From contemporary floating designs to timeless double-sink setups, we deliver vanities that blend seamlessly with your décor.",
  },
  {
    title: "Tailored Cabinetry Solutions for Every Room",
    description:
      "Our expertise doesn't stop at kitchens. We offer tailored cabinetry solutions for bathrooms, bars, closets, and more. Each design is crafted with precision to enhance your space's functionality and elegance.",
  },
  {
    title: "Calgary Cabinetry for Renovation Projects",
    description:
      "If you're renovating your home, our Calgary cabinetry services are here to help. We collaborate closely with homeowners and contractors to deliver stunning results that align with your vision and timeline.",
  },
];

export const ABOUTCARDSECTION: cardSection[] = [
  {
    heading: "Our Story",
    titles: ["How It Began", "Our Growth", "Our Passion"],
    descriptions: [
      "At Luxe Kitchen Cabinets, our journey began with a simple yet powerful idea: to create spaces that are not just functional but also inspiring. From humble beginnings in Calgary, we have grown into a trusted name in custom cabinetry, built on passion, craftsmanship, and a commitment to excellence.",
      "Over the years, we've expanded from a small team of dedicated artisans to a full-scale operation, serving homes and offices in Calgary with innovative and personalized cabinetry solutions.",
      "Our passion lies in creating timeless designs that blend functionality with aesthetics, ensuring every project tells a unique story. From kitchen cabinets in Calgary to bathroom cabinets and office cabinets, we cater to diverse needs.",
    ],
    imageUrl: IMAGES.cardImg1,
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
      "Our kitchen solutions are designed to enhance your cooking experience with innovative storage ideas, modern aesthetics, and functional layouts that suit your lifestyle. Whether you need kitchen cabinets in Calgary or custom kitchen designs, we've got you covered.",
      "We design custom closets and cabinets that cater to your specific needs, whether it's maximizing storage or adding a touch of luxury to your space. Our expertise in creating bespoke cabinetry makes us a top choice for cabinet makers in Calgary.",
      "Our bathroom and laundry storage solutions provide a balance of style and function, keeping your spaces organized and efficient, even in smaller areas. We offer custom bathroom cabinets in Calgary that are both practical and stylish.",
      "From built-in furniture to wet bars, we craft unique, integrated pieces that complement your living spaces, offering both beauty and functionality. Our custom-built furniture ensures that every piece fits seamlessly into your home.",
      "Our home organization systems are designed to simplify your life. We create storage solutions that help you maintain a clutter-free and organized home, making it easier to manage everyday tasks. Explore our range of custom cabinets and home organization solutions in Calgary.",
    ],
    imageUrl: IMAGES.serviceImage,
  },
  {
    heading: "Why Choose Luxe Kitchen Cabinets",
    titles: ["Innovative Designs", "Premium Materials", "Customer Focus"],
    descriptions: [
      "Our team works closely with you to understand your vision and goals, ensuring every detail is meticulously crafted. With a focus on quality and functionality, we create solutions that not only meet but exceed expectations. From kitchen cabinets to custom closets, our designs are always on-trend and highly functional.",
      "We use only the finest materials, ensuring durability, longevity, and an elegant finish in every project we undertake. Our commitment to quality makes us a preferred choice for custom cabinets and cabinetry solutions in Calgary.",
      "Customer satisfaction is our top priority. From consultation to installation, we ensure every step is seamless and every expectation is exceeded. Our dedication to excellence has earned us a reputation as one of the best cabinet makers in Calgary.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Our Process",
    titles: ["Consultation", "Design", "Installation"],
    descriptions: [
      "From there, we craft personalized designs that reflect your style and needs, blending functionality with aesthetics. Our process ensures seamless execution, delivering a final result that enhances both the look and feel of your space.",
      "Our expert designers then create tailored designs that blend functionality, style, and your unique personality.",
      "With precision and care, our team executes the installation process, ensuring every detail aligns with the design plan.",
    ],
    imageUrl: IMAGES.cardImg1,
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
      "Each member brings a wealth of experience and expertise, driving the company towards excellence in design and customer satisfaction. Together, we foster a collaborative environment that encourages creativity, ensures quality, and achieves long-term success.",
      "Their commitment to innovation and quality ensures that Luxe Kitchen Cabinets remains at the forefront of design excellence. By fostering a culture of collaboration, they inspire the team to consistently deliver outstanding results tailored to our clients' needs.",
      "This dedication to quality and craftsmanship is reflected in our work, as we continuously strive to exceed client expectations. With a focus on innovation, we create solutions that enhance both functionality and beauty, making every project a true masterpiece.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Design Experts",
    titles: ["Creative Minds", "Tailored Designs", "Attention to Detail"],
    descriptions: [
      "With an eye for detail and a deep understanding of design principles, they seamlessly blend style and practicality. Each project is a unique reflection of your preferences, ensuring a perfect balance between form, function, and lasting appeal.",
      "By collaborating throughout the entire design process, they ensure that each decision aligns with your vision. Their expertise turns ideas into reality, crafting spaces that are both beautiful and purposeful, enhancing your everyday living experience.",
      "With a focus on craftsmanship, our experts ensure that each element is thoughtfully executed to perfection. This meticulous approach guarantees that every project not only meets but surpasses the highest standards of quality and design.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Skilled Craftsmen",
    titles: ["Master Artisans", "Quality Craftsmanship", "Reliable Execution"],
    descriptions: [
      "They use the finest materials and advanced techniques to ensure every piece is not only visually stunning but built to last. Their dedication to excellence ensures that each project is executed flawlessly, delivering lasting beauty and functionality.",
      "Their expertise in craftsmanship guarantees that each creation is both durable and aesthetically pleasing, blending timeless design with modern functionality. This commitment to quality ensures that every project remains as beautiful and practical for years to come.",
      "By carefully managing every stage of the process, they ensure that all aspects of the project are delivered on time and to the highest standards. Their attention to detail and focus on client satisfaction make for an exceptional experience and a flawless result.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Customer Success Team",
    titles: ["Dedicated Support", "Clear Communication", "Client Satisfaction"],
    descriptions: [
      "Our team is always available to assist you with any questions or concerns, providing personalized guidance tailored to your needs. We prioritize your experience, ensuring that every step of the process is seamless and stress-free.",
      "We ensure transparency and open dialogue throughout the project, so you're always on the same page. Our goal is to make the process as collaborative as possible, ensuring that your ideas are heard and incorporated.",
      "We go above and beyond to exceed your expectations, delivering results that reflect your vision and needs. Your satisfaction is our top priority, and we make sure every detail is perfect, from start to finish.",
    ],
    imageUrl: IMAGES.cardImg1,
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

export const GALLERYSECTION: gallerySection[] = [
  {
    imgURL: IMAGES.landingImage,
    title: "Image 1",
    description: "This is the first image.",
  },
  {
    imgURL: IMAGES.landingImage,
    title: "Image 2",
    description: "This is the second image.",
  },
  {
    imgURL: IMAGES.landingImage,
    title: "Image 3",
    description: "This is the third image.",
  },
  {
    imgURL: IMAGES.landingImage,
    title: "Image 4",
    description: "This is the fourth image.",
  },
  {
    imgURL: IMAGES.landingImage,
    title: "Image 5",
    description: "This is the fifth image.",
  },
  {
    imgURL: IMAGES.landingImage,
    title: "Image 6",
    description: "This is the sixth image.",
  },
  {
    imgURL: IMAGES.landingImage,
    title: "Image 7",
    description: "This is the seventh image.",
  },
];

export const GALLERYITEMS: galleryItem[] = [
  {
    src: IMAGES.aboutImage,
    title: "Modern Kitchen",
    desc: "A sleek and stylish modern kitchen setup.",
  },
  {
    src: IMAGES.bathroomImg1,
    title: "Luxury Bathroom",
    desc: "Elegant bathroom design with wooden accents.",
  },
  {
    src: IMAGES.bathroomImg2,
    title: "Minimalist Bathroom",
    desc: "A clean and minimalist white-themed bathroom.",
  },
  {
    src: IMAGES.bathroomImg3,
    title: "Vintage Bathroom",
    desc: "Classic vintage-style bathroom decor.",
  },
  {
    src: IMAGES.bathroomImg4,
    title: "Modern Bathtub",
    desc: "Spacious bathtub with warm lighting.",
  },
  {
    src: IMAGES.blogImg1,
    title: "Wooden Cabinets",
    desc: "Custom-made wooden cabinets for storage.",
  },
  {
    src: IMAGES.blogImg2,
    title: "Home Organization",
    desc: "Optimized space-saving home organization.",
  },
  {
    src: IMAGES.blogImg3,
    title: "Closet Design",
    desc: "Stylish walk-in closet with modern lighting.",
  },
  {
    src: IMAGES.cabinetsImg3,
    title: "Modular Kitchen",
    desc: "Smart modular kitchen setup for efficiency.",
  },
  {
    src: IMAGES.closetsImg2,
    title: "Open Wardrobe",
    desc: "Open wardrobe design for accessibility.",
  },
  {
    src: IMAGES.closetsImg3,
    title: "Luxury Walk-in Closet",
    desc: "Spacious luxury closet with wooden panels.",
  },
  {
    src: IMAGES.closetsImg3,
    title: "Luxury Walk-in Closet",
    desc: "Spacious luxury closet with wooden panels.",
  },
];

export const SERVICESCARDSECTION: cardSection[] = [
  {
    heading: "Custom Kitchen Designs",
    titles: ["Tailored Solutions", "Functional Spaces", "Elegant Aesthetics"],
    descriptions: [
      "Our custom kitchen designs in Calgary are crafted to suit your unique lifestyle and preferences. From modern minimalism to classic elegance, we bring your dream kitchen to life. Every project begins with a detailed consultation to understand your needs, ensuring the final design fits perfectly into your space. Whether it's maximizing storage or incorporating the latest trends, we create solutions that are both practical and aesthetically pleasing.",
      "We optimize every inch of your space, ensuring seamless functionality while maintaining a sophisticated look. Our designs are focused on making your kitchen work effortlessly for your daily activities, with smart storage solutions and easy access to everything you need. We understand that functionality is key, and our goal is to create spaces that are not only beautiful but also highly efficient and organized.",
      "Every design is a blend of creativity and precision, resulting in kitchens that are both beautiful and practical. Our team meticulously selects materials and finishes that complement your vision, ensuring a timeless aesthetic that enhances the overall ambiance. With a keen eye for detail and a passion for design, we create kitchens that inspire, offering a balance of elegance and durability for years to come.",
    ],
    imageUrl: IMAGES.servicesImg1,
  },
  {
    heading: "Smart Storage Solutions",
    titles: ["Innovative Designs", "Space Optimization", "Clutter-Free Living"],
    descriptions: [
      "Say goodbye to clutter with our smart storage solutions in Calgary, designed to maximize every corner of your home or office. We combine innovation and style to create designs that make the most of available space while adding a touch of elegance. Whether it's a small nook or an expansive area, our designs turn every inch into a functional and aesthetically pleasing part of your space.",
      "From custom cabinets to hidden compartments, our solutions ensure a perfect balance between design and utility. We understand that every space is unique, which is why we craft solutions that cater to your specific needs. Our designs aim to make your space feel larger, more organized, and visually appealing, with thoughtful attention to detail and efficient use of space.",
      "Our storage systems are crafted to provide long-lasting functionality without compromising on style. We focus on creating systems that simplify your life by keeping your belongings neatly organized and easily accessible. By blending practical design with elegance, we ensure that your home or office remains clutter-free while looking sophisticated and welcoming.",
    ],
    imageUrl: IMAGES.servicesImg2,
  },
  {
    heading: "Bathroom Cabinetry",
    titles: ["Stylish Designs", "Durable Materials", "Efficient Use of Space"],
    descriptions: [
      "Upgrade your bathroom with our elegant and durable cabinetry solutions in Calgary tailored to fit your space. Our designs offer a perfect blend of style and functionality, enhancing the overall aesthetic of your bathroom. Whether you're looking for sleek modern lines or timeless classic elements, our solutions ensure your bathroom remains both luxurious and practical for years to come.",
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
      "rom office workstations to retail shelving, we deliver functional and visually appealing solutions. Our custom displays are designed to enhance the shopping experience, offering a balance of style and practicality. We focus on creating displays that not only showcase your products but also optimize the space and flow of your store.",
      "We understand the unique requirements of commercial spaces and design accordingly. Whether you're looking to create an efficient workstation, a collaborative area, or a functional retail setup, we offer customized solutions that cater to your business needs. Our designs prioritize organization, accessibility, and aesthetic appeal, ensuring your workspace is both efficient and inspiring.",
    ],
    imageUrl: IMAGES.servicesImg5,
  },
  {
    heading: "Closet Organizers",
    titles: ["Custom Closets", "Maximized Storage", "Personalized Design"],
    descriptions: [
      "Transform your closet into an organized haven with our custom closet solutions in Calgary. Our designs are built around your lifestyle and storage needs, ensuring a perfect fit for your space and belongings. We offer a range of layouts and features to suit every style, from walk-in closets to compact spaces, creating a functional and aesthetically pleasing storage solution.",
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
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Entertainment Units",
    titles: ["Stylish Displays", "Functional Storage", "Modern Designs"],
    descriptions: [
      "Create the perfect entertainment space with custom-built units designed for your TV, speakers, and media accessories. Our stylish designs ensure your entertainment setup becomes a focal point in your living room while providing practical storage solutions.",
      "Our designs combine style and functionality to provide optimal storage and a clean, organized look. From sleek shelving to hidden compartments, every detail is designed to maintain a clutter-free environment.",
      "Modern aesthetics ensure your entertainment unit becomes a centerpiece in your living room. With sleek lines and contemporary materials, our designs exude sophistication and style.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Home Office Solutions",
    titles: ["Ergonomic Designs", "Smart Storage", "Productive Spaces"],
    descriptions: [
      "Enhance your home office with built-in solutions that promote productivity and organization. We focus on creating layouts that maximize comfort and efficiency, making your workspace an inspiring place to work.",
      "Custom shelving and smart storage solutions keep your workspace tidy and functional. Our designs ensure everything has its place, helping you stay organized and focused throughout your day.",
      "Ergonomic designs ensure comfort and efficiency, even during long hours of work. Our home office solutions are tailored to provide you with a functional space that boosts productivity.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Bedroom Wardrobes",
    titles: ["Space Optimization", "Custom Compartments", "Elegant Style"],
    descriptions: [
      "Our built-in bedroom wardrobes offer maximum space utilization and custom compartments for your belongings. We design wardrobes that help you keep your clothing and accessories organized and easily accessible.",
      "Keep your clothes, shoes, and accessories organized with a layout tailored to your lifestyle. Whether you need more hanging space, shelves, or drawers, our wardrobes are designed to suit your specific needs.",
      "Elegant finishes and premium craftsmanship add sophistication to your bedroom space. We combine functionality with style, creating wardrobes that elevate the overall look of your room.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Library & Shelving Units",
    titles: ["Personal Libraries", "Creative Displays", "Organized Spaces"],
    descriptions: [
      "Design a personal library or shelving unit that perfectly complements your space. Our custom designs help you display your books, artwork, or decorative pieces with creativity and style.",
      "Showcase your book collection, décor, and keepsakes with creative built-in displays. We design units that add personality and charm to your living area while keeping everything organized.",
      "Our designs ensure a balance of style, functionality, and organization. Whether you're organizing a library, display area, or collection, our solutions help you maintain a tidy yet stylish space.",
    ],
    imageUrl: IMAGES.cardImg1,
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
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Garage Storage",
    titles: ["Durable Cabinets", "Tool Organization", "Maximized Space"],
    descriptions: [
      "Transform your garage into an organized and efficient space. Our durable cabinets are built to withstand heavy-duty use while maintaining their appearance. Enjoy a clutter-free and functional workspace.",
      "Custom cabinets and tool organization systems keep clutter at bay. Every tool has its place, ensuring easy access and efficient workflows for your projects. Stay focused with a tidy workspace.",
      "Make the most of your garage with smart design solutions. Vertical storage, custom shelving, and multi-functional spaces ensure every corner serves a purpose. Experience unmatched efficiency and organization.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Laundry Room Organization",
    titles: ["Functional Spaces", "Custom Storage", "Easy Access"],
    descriptions: [
      "Streamline your laundry routine with organized and accessible spaces. Our designs optimize every inch, ensuring that everything is within arm's reach for a hassle-free experience. Enjoy a space where efficiency meets style.",
      "Custom storage solutions keep detergents and supplies neatly arranged. Every item has its place, reducing mess and improving accessibility. Keep your laundry room clean and clutter-free.",
      "Functional designs ensure your laundry room is both efficient and stylish. Thoughtfully placed shelves, cabinets, and counters make every task seamless. Turn your laundry room into a space you'll love to use.",
    ],
    imageUrl: IMAGES.cardImg1,
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
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Compact Wet Bars",
    titles: ["Space-Saving", "Efficient Layout", "Modern Style"],
    descriptions: [
      "Perfect for smaller spaces, our compact wet bars offer functionality without compromise. Thoughtful layouts maximize space, ensuring every inch serves a purpose. Small space, big impact!",
      "Efficient layouts ensure you have everything you need in an organized space. From glass holders to bottle storage, every detail enhances usability and convenience. Stay organized, even in compact settings.",
      "Modern designs blend seamlessly with your home décor. Whether minimalist or bold, our wet bars integrate effortlessly into your living space, enhancing both style and functionality.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Luxury Wet Bars",
    titles: ["High-End Finishes", "Custom Features", "Entertainment Ready"],
    descriptions: [
      "Add a touch of luxury to your home with a fully customized wet bar. Elegant finishes, premium materials, and refined craftsmanship come together to create a show-stopping centerpiece.",
      "High-end finishes and tailored features make every detail exceptional. From built-in lighting to custom shelving, every feature enhances both style and practicality.",
      "Designed for entertainment, your guests will love the experience. A well-planned wet bar ensures everything you need is within reach, making hosting seamless and enjoyable. Cheers to unforgettable moments!",
    ],
    imageUrl: IMAGES.cardImg1,
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
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Functional Laundry Spaces",
    titles: ["Smart Design", "Maximized Storage", "Easy Maintenance"],
    descriptions: [
      "Our laundry room designs focus on functionality and efficiency. Every detail, from shelf placement to cabinet size, is optimized for daily tasks. Experience a space where everything works seamlessly together.",
      "Maximized storage keeps detergents, baskets, and tools neatly arranged. Smart compartments and adjustable shelves ensure every item has its place. Say goodbye to clutter and hello to smooth organization.",
      "Easy-to-maintain finishes ensure long-lasting cleanliness and style. Resistant to stains and easy to wipe clean, our surfaces stay fresh and polished with minimal effort.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Modern Laundry Rooms",
    titles: ["Contemporary Style", "Ergonomic Design", "Seamless Integration"],
    descriptions: [
      "Add a modern touch to your laundry room with stylish designs. Clean lines, sleek finishes, and modern hardware bring a sophisticated look to this often-overlooked space. Make your laundry room as stylish as the rest of your home.",
      "Ergonomic layouts make laundry tasks easier and more efficient. With strategically placed shelves, baskets, and counters, every movement feels natural and effortless. Experience comfort in every task.",
      "Seamlessly integrate style and practicality into your daily routine. Our laundry room solutions balance aesthetics and functionality, creating a space that works for you while looking stunning.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

// export const NEWSCARDSECTION: cardSection[] = [
//   {
//     heading: "Latest Trends in Cabinetry",
//     titles: ["Modern Designs", "Innovative Solutions", "Sustainable Choices"],
//     descriptions: [
//       "Stay updated with the latest trends in cabinetry and interior design. Our designs combine style, functionality, and innovation to create timeless spaces. Experience the perfect blend of aesthetics and utility in every detail.",
//       "Explore innovative storage solutions and space-saving designs. Our team focuses on creating smart layouts that make the most of every inch, offering solutions tailored to your needs.",
//       "Learn about sustainable materials and eco-friendly practices in modern cabinetry. We prioritize environmentally friendly materials and processes to build spaces that are both beautiful and responsible.",
//     ],
//     imageUrl: IMAGES.cardImg1,
//   },
//   {
//     heading: "Company Announcements",
//     titles: ["Exciting Updates", "New Services", "Milestones Achieved"],
//     descriptions: [
//       "Get the latest updates and announcements from our team. From new designs to improved services, stay informed about how we're continuously evolving to better serve you.",
//       "Discover new services and product launches aimed at enhancing your space. Whether it's an innovative product or a custom service, we're always bringing something fresh to the table.",
//       "Celebrate milestones and achievements with us as we grow together. Every milestone reflects our commitment to quality, innovation, and customer satisfaction.",
//     ],
//     imageUrl: IMAGES.cardImg1,
//   },
//   {
//     heading: "Client Stories",
//     titles: ["Success Stories", "Customer Experiences", "Project Highlights"],
//     descriptions: [
//       "Read inspiring success stories from our satisfied clients. Discover how our designs have made a difference in creating functional and stylish living spaces. Each story showcases our dedication to delivering exceptional results and exceeding expectations.",
//       "Discover how our custom cabinetry transformed homes and offices. Real-life testimonials highlight the impact of thoughtful designs and quality craftsmanship. Our clients' experiences reflect the care and precision we put into every project.",
//       "Explore featured projects and the unique solutions we delivered. See how we've turned ideas into reality, showcasing creativity and precision in every project. Each highlight represents our commitment to excellence and innovation.",
//     ],
//     imageUrl: IMAGES.cardImg1,
//   },
// ];

export const BLOGSCARDSECTION: cardSection[] = [
  {
    heading: "How to Choose the Best Custom Closets for Your Home",
    mainDesc:
      "A well-designed custom closet can transform your home by providing optimal storage, improving organization, and enhancing aesthetics. Whether you need a walk-in closet, a reach-in wardrobe, or a luxurious dressing room, selecting the right custom closet involves several factors. Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation offers premium custom closet solutions tailored to your needs.",
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
      "Consulting a professional closet designer ensures precision, durability, and a tailored approach to your storage solutions. Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation guarantees expertly designed closets that meet your expectations.",
      "Investing in a custom closet enhances your home's value while offering a clutter-free, organized space. Luxe Kitchen Cabinets is your go-to source for high-end, personalized storage solutions.",
    ],
    imageUrl: IMAGES.blogImg1,
  },
  {
    heading: "Vanity vs. Vanities: Which One Suits Your Bathroom?",
    mainDesc:
      "When renovating a bathroom, choosing between a single vanity and multiple vanities is crucial. Your decision will depend on space, functionality, and style preferences. Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation provides expertly crafted vanities to enhance your bathroom.",
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
      "Whether you choose a single vanity or double vanities, ensure it aligns with your bathroom's layout and your lifestyle needs. Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation ensures your bathroom is both stylish and functional.",
    ],
    imageUrl: IMAGES.blogImg2,
  },
  {
    heading: "Kitchen Renovation Tips with Pre-Finished Kitchen Cabinets",
    mainDesc:
      "Pre-finished kitchen cabinets offer a practical and stylish solution for homeowners looking to renovate their kitchens efficiently. They come pre-painted or laminated, reducing installation time and costs. Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation provides top-quality pre-finished kitchen cabinets for seamless renovations.",
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
      "Pre-finished kitchen cabinets simplify renovations, offering a balance of affordability, style, and durability. Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation ensures a flawless finish, making your dream kitchen a reality.",
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
    titles: ["Have Questions?", "Need Assistance?", "Collaborate with Us"],
    descriptions: [
      "Our team is ready to provide detailed answers and guidance, ensuring you have all the information you need to make informed decisions. Don't hesitate to reach out, and we'll help clarify any doubts.",
      "Whether you're working on a current project or need help refining your ideas, our dedicated support team is here to assist. We're committed to making your experience smooth and successful every step of the way.",
      "We're always open to new opportunities and ideas! If you're interested in partnering with Luxe Kitchen Cabinets, let's connect and explore how we can create extraordinary solutions together.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Visit Our Showroom",
    titles: [
      "Experience Our Designs",
      "Personal Consultation",
      "Explore Options",
    ],
    descriptions: [
      "Visit us to see, touch, and experience our diverse collection of designs and materials. Our showroom offers a hands-on opportunity to explore the quality and craftsmanship behind each of our creations.",
      "Schedule a one-on-one consultation with our design experts to discuss your needs and aspirations. We'll guide you through the process and present tailored solutions that align with your vision.",
      "Discover the endless possibilities available to you. Our showroom features a variety of finishes, styles, and configurations, allowing you to visualize how our designs will enhance your space.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  // {
  //   heading: "Contact Information",
  //   titles: ["Office Address", "Phone & Email", "Working Hours"],
  //   descriptions: [
  //     "Address: 123 Luxe Street, Design City, CA 98765.",
  //     "Phone: +1 (123) 456-7890 | Email: info@luxekitchencabinets.com",
  //     "Mon - Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM | Sun: Closed.",
  //   ],
  //   imageUrl: IMAGES.cardImg1,
  // },
  {
    heading: "Connect With Us",
    titles: ["Follow Us Online On", "Share Your Experience"],
    descriptions: [
      "<a target='_blank' rel='preload noopener noreferrer' href='https://www.facebook.com/share/HxGstcCJkD1h5TqB/?mibextid=wwXIfr'><b>Facebook</b></a>, <a target='_blank'rel='preload noopener noreferrer' href='https://www.instagram.com/bellacraftsofficial?igsh=ZDNoaW15ZmFjNXVy&utm_source=qr'><b>Instagram</b></a> & <a target='_blank' rel='preload noopener noreferrer' href='https://x.com/bellacrafts01?s=11'><b>X</b></a> to stay updated with our latest projects, designs, and offers. Join our online community and be part of our design journey. Get inspired by behind-the-scenes content and success stories.",
      "We value your feedback! Share your experience with Luxe Kitchen Cabinets and help us improve. Your reviews inspire us to continually raise our standards. Connect with us and let your voice shape our future projects.",
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
  { name: "Gallery", route: ROUTES.gallery, icon: FaPhotoVideo },
  // { name: "News", route: ROUTES.news, icon: FaNewspaper },
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
