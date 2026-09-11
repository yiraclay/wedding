"use client";

import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

export default function Wishlist() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [wishes, setWishes] = useState([
    {
      name: "Alya",
      message:
        "Selamat menempuh perjalanan baru bersama. Semoga cinta kalian selalu tumbuh.",
    },
    {
      name: "Dimas",
      message:
        "Semoga hari-hari kalian dipenuhi kebahagiaan, kedamaian, dan cerita indah.",
    },
  ]);

  async function beautifyMessage() {
    if (!message.trim()) {
      alert("Tulis ucapan terlebih dahulu.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/ai/paraphrase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setMessage(data.result);
    } catch (error) {
      alert("Gagal memperindah ucapan.");
    } finally {
      setLoading(false);
    }
  }

  function submitWish(e) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Nama dan ucapan wajib diisi.");
      return;
    }

    setWishes([
      {
        name,
        message,
      },
      ...wishes,
    ]);

    setName("");
    setMessage("");
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Wishes
          </p>

          <h2 className="mt-3 font-serif text-4xl">
            Love & Wishes
          </h2>

          <p className="mt-4 text-sm text-black/50">
            Tinggalkan doa dan ucapan terbaik untuk kami.
          </p>
        </div>

        <form
          onSubmit={submitWish}
          className="mx-auto mt-10 max-w-xl rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu"
            className="mb-4 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-black"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ucapan..."
            rows={5}
            className="w-full resize-none rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-black"
          />

          <button
            type="button"
            onClick={beautifyMessage}
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#f8f6f1] py-3 text-sm transition hover:bg-[#eeeae0] disabled:opacity-50"
          >
            <Sparkles size={17} />

            {loading
              ? "AI sedang memperindah..."
              : "Perindah dengan AI"}
          </button>

          <button
            type="submit"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#292722] py-4 text-sm text-white transition hover:shadow-lg"
          >
            <Send size={17} />
            Kirim Ucapan
          </button>
        </form>

        <div className="mt-12 space-y-4">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1eee7] font-serif">
                  {wish.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-medium">
                    {wish.name}
                  </p>

                  <p className="text-xs text-black/40">
                    With love
                  </p>
                </div>
              </div>

              <p className="mt-4 font-serif text-lg leading-8 text-black/70">
                “{wish.message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}