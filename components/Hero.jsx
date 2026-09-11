"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20,20,20,.35), rgba(20,20,20,.55)), url('/images/hero.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-3xl text-center text-white"
      >
        <p className="mb-5 text-sm uppercase tracking-[0.35em]">
          The Wedding Of
        </p>

        <h1 className="font-serif text-6xl font-light md:text-8xl">
          Alana
          <span className="mx-3">&</span>
          Raka
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/80 md:text-base">
          Dua hati, satu perjalanan, dan sebuah cerita yang ingin kami mulai
          bersama.
        </p>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.25em]">
            20 . 12 . 2026
          </p>
        </div>

        <motion.a
          href="#countdown"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-16 inline-flex"
        >
          <ChevronDown size={25} />
        </motion.a>
      </motion.div>
    </section>
  );
}