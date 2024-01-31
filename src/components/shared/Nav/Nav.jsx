"use client";
import React from "react";
import logo from "@/assets/demo/logo.svg";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import appDev from "@/assets/icons/service/app-dev.svg";
import digitalMarketting from "@/assets/icons/service/digital-marketing.svg";
import graphic from "@/assets/icons/service/graphic.svg";
import uiUx from "@/assets/icons/service/ui-ux-design.svg";
import webDesign from "@/assets/icons/service/web-design.svg";
import webDev from "@/assets/icons/service/web-development.svg";
import { IoMdClose } from "react-icons/io";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const navListMenuItems = [
  // Add more services as needed
  { to: "webDesign", title: "Web Design", icon: webDesign },
  { to: "webDevelopment", title: "Web Development", icon: webDev },
  {
    to: "digitalMarketing",
    title: "Digital Marketing",
    icon: digitalMarketting,
  },
  { to: "uiUxDesign", title: "Ui/Ux Design", icon: uiUx },
  { to: "graphicDesign", title: "Ghrapics Design", icon: graphic },
  { to: "appDevelopment", title: "App Development", icon: appDev },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ icon, title, to }) => (
    <Link href={to} key={to}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          <Image src={icon} alt="" />
        </div>
        <div>
          <Typography
            variant="lead"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="lead" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="div"
        variant="lead"
        color="blue-gray"
        className="font-medium"
      >
        <Link href="/">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="div"
        variant="lead"
        color="blue-gray"
        className="font-medium"
      >
        <Link href="aboutUs">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            About Us
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar shadow={false} color="transparent" className="px-0 py-6">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image className="cursor-pointer h-10" src={logo} alt="BIH Logo" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link href={"contactUs"}>
            <Button
              variant="filled"
              className="rounded-full bg-primary"
              size="lg"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoMdClose className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
