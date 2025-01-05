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
const contactAddress: string = "#116 - 8 heatherglen pl, Rocky View AB";
export const CONTACT_MAP = "https://maps.app.goo.gl/DJonswjCub4mKbZWA";

export const EMBED_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.409894502563!2d-113.8907439239054!3d50.99009724836266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371795ec5ab0c21%3A0xe8e850edfad8b46c!2s8%20Heatherglen%20Pl%20%23116%2C%20Rocky%20View%2C%20AB%20T1X%202K3%2C%20Canada!5e0!3m2!1sen!2s!4v1735992812266!5m2!1sen!2s";

export const CURR_YEAR = new Date().getFullYear();

export const dummyData = {
  heading: "Luxe Kitchen Cabinets",
  titles: ["Quality Craftsmanship", "Innovative Designs", "Space Optimization"],
  descriptions: [
    "Our cabinets are crafted with precision and attention to detail, ensuring durability and style.",
    "We offer cutting-edge designs to match your taste and preferences, creating the perfect storage solutions.",
    "Maximize your space with our custom solutions, making your home organized and efficient.",
  ],
  imageUrl: IMAGES.landingImage,
};

export const ROUTES_TITLES: routeTitles = {
  "/": "Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/contact-us":
    "Contact Us - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/news": "News - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/our-team": "Our Team - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services":
    "Our Services - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/about-us": "About Us - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/kitchen":
    "Kitchen Cabinets - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/bathroom-storage":
    "Bathroom Storage - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/built-in":
    "Built-in Cabinets - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/cabinets":
    "Custom & Commercial Cabinets - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/closets":
    "Closets - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/home-organization":
    "Home Organization - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/laundry-storage":
    "Laundry Storage - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
  "/services/wet-bars":
    "Wet Bars - Luxe Kitchen Cabinets - Custom Cabinets & Closets",
};

