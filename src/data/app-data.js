/**
 *? webCode Agencies Data File
 */

//Icons:
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaFacebook,
  FaMicrosoft,
} from "react-icons/fa";

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

export { tools, companies };
