/**
 *? webCode Agencies Data File
 */

//Icons:
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import { FaChartLine, FaBandcamp, FaCalendar, FaTruck } from "react-icons/fa6";
import { FaApple, FaGoogle, FaAmazon, FaFacebook, FaMicrosoft } from "react-icons/fa";

//Blogs Thumbnails:
import thumbnail_one from "../assets/blogs/blog1.png";
import thumbnail_two from "../assets/blogs/blog2.png";
import thumbnail_three from "../assets/blogs/blog3.png";
import thumbnail_four from "../assets/blogs/blog4.png";

//Blogs Author Images:
import author_one from "../assets/authors/author1.png";
import author_two from "../assets/authors/author2.png";
import author_three from "../assets/authors/author3.png";
import author_four from "../assets/authors/author4.png";

const tools = [
  {
    t_id: "t001",
    toolIcon: FiSettings,
    toolTitle: "Customizable Settings",
    toolDesc: "Easily configure tools to fit your project requirements",
  },
  {
    t_id: "t002",
    toolIcon: FiCode,
    toolTitle: "Developer Friendly",
    toolDesc: "Easily configure tools to fit your project requirements",
  },
  {
    t_id: "t003",
    toolIcon: FiSmartphone,
    toolTitle: "Responsive Design",
    toolDesc: "Easily configure tools to fit your project requirements",
  },
  {
    t_id: "t004",
    toolIcon: FiCloud,
    toolTitle: "Cloud Integration",
    toolDesc: "Easily configure tools to fit your project requirements",
  },
];

const companies = [
  { c_id: "c001", name: "Apple", companyIcon: FaApple },
  { c_id: "c002", name: "Google", companyIcon: FaGoogle },
  { c_id: "c003", name: "Amazon", companyIcon: FaAmazon },
  { c_id: "c004", name: "Facebook", companyIcon: FaFacebook },
  { c_id: "c005", name: "Microsoft", companyIcon: FaMicrosoft },
];

const services = [
  {
    s_id: "s001",
    serviceIcon: FaCalendar,
    serviceDesc:"Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui.",
  },
  {
    s_id: "s002",
    serviceIcon: FaBandcamp,
    serviceDesc:"Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur.",
  },
  {
    s_id: "s003",
    serviceIcon: FaChartLine,
    serviceDesc:"Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    s_id: "s004",
    serviceIcon: FaTruck,
    serviceDesc:"Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius.",
  },
];

const blogs = [
  {
    b_id: "b001",
    thumbnail: thumbnail_one,
    type: "Technology",
    title: "How AI is Shaping the Future of Web Development",
    desc: "Discover how artificial intelligence is transforming the way we build and design websites.",
    profile: { u_name: "John Doe", u_image: author_one, role: "Tech Blogger" },
  },
  {
    b_id: "b002",
    thumbnail: thumbnail_two,
    type: "Design",
    title: "10 Tips for Creating Stunning UI/UX Designs",
    desc: "Learn the secrets to designing user interfaces that captivate and convert users.",
    profile: {
      u_name: "Jane Foster",
      u_image: author_two,
      role: "UX Designer",
    },
  },
  {
    b_id: "b003",
    thumbnail: thumbnail_three,
    type: "Development",
    title: "Understanding JavaScript Closures in Depth",
    desc: "A comprehensive guide to one of the most powerful concepts in JavaScript.",
    profile: {
      u_name: "Mark Johnson",
      u_image: author_three,
      role: "Software Developer",
    },
  },
  {
    b_id: "b004",
    thumbnail: thumbnail_four,
    type: "Business",
    title: "Why Digital Transformation is Essential for Success",
    desc: "Explore how businesses can thrive by adopting digital transformation strategies.",
    profile: {
      u_name: "Jane Smith",
      u_image: author_four,
      role: "Business Analyst",
    },
  },
];

export { tools, companies, services, blogs };
