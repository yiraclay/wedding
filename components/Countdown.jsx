"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2026-12-20T10:00:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTime();

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // Menunggu sampai browser menghitung countdown
  if (!timeLeft) {
    return (
      <section className="bg-[#f8f5f0] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500">
            COUNTDOWN
          </p>

          <div className="mt-8 text-gray-400">
            Menghitung waktu...
          </div>
        </div>
      </section>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="bg-[#f8f5f0] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500">
          COUNTDOWN
        </p>

        <h2 className="mt-3 font-serif text-3xl text-gray-800 md:text-4xl">
          Until Our Special Day
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm"
            >
              <div className="font-serif text-3xl text-gray-800 md:text-4xl">
                {String(item.value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}