'use server'

import { sendEmail } from '@/lib/email'

export async function submitNewsletterSignup(formData: FormData) {
  const email = String(formData.get('email') || '').trim()
  if (!email) {
    return { success: false, message: 'Please provide your email.' }
  }

  const subject = 'New Newsletter Subscription'
  const text = `Please add this email to the newsletter list: ${email}`
  const html = `<p>Please add this email to the newsletter list: <strong>${email}</strong></p>`

  const result = await sendEmail({ subject, text, html, replyTo: email })
  if (!result.ok) {
    return { success: false, message: 'Subscription failed. Please try again later.' }
  }

  return { success: true, message: 'Thanks! You are subscribed.' }
}