export const MAINPOSTERCONTENT: mainPosterData = {
  "/": {
    title: "WARNING: DEVELOPMENT STAGES",
    description:
      "Transform your home with Luxe Kitchen Cabinets' custom-designed cabinets and closets. Maximize space, improve organization, and showcase your personal style. Using premium materials and innovative features, we craft spaces that are as functional as they are beautiful.",
    imageUrl: IMAGES.landingImage,
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Have questions or need expert advice? Reach out to us for personalized assistance in creating your dream space. Our team is here to guide you through every step of your cabinetry journey, ensuring your satisfaction. Whether you’re ready to start a project or need more information, we're always happy to help.",
    imageUrl: IMAGES.landingImage,
  },
  "/news": {
    title: "News",
    description:
      "Stay updated with the latest trends, product launches, and design inspirations in custom cabinetry. Discover fresh ideas and learn how we’re shaping the future of home organization with innovation and style. Our blog keeps you informed about new trends and offers expert tips for home improvement.",
    imageUrl: IMAGES.landingImage,
  },
  "/our-team": {
    title: "Our Team",
    description:
      "Meet the skilled craftsmen and designers behind our cabinetry solutions. With years of experience and a dedication to excellence, our team ensures every project meets the highest standards of quality and precision. We pride ourselves on our attention to detail and our commitment to creating spaces that exceed client expectations.",
    imageUrl: IMAGES.landingImage,
  },
  "/services": {
    title: "Our Services",
    description:
      "From initial design to flawless installation, our services are tailored to create functional and stunning spaces. Whether it’s a kitchen, closet, or home organization system, we’ve got you covered every step of the way. We work closely with you to ensure that each solution fits perfectly with your lifestyle and aesthetic preferences.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/kitchen": {
    title: "Kitchen Design & Storage",
    description:
      "Reimagine your kitchen with elegant and practical cabinetry solutions. Our designs maximize storage, improve organization, and create a kitchen that complements your lifestyle and aesthetic preferences. From sleek modern designs to traditional warmth, we have the perfect solution for every home.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/bathroom-storage": {
    title: "Bathroom Storage Solutions",
    description:
      "Create a spa-like retreat with our innovative bathroom storage designs. Maximize space, add a touch of luxury, and ensure your bathroom remains both organized and stylish with our custom solutions. We incorporate smart storage elements to ensure your bathroom is as functional as it is beautiful.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/built-in": {
    title: "Built-In Cabinetry",
    description:
      "Enhance your home with built-in cabinetry solutions designed to seamlessly integrate with your space. From living rooms to offices, our bespoke designs combine style and functionality for a perfect fit. These built-ins provide both beauty and utility, making them the ideal addition to any home.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/cabinets": {
    title: "Custom & Commercial Cabinets",
    description:
      "Upgrade your home with precision-crafted cabinets. Our designs are stylish, highly functional, and tailored to fit any room, offering smart storage solutions that blend seamlessly with your décor. Whether it’s a cozy living room or a professional commercial space, our custom cabinets provide the perfect blend of form and function.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/closets": {
    title: "Closets",
    description:
      "Transform your closet into a beautifully organized space. Our custom closet solutions maximize storage, reduce clutter, and ensure every inch is utilized efficiently, all while looking stylish. From walk-in closets to compact spaces, we create functional yet beautiful designs that suit your personal needs and style.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/home-organization": {
    title: "Home Organization",
    description:
      "Discover the joy of a well-organized home with our custom storage solutions. From shelves to storage units, our designs help declutter spaces while enhancing functionality and visual appeal. We aim to create solutions that maximize every inch of your home while maintaining a stylish and cohesive look.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/wet-bars": {
    title: "Wet Bars",
    description:
      "Enhance your home entertainment with custom-designed wet bars. Featuring premium materials, sleek finishes, and ample storage, our wet bars are perfect for hosting guests or enjoying quiet evenings. Whether you need a compact design or a larger setup, our wet bars bring sophistication to your entertainment space.",
    imageUrl: IMAGES.serviceImage,
  },
  "/services/laundry-storage": {
    title: "Laundry Storage Solutions",
    description:
      "Simplify your laundry routine with smart storage solutions. Our custom designs maximize space, improve efficiency, and add a touch of style, making your laundry room both functional and organized. Say goodbye to cluttered countertops and hello to a sleek, organized space.",
    imageUrl: IMAGES.serviceImage,
  },
  "/about-us": {
    title: "About Us",
    description:
      "At the core of our company lies a passion for craftsmanship and customer satisfaction. We’re dedicated to delivering top-notch cabinetry solutions that enhance your home’s beauty, organization, and functionality. Our experienced team works closely with clients to bring their vision to life, ensuring every detail reflects their unique needs.",
    imageUrl: IMAGES.aboutImage,
  },
};

export const HOMECARDSECTION: cardSection[] = [
  {
    heading: "Who is Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
      "Our services range from consultation to installation, and our team ensures every detail is crafted to your specifications. We believe in providing solutions that maximize space while enhancing the aesthetic of your home or office.",
      "Integrity, precision, and trust are at the core of our business. We work closely with clients to understand their unique needs and deliver products that are functional, beautiful, and long-lasting.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Transform Your Space with Luxe Kitchen Cabinets",
    titles: [
      '"Luxe Kitchen Cabinets" Has Been Making Cabinets & Closets in Calgary for Over 13 Years',
    ],
    descriptions: [
      "At Luxe Kitchen Cabinets, we believe that your home is an expression of who you are. Every detail matters—each color, texture, and design element should reflect your personal taste and lifestyle. That's why we specialize in crafting bespoke cabinetry that fits perfectly with your vision and space. With over 13 years of experience in Calgary, our locally owned and operated shop has been a trusted name in creating Luxe Kitchen Cabinets. Our state-of-the-art manufacturing facility allows us to bring your ideas to life with precision and care, ensuring each piece is tailored to your exact specifications. Whether you need storage solutions, functional designs, or a complete transformation of your space, we are here to help. Start creating the space you've always dreamed of. <a href='/contact-us'><b>Contact us today</b></a> to explore the possibilities of custom cabinetry that is as unique as you are.",
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
      "At Luxe Kitchen Cabinets, we take pride in our superior craftsmanship. Our expert team combines advanced woodworking techniques with innovative interior design to ensure that every piece is not only functional but also beautifully crafted to your specifications.",
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
    heading: "Our Story",
    titles: ["How It Began", "Our Growth", "Our Passion"],
    descriptions: [
      "At Luxe Kitchen Cabinets, our journey began with a simple yet powerful idea: to create spaces that are not just functional but also inspiring. From humble beginnings to becoming a trusted name in custom cabinetry, our story is built on passion, craftsmanship, and a commitment to excellence.",
      "Over the years, we've grown from a small team of dedicated artisans to a full-scale operation, serving homes and offices with innovative and personalized cabinetry solutions.",
      "Our passion lies in creating timeless designs that blend functionality with aesthetics, ensuring every project tells a unique story.",
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
      "Our kitchen solutions are designed to enhance your cooking experience with innovative storage ideas, modern aesthetics, and functional layouts that suit your lifestyle.",
      "We design custom closets and cabinets that cater to your specific needs, whether it's maximizing storage or adding a touch of luxury to your space.",
      "Our bathroom and laundry storage solutions provide a balance of style and function, keeping your spaces organized and efficient, even in smaller areas.",
      "From built-in furniture to wet bars, we craft unique, integrated pieces that complement your living spaces, offering both beauty and functionality.",
      "Our home organization systems are designed to simplify your life. We create storage solutions that help you maintain a clutter-free and organized home, making it easier to manage everyday tasks.",
    ],
    imageUrl: IMAGES.serviceImage,
  },
  {
    heading: "Why Choose Luxe Kitchen Cabinets",
    titles: ["Innovative Designs", "Premium Materials", "Customer Focus"],
    descriptions: [
      "Our team works closely with you to understand your vision and goals, ensuring every detail is meticulously crafted. With a focus on quality and functionality, we create solutions that not only meet but exceed expectations.",
      "We use only the finest materials, ensuring durability, longevity, and an elegant finish in every project we undertake.",
      "Customer satisfaction is our top priority. From consultation to installation, we ensure every step is seamless and every expectation is exceeded.",
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

export const SERVICESCARDSECTION: cardSection[] = [
  {
    heading: "Custom Kitchen Designs",
    titles: ["Tailored Solutions", "Functional Spaces", "Elegant Aesthetics"],
    descriptions: [
      "Our custom kitchen designs are crafted to suit your unique lifestyle and preferences. From modern minimalism to classic elegance, we bring your dream kitchen to life. Every project begins with a detailed consultation to understand your needs, ensuring the final design fits perfectly into your space. Whether it's maximizing storage or incorporating the latest trends, we create solutions that are both practical and aesthetically pleasing.",
      "We optimize every inch of your space, ensuring seamless functionality while maintaining a sophisticated look. Our designs are focused on making your kitchen work effortlessly for your daily activities, with smart storage solutions and easy access to everything you need. We understand that functionality is key, and our goal is to create spaces that are not only beautiful but also highly efficient and organized.",
      "Every design is a blend of creativity and precision, resulting in kitchens that are both beautiful and practical. Our team meticulously selects materials and finishes that complement your vision, ensuring a timeless aesthetic that enhances the overall ambiance. With a keen eye for detail and a passion for design, we create kitchens that inspire, offering a balance of elegance and durability for years to come.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Smart Storage Solutions",
    titles: ["Innovative Designs", "Space Optimization", "Clutter-Free Living"],
    descriptions: [
      "Say goodbye to clutter with our smart storage solutions, designed to maximize every corner of your home or office. We combine innovation and style to create designs that make the most of available space while adding a touch of elegance. Whether it's a small nook or an expansive area, our designs turn every inch into a functional and aesthetically pleasing part of your space.",
      "From custom cabinets to hidden compartments, our solutions ensure a perfect balance between design and utility. We understand that every space is unique, which is why we craft solutions that cater to your specific needs. Our designs aim to make your space feel larger, more organized, and visually appealing, with thoughtful attention to detail and efficient use of space.",
      "Our storage systems are crafted to provide long-lasting functionality without compromising on style. We focus on creating systems that simplify your life by keeping your belongings neatly organized and easily accessible. By blending practical design with elegance, we ensure that your home or office remains clutter-free while looking sophisticated and welcoming.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Bathroom Cabinetry",
    titles: ["Stylish Designs", "Durable Materials", "Efficient Use of Space"],
    descriptions: [
      "Upgrade your bathroom with our elegant and durable cabinetry solutions tailored to fit your space. Our designs offer a perfect blend of style and functionality, enhancing the overall aesthetic of your bathroom. Whether you're looking for sleek modern lines or timeless classic elements, our solutions ensure your bathroom remains both luxurious and practical for years to come.",
      "We use premium materials designed to withstand moisture and daily wear while adding aesthetic appeal. Each piece is crafted with durability in mind, ensuring that your cabinetry maintains its beauty and function even in the most demanding environments. From high-quality wood finishes to water-resistant coatings, our materials are chosen to stand the test of time.",
      "Our designs focus on efficiency, ensuring every cabinet serves a purpose. We maximize storage while maintaining an uncluttered, polished look that complements your space. Whether it's hidden storage or cleverly designed shelving, we ensure your bathroom feels open and organized, with everything you need within reach.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Closet Organizers",
    titles: ["Custom Closets", "Maximized Storage", "Personalized Design"],
    descriptions: [
      "Transform your closet into an organized haven with our custom closet solutions. Our designs are built around your lifestyle and storage needs, ensuring a perfect fit for your space and belongings. We offer a range of layouts and features to suit every style, from walk-in closets to compact spaces, creating a functional and aesthetically pleasing storage solution.",
      "We design layouts that maximize storage space and keep your belongings easily accessible. By incorporating adjustable shelves, hanging systems, and hidden compartments, we create closets that are as functional as they are beautiful. Our goal is to make the most out of every inch, providing efficient storage while maintaining an organized, clean look.",
      "Every closet is tailored to your personal style and storage requirements. We collaborate with you to ensure that your closet is not only a practical solution but also a reflection of your taste and preferences. From the choice of materials to custom features, we create closets that perfectly match your vision and needs.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Commercial Spaces",
    titles: ["Office Cabinets", "Retail Displays", "Custom Workspaces"],
    descriptions: [
      "Enhance your commercial space with custom cabinetry and storage solutions designed for efficiency and style. Our office cabinets are crafted to meet the demands of a professional environment while maintaining a sleek and modern design. Whether for storage, organization, or display, we ensure that your office is both productive and visually appealing.",
      "From office workstations to retail shelving, we deliver functional and visually appealing solutions. Our custom displays are designed to enhance the shopping experience, offering a balance of style and practicality. We focus on creating displays that not only showcase your products but also optimize the space and flow of your store.",
      "We understand the unique requirements of commercial spaces and design accordingly. Whether you're looking to create an efficient workstation, a collaborative area, or a functional retail setup, we offer customized solutions that cater to your business needs. Our designs prioritize organization, accessibility, and aesthetic appeal, ensuring your workspace is both efficient and inspiring.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const KITCHENCARDSECTION: cardSection[] = [
  {
    heading: "Modern Kitchens",
    titles: ["Sleek Designs", "Smart Technology", "Premium Finishes"],
    descriptions: [
      "Experience the perfect blend of style and functionality with our modern kitchen designs. Every detail is carefully crafted to create a contemporary and efficient space, ensuring your kitchen becomes the heart of your home.",
      "We integrate smart technology, including intelligent storage solutions and automated appliances, for a seamless cooking experience. Our kitchens are designed to evolve with your needs, incorporating the latest advancements for convenience and ease.",
      "Our kitchens feature premium finishes and durable materials, ensuring both aesthetic appeal and long-lasting quality. Each element is selected with care to guarantee both beauty and functionality for years to come.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Classic Kitchens",
    titles: ["Timeless Designs", "Rich Details", "Elegant Craftsmanship"],
    descriptions: [
      "Bring timeless elegance to your home with our classic kitchen designs that never go out of style. With a focus on tradition and enduring appeal, we create kitchens that will always feel current and inviting.",
      "We focus on intricate details, rich textures, and warm finishes that create an inviting atmosphere. Every corner is thoughtfully designed to provide a luxurious yet comfortable space for cooking and entertaining.",
      "Each design reflects traditional craftsmanship blended with modern functionality. We emphasize quality construction and a commitment to detail, creating kitchens that are both beautiful and practical.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Open Concept Kitchens",
    titles: ["Spacious Layouts", "Seamless Flow", "Integrated Living"],
    descriptions: [
      "Our open-concept kitchens are designed to create a sense of spaciousness and seamless connection with the rest of your home. The layout encourages interaction, ensuring that the kitchen becomes a central part of your living space.",
      "We prioritize layouts that enhance movement, accessibility, and interaction among family and guests. The kitchen becomes a fluid extension of your home, making meal prep and socializing effortless.",
      "These designs combine style and practicality for a dynamic living space. Our kitchens don't just serve as places to cook—they're designed to integrate into your home’s lifestyle, enhancing how you live.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Custom Cabinetry",
    titles: ["Tailored Storage", "Unique Designs", "Maximum Efficiency"],
    descriptions: [
      "Maximize your kitchen's potential with our custom cabinetry solutions, tailored to your unique storage needs. Every cabinet and shelf is meticulously designed to organize and optimize your space.",
      "We design cabinets that blend functionality with aesthetics, ensuring every inch of space is utilized efficiently. With attention to detail and unique customizations, we create kitchens that reflect your style and needs.",
      "Our team works closely with you to create personalized designs that reflect your style and preferences. Every design decision is made with the goal of creating a functional, efficient, and organized kitchen that fits your lifestyle.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Luxury Kitchens",
    titles: [
      "High-End Finishes",
      "State-of-the-Art Appliances",
      "Exclusive Designs",
    ],
    descriptions: [
      "Indulge in sophistication with our luxury kitchen designs, featuring high-end finishes and state-of-the-art appliances. We carefully select the best materials and finishes to create a space that's as luxurious as it is practical.",
      "Each luxury kitchen is crafted with precision and attention to detail, ensuring an exclusive and elegant aesthetic. We integrate the latest appliances to provide convenience and ensure your kitchen is equipped for the future.",
      "We create spaces that redefine comfort, style, and opulence. Our exclusive designs elevate the heart of your home, bringing unparalleled elegance and functionality into one beautiful package.",
    ],
    imageUrl: IMAGES.cardImg1,
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
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Luxury Bathrooms",
    titles: ["Premium Finishes", "Spa-Like Experience", "Exclusive Designs"],
    descriptions: [
      "Indulge in the comfort of a spa-like bathroom designed with luxury and relaxation in mind. Our premium finishes add a touch of opulence, transforming your bathroom into a sanctuary for rest and renewal.",
      "Our high-end materials, elegant fixtures, and attention to detail ensure an unmatched level of sophistication. From custom vanities to intricate tile work, every design element is crafted to create a peaceful retreat.",
      "From freestanding bathtubs to designer vanities, every element is crafted to perfection. We offer unique designs that elevate your bathroom's appeal, creating a space that is as functional as it is luxurious.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Custom Vanities",
    titles: ["Tailored Designs", "Optimal Storage", "Elegant Aesthetics"],
    descriptions: [
      "Upgrade your bathroom with custom vanities designed to meet your style and storage needs. Our bespoke vanities are built with both aesthetics and functionality in mind, creating the perfect balance between form and function.",
      "We create vanities that are not only functional but also serve as a statement piece in your bathroom. With clever storage solutions, we ensure your space remains tidy while maintaining a visually striking design.",
      "Our designs focus on maximizing space while maintaining a clean and elegant appearance. Every detail is meticulously planned to ensure your bathroom feels spacious, inviting, and visually stunning.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Small Space Solutions",
    titles: ["Space Optimization", "Functional Designs", "Stylish Solutions"],
    descriptions: [
      "Make the most of compact spaces with our innovative small bathroom designs. We specialize in transforming smaller bathrooms into efficient and stylish spaces that meet all your needs without sacrificing aesthetics.",
      "We optimize every inch of space with clever storage solutions and efficient layouts. Our designs are not only beautiful but highly functional, ensuring your bathroom is both practical and visually appealing.",
      "Stylish fixtures and thoughtful designs ensure a seamless blend of practicality and aesthetics. We aim to make every bathroom a space where form and function coexist harmoniously.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
  {
    heading: "Eco-Friendly Bathrooms",
    titles: ["Sustainable Fixtures", "Water Efficiency", "Green Materials"],
    descriptions: [
      "Reduce your environmental footprint with our eco-friendly bathroom designs. We focus on using sustainable materials and energy-efficient fixtures to help create a greener, more eco-conscious bathroom space.",
      "We use water-saving fixtures, energy-efficient lighting, and sustainable materials for a greener future. Our designs ensure that your bathroom is both eco-friendly and luxurious, without compromising on style.",
      "Enjoy a stylish bathroom that aligns with your commitment to sustainability. We incorporate green materials that are both environmentally friendly and visually stunning, creating a space that is as conscious as it is beautiful.",
    ],
    imageUrl: IMAGES.cardImg1,
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
    heading: "Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
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
      "At Luxe Kitchen Cabinets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const CLOSETSCARDSECTION: cardSection[] = [
  {
    heading: "Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
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
      "At Luxe Kitchen Cabinets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const HOMEORGCARDSECTION: cardSection[] = [
  {
    heading: "Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
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
      "At Luxe Kitchen Cabinets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const WETBARSCARDSECTION: cardSection[] = [
  {
    heading: "Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
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
      "At Luxe Kitchen Cabinets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const LAUNDRYCARDSECTION: cardSection[] = [
  {
    heading: "Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
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
      "At Luxe Kitchen Cabinets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const NEWSCARDSECTION: cardSection[] = [
  {
    heading: "Luxe Kitchen Cabinets",
    titles: ["Who are we?", "What we do?", "Our Values"],
    descriptions: [
      "At Luxe Kitchen Cabinets, we are passionate creators, builders, and designers dedicated to transforming spaces into functional works of art. Founded with a vision to bring high-quality craftsmanship into every home and office, we specialize in custom cabinetry and storage solutions that reflect your style and needs.",
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
      "At Luxe Kitchen Cabinets, we offer top-quality craftsmanship. Our team is highly skilled in woodworking and interior design, ensuring that every project meets the highest standards.",
      "We provide custom, tailored solutions that perfectly suit your space. Whether it's a small closet or an entire kitchen overhaul, our designs are made to maximize storage while maintaining a stylish and modern aesthetic.",
      "Our commitment to customer satisfaction is unwavering. We take pride in the long-term relationships we've built with our clients, ensuring their needs are met at every stage of the process.",
    ],
    imageUrl: IMAGES.cardImg1,
  },
];

export const CONTACTCARDSECTION: cardSection[] = [
  {
    heading: "Get in Touch",
    titles: ["Have Questions?", "Need Assistance?", "Collaborate with Us"],
    descriptions: [
      "Our team is ready to provide detailed answers and guidance, ensuring you have all the information you need to make informed decisions. Don't hesitate to reach out, and we'll help clarify any doubts.",
      "Whether you're working on a current project or need help refining your ideas, our dedicated support team is here to assist. We're committed to making your experience smooth and successful every step of the way.",
      "We’re always open to new opportunities and ideas! If you're interested in partnering with Luxe Kitchen Cabinets, let's connect and explore how we can create extraordinary solutions together.",
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
