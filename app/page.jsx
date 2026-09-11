import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#292722]">
      <Hero />

      <section className="mx-auto max-w-5xl px-5 py-20">
        <Countdown />

        <EventDetails />

        <RSVP />

        <Wishlist />
      </section>

      <footer className="border-t border-black/10 py-10 text-center">
        <p className="font-serif text-xl">A & R</p>

        <p className="mt-2 text-sm text-black/50">
          With love, forever and always.
        </p>
      </footer>
    </main>
  );
}