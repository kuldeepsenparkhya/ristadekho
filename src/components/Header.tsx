"use client";
import Image from "next/image";
import React from "react";

import brandLogo from "@/assets/images/brandlogo.webp";
import Link from "next/link";

interface MenuList {
  name: string;
  link: string;
}

const Header = () => {
  const menuList: MenuList[] = [
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "Marketplace",
      link: "/marketplace",
    },
    {
      name: "Company",
      link: "/company",
    },
  ];

  return (
    <React.Fragment>
      <header className="bg-white max-w-screen-xl mx-auto">
        <nav
          className="mx-auto flex items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={brandLogo}
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ width: "100%", height: "auto" }}
                priority={true}
                className="h-auto"
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {menuList?.map((item) => {
              return (
                <>
                  <a
                    href={item.link}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </a>
                </>
              );
            })}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {" "}
              Log in{" "}
            </Link>
            <Link
              href="/register"
              className="text-sm mx-3 font-semibold leading-6 text-gray-900"
            >
              {" "}
              Register{" "}
            </Link>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
