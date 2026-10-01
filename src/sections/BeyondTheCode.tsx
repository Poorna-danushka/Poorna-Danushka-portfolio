import { Cpu, Eye, Layers, ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { portfolioImages } from '../config/images'

export function BeyondTheCode() {
  return (
    <section id="beyond-code" className="py-20 sm:py-28 bg-surface/40 border-y border-border/60">
      <Container>
        <SectionHeading
          eyebrow="Beyond Traditional Web Applications"
          title="Physical Computing & Systems Engineering"
          description="Building complex software solutions that cross into hardware actuation, computer vision pipelines, and embedded real-time processing."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* SECOND IMAGE CONTAINER */}
          <div className="lg:col-span-6 relative group">
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-accent/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity"
              aria-hidden
            />
            <div className="hero-image-container relative overflow-hidden rounded-[2rem] border border-border bg-surface">
              <img
                src={portfolioImages.secondary}
                alt={portfolioImages.secondaryAlt}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="rounded-xl border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  Hardware-Software Integration
                </span>
                <span className="rounded-full bg-sky-500/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                  Embedded Systems
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
              Bridging High-Level Software Architecture with Physical AI Realities
            </h3>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              My engineering journey extends beyond client-server web platforms. Through hardware projects like the Autonomous Chess-Playing Robot, I have mastered closed-loop systems combining computer vision, board calibration, chess engine math, and 5-DOF robotic actuation.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                  <Eye size={18} />
                  <span>Computer Vision</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Overhead Raspberry Pi OpenCV camera pipelines, grid calibration, and perspective transformation.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                  <Cpu size={18} />
                  <span>Embedded Robotics</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Arduino, PCA9685 PWM driver, custom PCB power routing, and 5-DOF servo kinematics.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                  <Layers size={18} />
                  <span>System Architecture</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Strict client-server boundaries, relational database schemas, and microservice modularity.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                  <ShieldCheck size={18} />
                  <span>Hardened Security</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  HttpOnly JWT cookies, RBAC route guards, Bcrypt encryption, and double-submit CSRF defense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
