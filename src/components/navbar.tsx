"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, CrossIcon } from "lucide-react";

export default function NavBar() {
  const [navbar, setNavBar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="felx items-cetner justify-between py-3 md:py-5 md:block">
            {/* logo*/}
            <Link href="/">
              {/* <h2 className="text-2xl text-cyan-900 font-bold">Gallery</h2> */}
            </Link>
            <div className="md:hidden flex justify-end">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                onClick={() => setNavBar(!navbar)}
              >
                {navbar ? (
                  <CrossIcon />
                ) : (
                  <Menu className="focus:border-none active:border-none " />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pd-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              } `}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#gallery" onClick={() => setNavBar(!navbar)}> Gallery</Link>
                 
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavBar(!navbar)}>    Album</Link>
              
                </li>

                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="#contact"
                    onClick={() => setNavBar(!navbar)}
                  > Favorite</Link>
                 
                </li>

                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="#projects"
                    onClick={() => setNavBar(!navbar)}
                  > Hello</Link>
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
