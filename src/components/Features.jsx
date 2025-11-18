import { Brain, Mic, Sparkles, Workflow } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Reason across tasks',
    desc: 'Plan, analyze and outline complex requests with structured thinking.'
  },
  {
    icon: Sparkles,
    title: 'Create & summarize',
    desc: 'Draft emails, generate briefs, and condense long articles into key points.'
  },
  {
    icon: Workflow,
    title: 'Organize your work',
    desc: 'Turn notes into to‑dos, prioritize and track progress in one place.'
  },
  {
    icon: Mic,
    title: 'Voice-first ready',
    desc: 'Natural voice interactions with ambient, futuristic feedback.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What Vionix can do</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Streamline your day with a unified AI companion that thinks and creates with you.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 hover:bg-white/[0.07] transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
