import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend API anahtarınızı çevre değişkeninden alıyoruz
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Boş veya eksik form alanları kontrolü
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Tüm alanları doldurun" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Mert Teknik <onay@kombiservisiordu.com>", // Doğrulanmış domain kullanılmalı
      to: ["info@kombiservisiordu.com"], // Alıcı e-posta adresi
      subject: `İletişim Formu: ${subject}`,
      replyTo: email,
      text: `
        Ad Soyad: ${name}
        E-posta: ${email}
        Telefon: ${phone}
        Konu: ${subject}
        Mesaj: ${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "E-posta gönderiminde hata oluştu" },
      { status: 500 }
    );
  }
}
