import Hero from './components/Hero'
import Features from './components/Features'
import Chat from './components/Chat'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-amber-400" />
      </div>

      {/* Page sections */}
      <Hero />
      <Features />
      <Chat />
      <Footer />
    </div>
  )
}

export default App
