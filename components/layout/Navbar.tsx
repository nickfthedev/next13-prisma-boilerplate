"use client"

import { UserIcon, BellIcon } from "@heroicons/react/24/solid";

import { useEffect } from 'react'
import { themeChange } from 'theme-change'


function Navbar() {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <label htmlFor="my-drawer-4" className="btn btn-ghost lg:hidden">
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
        </label>
        <a className="btn btn-ghost normal-case text-xl">Todo</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
        <label className="btn btn-ghost">
            <BellIcon className="h-5 w-5 text-primary" />
          </label>  
          <label tabIndex={0} className="btn btn-ghost">
            <UserIcon className="h-5 w-5 text-primary" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
