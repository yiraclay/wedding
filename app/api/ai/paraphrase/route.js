import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = await request.json();

    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json(
        {
          error: "Ucapan tidak boleh kosong.",
        },
        {
          status: 400,
        }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5-mini",
      instructions: `
        Kamu adalah editor ucapan pernikahan.

        Tugas:
        - Pertahankan makna asli ucapan.
        - Buat bahasa lebih hangat.
        - Buat terdengar tulus dan puitis.
        - Jangan terlalu panjang.
        - Jangan mengubah nama orang.
        - Gunakan bahasa Indonesia yang natural.
        - Jangan menambahkan informasi yang tidak ada.
        - Hasil maksimal 2-3 kalimat.
      `,
      input: message,
    });

    return NextResponse.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Terjadi kesalahan pada layanan AI.",
      },
      {
        status: 500,
      }
    );
  }
}