import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { submitContact } from '../lib/submitContact'
import { Button } from './Button'

const fieldClass =
  'w-full rounded-2xl border border-border bg-bg/60 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-accent'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    setStatus('sending')
    setMessage('')

    try {
      const result = await submitContact({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        subject: String(data.get('subject') ?? ''),
        message: String(data.get('message') ?? ''),
      })
      setStatus(result.ok ? 'success' : 'error')
      setMessage(result.message)
      if (result.ok) form.reset()
    } catch {
      setStatus('error')
      setMessage('Something went wrong while sending the message.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-3xl border border-border bg-elevated/80 p-5 sm:p-6" noValidate={false}>
      <div>
        <p className="text-lg font-semibold text-fg">Send a message</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">Tell me a little about your idea and I&apos;ll get back to you soon.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input className={`${fieldClass} mt-2`} name="name" type="text" autoComplete="name" required />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input className={`${fieldClass} mt-2`} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Subject
        <input className={`${fieldClass} mt-2`} name="subject" type="text" autoComplete="off" placeholder="What would you like to build?" required />
      </label>
      <label className="block text-sm font-medium">
        Message
        <textarea className={`${fieldClass} mt-2 min-h-36 resize-y`} name="message" placeholder="Share your project goals, timeline, or questions..." required />
      </label>
      <Button type="submit" disabled={status === 'sending'}>
        <Send size={16} aria-hidden />
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </Button>
      {message ? (
        <p className={status === 'error' ? 'text-sm text-red-500' : 'text-sm text-accent'} role="status">
          {message}
        </p>
      ) : (
        <p className="text-xs text-muted">
          Form delivery uses <code>VITE_FORMSPREE_ENDPOINT</code> when set, otherwise a mailto fallback.
        </p>
      )}
    </form>
  )
}
