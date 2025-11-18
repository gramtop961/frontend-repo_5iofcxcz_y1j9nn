import { useEffect, useRef, useState } from 'react'

function Chat() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [sessionId, setSessionId] = useState(null)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const listRef = useRef(null)

  useEffect(() => {
    // Auto scroll when messages change
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const send = async () => {
    if (!input.trim()) return
    setLoading(true)

    const userMsg = { role: 'user', content: input }
    setMessages((m) => [...m, userMsg])

    try {
      const res = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: input })
      })
      const data = await res.json()
      setSessionId(data.session_id)
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
      setInput('')
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <section id="chat" className="relative py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div ref={listRef} className="h-[420px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-slate-300">Say hello to start a conversation with Vionix.</div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow ${m.role === 'user' ? 'bg-fuchsia-500 text-white' : 'bg-white/10 text-slate-100'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 p-4 flex items-center gap-3">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask Vionix anything…"
              className="flex-1 resize-none bg-white/10 text-white placeholder:text-slate-300/70 rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-fuchsia-400/60"
            />
            <button onClick={send} disabled={loading} className="px-4 py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold disabled:opacity-60">
              {loading ? 'Sending…' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chat
