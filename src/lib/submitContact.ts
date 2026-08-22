import { portfolio } from '../data/portfolio'
import { isPlaceholder } from './utils'

export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

export type SubmitResult = {
  ok: boolean
  message: string
}

/**
 * Isolated contact submission.
 * Connect later via VITE_FORMSPREE_ENDPOINT, EmailJS, Resend, or a custom backend.
 */
export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return {
        ok: false,
        message: 'The message could not be sent. Please try again or use email instead.',
      }
    }

    return { ok: true, message: 'Message sent. Thank you for reaching out.' }
  }

  const email = portfolio.contact.email
  if (!isPlaceholder(email)) {
    const body = `${payload.message}\n\n— ${payload.name} (${payload.email})`
    const mailto = `mailto:${email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    return { ok: true, message: 'Opening your email client to send the message.' }
  }

  return {
    ok: false,
    message:
      'Contact delivery is not configured yet. Set VITE_FORMSPREE_ENDPOINT or replace YOUR_EMAIL in src/data/portfolio.ts.',
  }
}
