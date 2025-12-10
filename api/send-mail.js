import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { SMTP_HOST, SMTP_PORT = 465, SMTP_SECURE = 'true', SMTP_USER, SMTP_PASS, MAIL_TO = 'mold.web@mail.ru' } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ ok: false, error: 'SMTP not configured' })
  }

  const rawBody = req.body || {}
  const body = typeof rawBody === 'string' ? safeParse(rawBody) : rawBody
  const { lead_type, subject, name, contact, email, company, lang, submitted_at } = body || {}

  if (!lead_type || !subject || !name || !contact || !email) {
    return res.status(400).json({ ok: false, error: 'Missing fields' })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: String(SMTP_SECURE) === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; background:#0b0b0b; color:#f8fafc; padding:24px;">
      <h2 style="margin:0 0 12px; font-size:20px;">${subject}</h2>
      <p style="margin:0 0 4px; color:#a3e635;">${lead_type}</p>
      <div style="margin-top:12px; padding:16px; border:1px solid #1f2937; border-radius:12px; background:#0f172a;">
        <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
        <p><strong>Контакт:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Компания:</strong> ${escapeHtml(company || 'N/A')}</p>
        <p><strong>Язык интерфейса:</strong> ${escapeHtml(lang || 'n/a')}</p>
        <p><strong>Время:</strong> ${escapeHtml(submitted_at || new Date().toISOString())}</p>
      </div>
      <p style="margin-top:16px; color:#94a3b8; font-size:12px;">NOT.PDF — веб-резюме и вакансии.</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"NOT.PDF" <${SMTP_USER}>`,
      to: MAIL_TO,
      subject,
      html,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[mail] send error', err)
    return res.status(500).json({ ok: false, error: 'Send failed' })
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str)
  } catch {
    return {}
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

