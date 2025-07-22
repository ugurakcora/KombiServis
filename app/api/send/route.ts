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
      from: "Mert Teknik <noreply@resend.dev>", // Resend'in varsayılan gönderici adresi
      to: ["ordumertteknik@gmail.com"], // Güncellenmiş alıcı e-posta adresi
      subject: `İletişim Formu: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>İletişim Formu</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🔧 Mert Teknik</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Yeni İletişim Formu Mesajı</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #2563eb; margin: 0 0 10px 0; font-size: 20px;">📋 ${subject}</h2>
              </div>
              
              <!-- Customer Info -->
              <div style="margin-bottom: 30px;">
                <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">👤 Müşteri Bilgileri</h3>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 120px;">Ad Soyad:</td>
                    <td style="padding: 12px 15px; background-color: #ffffff; border: 1px solid #e5e7eb; color: #6b7280;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">E-posta:</td>
                    <td style="padding: 12px 15px; background-color: #ffffff; border: 1px solid #e5e7eb; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Telefon:</td>
                    <td style="padding: 12px 15px; background-color: #ffffff; border: 1px solid #e5e7eb; color: #059669;"><a href="tel:${phone}" style="color: #059669; text-decoration: none;">${phone}</a></td>
                  </tr>
                </table>
              </div>
              
              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">💬 Mesaj</h3>
                <div style="background-color: #f8fafc; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                  <p style="margin: 0; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 0 10px; font-weight: bold;">📧 Yanıtla</a>
                <a href="tel:${phone}" style="display: inline-block; background: #059669; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 0 10px; font-weight: bold;">📞 Ara</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Bu mesaj <strong>Mert Teknik</strong> web sitesinden gönderilmiştir.<br>
                <span style="color: #9ca3af;">Gönderim Zamanı: ${new Date().toLocaleString("tr-TR")}</span>
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
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
