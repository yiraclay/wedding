"use client";

import { useState } from "react";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.attendance || !form.message) {
      setStatus("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    /*
      Di sini nantinya data dikirim ke database.

      Contoh:

      await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    */

    setStatus("Terima kasih! Konfirmasi kamu berhasil dikirim.");

    setForm({
      name: "",
      attendance: "",
      message: "",
    });
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">
          RSVP
        </p>

        <h2 className="mt-3 font-serif text-4xl">
          Will You Join Us?
        </h2>

        <p className="mt-4 text-sm leading-6 text-black/50">
          Kehadiran dan doa baik dari Anda akan menjadi bagian
          indah dari hari istimewa kami.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 text-left"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama lengkap"
            className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-black"
          />

          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none"
          >
            <option value="">Konfirmasi kehadiran</option>
            <option value="Hadir">Saya akan hadir</option>
            <option value="Tidak Hadir">
              Maaf, saya tidak dapat hadir
            </option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tulis ucapan untuk kedua mempelai..."
            rows={5}
            className="w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-black"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#292722] py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Kirim RSVP
          </button>

          {status && (
            <p className="text-center text-sm text-black/60">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}