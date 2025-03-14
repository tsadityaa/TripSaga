"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Vlogs", href: "/vlogs" },
    { name: "Travel Guide", href: "/guide" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 shadow backdrop-blur-lg bg-opacity-30 transition-colors duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Plane
                className={`h-8 w-8 ${
                  pathname != "/"
                    ? "text-black hover:text-gray-700"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  pathname != "/"
                    ? "text-black hover:text-gray-700"
                    : scrolled
                    ? "text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                TripSaga
              </span>
            </Link>
          </motion.div>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`${
                      pathname == item.href ? "font-bold" : ""
                    } px-3 py-2 rounded-md text-sm duration-300 relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] ${
                      pathname != "/"
                        ? "text-black hover:text-gray-700"
                        : scrolled
                        ? "text-black hover:text-gray-700"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Book Now Button on Desktop */}
          <div className="hidden md:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                onClick={() => {
                  router.push("/packages");
                }}
                className={`${
                  pathname != "/"
                    ? "text-black"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                } group not-prose inline-flex items-center gap-1 pl-3 pr-1 py-1 rounded-md font-bold bg-inherit hover:text-white hover:dark:text-white border-zinc-300 dark:border-zinc-700 hover:bg-primary hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out`}
              >
                Book Now
                <svg
                  viewBox="0 0 24 24"
                  className="mx-2 size-4 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                  />
                  <polyline
                    points="12 5 19 12 12 19"
                    className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                  />
                </svg>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                {/* Book Now Button in Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button className="w-full mt-4">Book Now</Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
