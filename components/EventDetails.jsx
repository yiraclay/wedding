import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function EventDetails() {
  return (
    <section className="py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-black/40">
        Join Us
      </p>

      <h2 className="mt-3 font-serif text-4xl">
        Wedding Celebration
      </h2>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
        <Detail
          icon={<CalendarDays />}
          title="Date"
          text="Sunday, 20 December 2026"
        />

        <Detail
          icon={<Clock />}
          title="Time"
          text="10.00 WIB — selesai"
        />

        <Detail
          icon={<MapPin />}
          title="Location"
          text="The Grand Ballroom, Malang"
        />
      </div>

      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-full bg-[#292722] px-7 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        Open Google Maps
      </a>
    </section>
  );
}

function Detail({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1eee7]">
        {icon}
      </div>

      <h3 className="mt-5 font-serif text-xl">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-black/50">
        {text}
      </p>
    </div>
  );
}