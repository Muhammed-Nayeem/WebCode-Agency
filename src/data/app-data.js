/**
 *? webCode Agencies Data File
 */

//Icons:
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import { FaChartLine, FaBandcamp, FaCalendar, FaTruck } from "react-icons/fa6";
import { FaApple, FaGoogle, FaAmazon, FaFacebook, FaMicrosoft } from "react-icons/fa";

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
    serviceDesc: "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui.",
  },
  {
    s_id: "s002",
    serviceIcon: FaBandcamp,
    serviceDesc: "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur.",
  },
  {
    s_id: "s003",
    serviceIcon: FaChartLine,
    serviceDesc: "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    s_id: "s004",
    serviceIcon: FaTruck,
    serviceDesc: "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius.",
  },
];

export { tools, companies, services };
