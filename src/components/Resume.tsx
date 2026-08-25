import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1] as const

const EXPERIENCE = [
  {
    role: "Co-Founder / Executive Producer",
    org: "SEWNA Media",
    orgHref: "https://sewna.com",
    period: "2018 – Present",
    points: [
      "Executive produce media and educational projects — interviews, events, and presentations turned into finished, audience-ready packages.",
      "Creative direction and finishing workflows in Premiere Pro and Final Cut Pro across concurrent productions.",
    ],
  },
  {
    role: "Executive Producer / Senior Producer",
    org: "USAGM / Voice of America",
    period: "2014 – 2025",
    points: [
      "Produced news, live broadcast, documentary, and social for a national network — including major international events (FIFA World Cup 2022, Olympics, AFCON).",
      "Turned conference recordings, webinars, and interview source into finished, platform-ready packages; supported live and near-live sessions with real-time troubleshooting.",
      "Hands-on finishing in Premiere Pro and Final Cut Pro; field production covering camera, lighting, and audio on domestic and international shoots.",
      "Used AI-assisted workflows (transcripts, research, packaging) to improve turnaround without sacrificing editorial quality.",
    ],
  },
  {
    role: "Founder & Managing Partner",
    org: "WAX MAPR Agency",
    period: "2019 – Present",
    points: [
      "Managed concurrent client engagements across automotive, franchise, real estate, and construction — schedules, budgets, and executive-facing delivery.",
      "Delivered SEO, paid social, brand identity, and creative production (Photoshop, Illustrator, Premiere Pro) for dealership groups and beyond.",
    ],
  },
  {
    role: "Founder & Technical Lead",
    org: "MockMapr, Inc.",
    orgHref: "https://mockmapr.com",
    period: "2022 – Present",
    points: [
      "Full-stack AI SaaS serving paying customers across three countries — Python/FastAPI, React/TypeScript, OpenAI & Claude.",
      "Proprietary editable-SVG export pipeline with no direct competitor equivalent.",
    ],
  },
  {
    role: "Founder & AI Systems Engineer",
    org: "DecodeBars",
    orgHref: "https://decodebars.com",
    period: "2022 – Present",
    points: [
      "Multi-agent system orchestrating five AI providers with evaluation chains and automated regression testing — two years of reliable operation.",
    ],
  },
  {
    role: "Founder & Full-Stack Engineer",
    org: "Quotbly · Sounding · JobHulk",
    period: "2022 – Present",
    points: [
      "CRM, real-time creator platform, and job marketplace — each shipped solo across the full stack.",
    ],
  },
]

const CERTS = [
  "Databricks Fundamentals Accreditation",
  "AI-Ready Architectures with Lakebase — Databricks",
  "AI Gateway & Guardrails: Securing GenAI for Production — Databricks",
  "Claude 101 & Claude Code 101 — Anthropic",
  "AI Fluency: Frameworks & Foundations — Anthropic",
  "Prompt Engineering — Vanderbilt University",
]

export function Resume() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Resume
            </span>
          </div>
          <h2 className="mb-3 text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Path & <span className="font-display italic">credentials</span>
          </h2>
          <p className="max-w-2xl text-sm text-muted md:text-base">
            Eleven years of broadcast and media production leadership, six years
            founding technology ventures, two U.S. patents, and
            Databricks-accredited GenAI architecture.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <article
                key={job.org + job.role}
                className="border-l border-stroke pl-5 md:pl-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {job.period}
                </p>
                <h3 className="mt-2 text-lg text-text-primary md:text-xl">
                  {job.role}
                </h3>
                <p className="font-display italic text-muted">
                  {"orgHref" in job && job.orgHref ? (
                    <a
                      href={job.orgHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-text-primary"
                    >
                      {job.org}
                    </a>
                  ) : (
                    job.org
                  )}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-stroke bg-surface p-6 md:p-8">
              <h3 className="mb-4 font-display text-2xl italic text-text-primary">
                Certifications
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                {CERTS.map((cert) => (
                  <li key={cert} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#89AACC]" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-stroke bg-surface p-6 md:p-8">
              <h3 className="mb-4 font-display text-2xl italic text-text-primary">
                Patents
              </h3>
              <ul className="space-y-4 text-sm text-muted">
                <li>
                  <span className="text-text-primary">D1051685</span> —
                  Combination Goalkeeper Game Piece and Bottle Opener (Issued
                  Nov. 2024)
                </li>
                <li>
                  <span className="text-text-primary">US20230191238A1</span> —
                  Table-Top Soccer Board Game and Method of Gameplay (Published
                  Jun. 2023)
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-stroke bg-surface p-6 md:p-8">
              <h3 className="mb-4 font-display text-2xl italic text-text-primary">
                Skills
              </h3>
              <p className="mb-3 text-sm text-muted">
                <span className="text-text-primary">Production:</span> Premiere
                Pro, Final Cut Pro, After Effects, live/webinar support, field
                production
              </p>
              <p className="mb-3 text-sm text-muted">
                <span className="text-text-primary">Engineering:</span> Python,
                FastAPI, Node.js, React, TypeScript, REST, PostgreSQL
              </p>
              <p className="mb-3 text-sm text-muted">
                <span className="text-text-primary">AI:</span> Databricks,
                Claude, OpenAI, multi-agent systems, RAG, Cursor — used to speed
                production without cutting quality
              </p>
              <p className="text-sm text-muted">
                <span className="text-text-primary">Creative:</span> Photoshop,
                Illustrator, Figma, brand & motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
