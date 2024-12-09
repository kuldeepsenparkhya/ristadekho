import { FaRegHandshake, FaRocketchat } from "react-icons/fa6";
import { BsPersonStanding } from "react-icons/bs";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";

export interface MenuList {
  name: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>; // Allow className prop
}

export const menuList: MenuList[] = [
  {
    name: "Dashboard",
    link: "/user-dashboard",
    icon: AiOutlineDashboard, // Pass the component itself without className here
  },
  {
    name: "Profile",
    link: "/user-dashboard/profile",
    icon: BsPersonStanding,
  },
  {
    name: "Interests",
    link: "/interests",
    icon: FaRegHandshake,
  },
  {
    name: "Chat list",
    link: "/chat-list",
    icon: FaRocketchat,
  },
  {
    name: "Plan",
    link: "/plan",
    icon: CiMoneyBill,
  },
  {
    name: "Setting",
    link: "/setting",
    icon: CiSettings,
  },
];
