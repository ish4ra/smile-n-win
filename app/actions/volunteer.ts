'use server'

import { sendEmail } from '@/lib/email'

export async function submitVolunteerApplication(_prevState: unknown, formData: FormData) {
  const fullName = String(formData.get('full-name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const availability = String(formData.get('availability') || '').trim()
  const skills = String(formData.get('skills') || '').trim()
  const interests = (formData.getAll('interests') || []).map(String)

  if (!fullName || !email || !phone) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    }
  }

  const subject = `New Volunteer Application — ${fullName}`
  const text = `New volunteer application received\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAvailability: ${availability}\nInterests: ${interests.join(', ')}\n\nSkills/Experience:\n${skills || 'N/A'}`
  const html = `
    <h2>New Volunteer Application</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Availability:</strong> ${availability || 'N/A'}</p>
    <p><strong>Interests:</strong> ${interests.length ? interests.join(', ') : 'N/A'}</p>
    <p><strong>Skills/Experience:</strong><br/>${(skills || 'N/A').replace(/\n/g, '<br/>')}</p>
  `

  const result = await sendEmail({ subject, text, html, replyTo: email })

  if (!result.ok) {
    return {
      success: false,
      message: 'We could not send your application at this time. Please try again later.',
    }
  }

  return {
    success: true,
    message: 'Thank you for your interest in volunteering! We have received your application and will contact you within 2-3 business days.',
  }
}
