'use server'

import { sendEmail } from '@/lib/email'

export async function submitContactMessage(formData: FormData) {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const subjectInput = String(formData.get('subject') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (!name || !email || !message) {
    return { success: false, message: 'Please complete all required fields.' }
  }

  const subject = subjectInput ? `Contact Form: ${subjectInput}` : 'New Contact Form Submission'
  const text = `New contact message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subjectInput || 'N/A'}\n\nMessage:\n${message}`
  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subjectInput || 'N/A'}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `

  const result = await sendEmail({ subject, text, html, replyTo: email })
  if (!result.ok) {
    return { success: false, message: 'We could not send your message right now. Please try again later.' }
  }

  return { success: true, message: 'Thanks! Your message has been sent.' }
}


