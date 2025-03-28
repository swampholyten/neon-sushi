"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  image: string;
  category: string;
}

export const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const constraintsRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const links: NavLink[] = [
    {
      href: "/",
      label: "HOME",
      image: "/sushi/onigiri.jpeg",
      category: "Main Navigation",
    },
    {
      href: "/dashboard",
      label: "DASHBOARD",
      image: "/sushi/nigiri.jpeg",
      category: "User Area",
    },
    {
      href: "/products",
      label: "Products",
      image: "/sushi/soup.jpeg",
      category: "Sushi & Section",
    },
    {
      href: "/login",
      label: "LOGIN",
      image: "/sushi/sashimi.jpeg",
      category: "Account Access",
    },
    {
      href: "/signup",
      label: "SIGN UP",
      image: "/sushi/uramaki.jpeg",
      category: "Account Creation",
    },
  ];

  return (
    <>
      <Button
        size={"icon"}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={cn({
          "fixed top-5 right-5 z-50": isOpen,
        })}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-background"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            ref={constraintsRef}
          >
            <div className="relative flex w-full max-w-7xl justify-between px-8">
              <nav className="flex flex-col items-start space-y-8 py-12">
                {links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    className="relative text-5xl transition-colors hover:text-muted-foreground md:text-7xl tracking-wide font-light"
                    custom={i}
                    variants={linkVariants}
                    onHoverStart={() => setActiveIndex(i)}
                    onHoverEnd={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(i)}
                    onBlur={() => setActiveIndex(null)}
                  >
                    <div className="relative">
                      {link.label}
                      <motion.div
                        className="absolute bottom-0 h-px w-0 bg-black dark:bg-white"
                        animate={{ width: activeIndex === i ? "100%" : "0%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.a>
                ))}
              </nav>

              <AnimatePresence>
                {activeIndex !== null && (
                  <motion.div
                    className="absolute right-8 top-1/2 -translate-y-1/2 md:right-16"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key={activeIndex}
                  >
                    <div className="relative h-[300px] w-[220px] overflow-hidden md:h-[500px] md:w-[550px] ">
                      <Image
                        src={links[activeIndex].image || "/placeholder.svg"}
                        alt={links[activeIndex].label}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                        <div className="text-xl font-medium">
                          {links[activeIndex].category}
                        </div>
                        <div className="text-lg font-bold">
                          <div>SITE VIEW</div>
                          <div className="opacity-50">SITE VIEW</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
