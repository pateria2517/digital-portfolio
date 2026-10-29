'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault(); setLoading(true); setError('')
    const { error } = await createClient().auth.signInWithPassword({ email, password })
    if (error) setError('Invalid email or password.')
    else router.push('/admin')
    setLoading(false)
  }

  return <main className="min-h-screen bg-[#f4f1ea] px-6 py-16 text-black"><div className="mx-auto max-w-md rounded-2xl border border-black/10 bg-white p-8 shadow-sm"><p className="text-xs uppercase tracking-[0.2em] text-black/45">Portfolio CMS</p><h1 className="mt-3 font-serif text-4xl">Admin login</h1><p className="mt-3 text-sm text-black/55">Sign in to manage the portfolio content.</p><form onSubmit={submit} className="mt-8 space-y-4"><label className="block text-sm">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-black" /></label><label className="block text-sm">Password<input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-black" /></label>{error && <p role="alert" className="text-sm text-red-700">{error}</p>}<button disabled={loading} className="w-full rounded-full bg-black px-4 py-3 text-sm font-medium text-white disabled:opacity-50">{loading ? 'Signing in…' : 'Sign in'}</button></form></div></main>
}
