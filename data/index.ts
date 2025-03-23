export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI SaaS",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Nielay was transformative. His expertise in AI and full-stack development enabled us to integrate intelligent solutions seamlessly into our operations. His clear communication and proactive approach made all the difference.",
    name: "Alexandra Reid",
    title: "CTO, Innovatech Solutions",
    image: "/testimonial3.jpg",
  },
  {
    quote:
      "Nielay's technical acumen and attention to detail were evident from the start. He delivered a robust, AI-powered platform that not only met but exceeded our expectations. I highly recommend him for any enterprise-level project.",
    name: "Liam Carter",
    title: "Product Manager, NextGen Analytics",
    image: "/testimonial1.jpg",
  },
  {
    quote:
      "We faced a complex challenge, and Nielay's innovative approach turned it into a success story. His commitment to quality and efficiency has empowered our business to evolve and thrive.",
    name: "Morgan Lee",
    title: "Director of Digital Transformation, TechNova Inc.",
    image: "/testimonial2.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "google cloud",
    img: "/google-cloud-logo.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "HuggingFace",
    img: "/hf.svg",
    nameImg: "/hf-logo-with-title.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "mongoDB",
    img: "/mongodb-icon.svg",
    nameImg: "/mongodb.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer @Fractal",
    desc: "Building AI products for fortune 500 clients",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Engineer @JIO FYND",
    desc: "Build features like Audit Trail System, Quality Control (QC) Feature for JIO Commerce. Search Analytics Enhancement, Frontend Migration & Stabilization for Fynd platform.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Engineer @TryCatch LLC",
    desc: "Worked on multiple MERN stack client projects",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "App Engineer @Cloudsufi",
    desc: "Led the ideation and developed supplychain & healthcare apps for a suite of productized services using google cloud services.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NielayShintre",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/nielay_shintre",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nielay-shintre-780982181/",
  },
];
