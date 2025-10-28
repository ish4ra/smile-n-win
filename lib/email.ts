import nodemailer from 'nodemailer'

type SendEmailOptions = {
  subject: string
  text?: string
  html?: string
  to?: string
  replyTo?: string
}

/**
 * Sends an email using SMTP credentials configured via environment variables.
 * Falls back to logging when SMTP is not configured (useful for local dev).
 */
export async function sendEmail(options: SendEmailOptions): Promise<{ ok: true } | { ok: false; error: string }> {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    MAIL_FROM,
    MAIL_TO,
  } = process.env

  const defaultTo = options.to || MAIL_TO || 'contact@smilenwin.lk'
  const fromAddress = MAIL_FROM || 'Smile n Win <no-reply@smilenwin.lk>'

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn('[email] SMTP not configured. Logging email instead.')
    console.info('[email] To:', defaultTo)
    console.info('[email] Subject:', options.subject)
    if (options.replyTo) console.info('[email] Reply-To:', options.replyTo)
    if (options.text) console.info('[email] Text:', options.text)
    if (options.html) console.info('[email] HTML:', options.html)
    return { ok: true }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: String(SMTP_SECURE || '').toLowerCase() === 'true' || Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: fromAddress,
      to: defaultTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
      replyTo: options.replyTo,
    })

    return { ok: true }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown email error'
    console.error('[email] Failed to send email:', message)
    return { ok: false, error: message }
  }
}


