'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminSignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const { data, error } = await createClient().auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`,
      },
    })
    if (error) setMessage(error.message.includes('password') ? error.message : 'Could not create the account.')
    else if (data.session) router.push('/admin')
    else setMessage('Account created. Check your email to confirm it, then sign in.')
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#f4f1ea] px-6 py-16 text-black">
      <div className="mx-auto max-w-md rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-black/45">Portfolio CMS</p>
        <h1 className="mt-3 font-serif text-4xl">Create account</h1>
        <p className="mt-3 text-sm text-black/55">Create your sign-in credentials. The account must be marked as an administrator before it can edit content.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block text-sm">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-black" /></label>
          <label className="block text-sm">Password<input required minLength={6} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-black/15 px-3 py-2.5 outline-none focus:border-black" /></label>
          {message && <p role="status" className="text-sm text-black/65">{message}</p>}
          <button disabled={loading} className="w-full rounded-full bg-black px-4 py-3 text-sm font-medium text-white disabled:opacity-50">{loading ? 'Creating account…' : 'Create account'}</button>
        </form>
        <Link href="/admin/login" className="mt-6 block text-center text-sm underline underline-offset-4">Back to login</Link>
      </div>
    </main>
  )
}
