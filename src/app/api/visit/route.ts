import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const page = body.page || "/";
    const referrer = body.referrer || "Doğrudan (Direct)";
    const userAgent = request.headers.get("user-agent") || "Bilinmiyor";
    
    // IP adresini al
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : (request.headers.get("x-real-ip") || "Bilinmiyor");

    // Türkiye saati ile tarih
    const now = new Date();
    const formattedDate = now.toLocaleString("tr-TR", {
      timeZone: "Europe/Istanbul",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    const botToken = process.env.TELEGRAM_BOT_TOKEN || "8823019046:AAEWy3Ola5wQ_djbUWbOCNoEmLcRjwNCack";
    const chatId = process.env.TELEGRAM_CHAT_ID || "6481886508";

    const message = `🔔 <b>Yeni Ziyaretçi Bildirimi!</b>\n\n` +
      `📌 <b>Sayfa:</b> <code>${page}</code>\n` +
      `📅 <b>Tarih/Saat:</b> ${formattedDate}\n` +
      `🔗 <b>Geldiği Yer:</b> ${referrer}\n` +
      `🌐 <b>IP Adresi:</b> <code>${ip}</code>\n` +
      `💻 <b>Tarayıcı/Cihaz:</b> <code>${userAgent.substring(0, 100)}</code>`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
