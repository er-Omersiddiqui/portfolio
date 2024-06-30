import { Icons } from "@/components/icons";

export const DATA = {
  name: "Mohammed Omer Siddiqui",
  initials: "Omer",
  url: "https://www.linkedin.com/in/mohammed-omer-siddiqui/",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Aspiring Cloud Engineer. I love building things and helping people.",
  summary:
    "IT Grad from LIET. Passionate about Cloud Computing & Networking. I find great value in building new connections.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "AWS",
    "Linux",
    "Shell Scripting",
  ],
  contact: {
    email: "er.omersiddiqui63.com",
    tel: "+91 6309538463",
    social: {
      GitHub: {
        url: "https://github.com/er-Omersiddiqui",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/mohammed-omer-siddiqui/",
        icon: Icons.linkedin,
      },
      X: {
        url: "not available",
        icon: Icons.x,
      },
    },
  },

  Apprenticeship: [
    {
      company: "Full Stack Academy",
      href: "https://fullstackacademy.in/",
      badges: [],
      location: "On-site",
      title: "AWS Solution Architect Associate",
      logoUrl: "https://th.bing.com/th/id/OIP.ORzrI_O4pP2FwIubmkKhTQHaHa?rs=1&pid=ImgDetMain",
      start: "Oct 2023",
      end: "Feb 2024",
      description:
        "Successfully completed my apprenticeship as an 'AWS Solution Architect Associate' at Full Stack Academy. I have acquired in-depth expertise in Cloud Technologies, Automation, and Infrastructure Management. Eager to leverage my skills, embrace new challenges, and make a meaningful impact in the field of Cloud Computing.",
    },
  ],
  education: [
    {
      school: "St. Marks Boys Town High School",
      href: "https://www.montforthydprovince.org/st-marks-boys-town-high-school-jahanuma-hyderabad/",
      percentage: "72%",
      logoUrl: "/buildspace.jpg",
      start: "2014",
      end: "2017",
    },
    {
      school: "Narayana Junior College",
      href: "https://www.narayanajuniorcolleges.com/",
      degree: "MPC",
      percentage: "75%"
      logoUrl: "/waterloo.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Lords Institute of Engineering and Technology",
      href: "https://www.lords.ac.in/",
      degree: "Bachelor's Degree of Engineering (B.E)",
      logoUrl: "/laurier.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "ChatBot Application using Deep Learning Algorithm",
      date: "June 2022",
      active: true,
      description:
        "The chatbot application project involved creating a conversational AI using Seq2Seq + attention models and NLP techniques. It was trained on large datasets to ensure intelligent, context-aware interactions for a better user experience.",
      technologies: [
        "Python",
        "Seq2Seq + attention model",
        "Natural Language Processing (NLP)",
        "Deep Learning",
        "Large datasets for training",
      ],
    },
    {
      title: "Deep Learning-based Facemask Detection using YOLO v5",
      date: "May 2023",
      active: true,
      description:
        "The Deep Learning-Based Facemask Detection project used YOLOv5 to identify and classify facemask usage in images and videos, achieving high accuracy to support COVID-19 safety.",
      technologies: [
        "Python",
        "YOLO v5",
        "Deep Learning",
        "Image & Video processing",
        "High precision/recall classification techniques",
      ],
      },
    ],
  hackathons: [
    {
      title: "Code Clash",
      dates: "May 31, 2024",
      location: "Hyderabad, India",
      description:
        "Developed a mobile application which delivers Note taking sloutions.",
    },
  ],
} as const;
