/**
 *? webCode Agencies Data File
 */

//Icons:
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import { FaChartLine, FaBandcamp, FaCalendar, FaTruck } from "react-icons/fa6";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaFacebook,
  FaMicrosoft,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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

//Team Members Image:
import memberOne from "../assets/members/person1.png";
import memberTwo from "../assets/members/person2.png";
import memberThree from "../assets/members/person3.png";
import memberFour from "../assets/members/person4.png";

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
    serviceDesc:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui.",
  },
  {
    s_id: "s002",
    serviceIcon: FaBandcamp,
    serviceDesc:
      "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur.",
  },
  {
    s_id: "s003",
    serviceIcon: FaChartLine,
    serviceDesc:
      "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    s_id: "s004",
    serviceIcon: FaTruck,
    serviceDesc:
      "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius.",
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

const teamMembers = [
  {
    m_id: "m001",
    name: "Jhon Doe",
    image: memberOne,
    designation: "ceo",
    icons: {
      linkedIn: FaLinkedinIn,
      facebook: FaFacebook,
      twitter: FaTwitter,
      instagram: FaInstagram,
    },
  },
  {
    m_id: "m002",
    name: "Jane Foster",
    image: memberTwo,
    designation: "cto",
    icons: {
      linkedIn: FaLinkedinIn,
      facebook: FaFacebook,
      twitter: FaTwitter,
      instagram: FaInstagram,
    },
  },
  {
    m_id: "m003",
    name: "Shina Amin",
    image: memberThree,
    designation: "designer",
    icons: {
      linkedIn: FaLinkedinIn,
      facebook: FaFacebook,
      twitter: FaTwitter,
      instagram: FaInstagram,
    },
  },
  {
    m_id: "m004",
    name: "Nicky Nicole",
    image: memberFour,
    designation: "developer",
    icons: {
      linkedIn: FaLinkedinIn,
      facebook: FaFacebook,
      twitter: FaTwitter,
      instagram: FaInstagram,
    },
  },
];

const pricingPlans = [
    {
        name: "Freelancer",
        subtitle: "Best for freelancer",
        monthlyPrice: 25,
        yearlyPrice: 250, // 25 * 12
        saves: "$25 USD per month, paid annually",
        features: [
            "1 Project",
            "Basic Support",
            "Access to all templates",
            "5GB Storage",
        ],
    },
    {
        name: "Professional",
        subtitle: "Best for professional",
        monthlyPrice: 65,
        yearlyPrice: 650, // 65 * 12
        saves: "$55 USD per month, paid annually",
        features: [
            "5 Projects",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics",
        ],
    },
    {
        name: "Agency",
        subtitle: "Best for agency",
        monthlyPrice: 95,
        yearlyPrice: 950, // 95 * 12
        saves: "$95 USD per month, paid annually",
        features: [
            "Unlimited Projects",
            "24/7 Support",
            "Access to all templates",
            "Unlimited Storage",
            "Custom Branding",
            "Team Collaboration",
        ],
    },
];

const faqs = [
    {
        id: 1,
        question: "Who should use the app?",
        answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
    },
    {
        id: 2,
        question: "What is included with my subscription?",
        answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
    },
    {
        id: 3,
        question: "How do I get paid?",
        answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
    },
    {
        id: 4,
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
    },
    {
        id: 5,
        question: "How can we get in touch?",
        answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
    }
];

export { tools, companies, services, blogs, teamMembers, pricingPlans, faqs };
