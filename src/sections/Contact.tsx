import { useState } from 'react'
import { Copy, Check, Send, Sparkles } from 'lucide-react'
import { Container } from '../components/Container'
import { SocialLinks } from '../components/SocialLinks'
import { portfolio } from '../data/portfolio'
import { submitContact } from '../lib/submitContact'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: 'Portfolio Contact Form Message',
      message: formData.get('message') as string,
    }

    try {
      const result = await submitContact(data)
      if (result.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
        form.reset()
      } else {
        setStatus({ type: 'error', message: result.message || 'Unable to send message. Please use the email button below.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to send message directly. Please use the email button below.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-b from-surface via-surface/95 to-background p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none" aria-hidden>
            <Sparkles size={160} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: CTA Text & Direct Email Copy */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">LET'S BUILD SOMETHING</span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Have a project, internship, or problem to solve?
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                I am actively seeking full-stack product engineering opportunities, software engineering roles, and collaborative projects. Reach out via email or submit a message directly.
              </p>

              {/* Copy Email Box */}
              <div className="rounded-2xl border border-border bg-background/80 p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">Direct Email Contact</p>
                <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-surface px-3.5 py-2">
                  <span className="text-xs sm:text-sm font-semibold text-foreground truncate">{portfolio.contact.email}</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-fg shadow transition hover:scale-105"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && <p className="text-[11px] text-accent font-semibold">Email copied to clipboard!</p>}
              </div>

              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Send a Direct Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none resize-none"
                  />
                </div>

                {status && (
                  <div
                    className={`rounded-xl p-3 text-xs font-semibold ${
                      status.type === 'success'
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-fg shadow-md transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
