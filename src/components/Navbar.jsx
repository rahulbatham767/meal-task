import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { GiSchoolBag } from "react-icons/gi";

import { Badge, Box, Button, Stack, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar bg-transparent  font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <details>
                <summary>Home</summary>
                <ul className="p-2 text-black">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Groceries</summary>
                <ul className="p-2 text-black">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 text-black">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl text-white">GO FOOD</Link>
      </div>
      <div className="navbar-center hidden lg:flex mr-14">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Home</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Groceries</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end  lg:justify-between   mr-5 ">
        <Box>
          <Link className="btn btn-ghost">
            Connect with us <FaArrowRight />
          </Link>
        </Box>
        <Box className="hidden lg:flex">
          <Button className="avatar placeholder ">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span>
                <CiSearch />
              </span>
            </div>
          </Button>
          <Button className="avatar placeholder ">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span>
                <CiUser />
              </span>
            </div>
          </Button>
          <Button className="avatar placeholder  ">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <Badge badgeContent={2} variant="solid" color="warning">
                <Typography fontSize="xl">
                  <CiHeart />
                </Typography>
              </Badge>
            </div>
          </Button>
          <Button className="avatar placeholder ">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <Badge badgeContent={2} variant="solid" color="warning">
                <Typography fontSize="xl">
                  <GiSchoolBag />
                </Typography>
              </Badge>
            </div>
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
