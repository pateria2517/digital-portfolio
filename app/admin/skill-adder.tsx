'use client'

import { useState } from 'react'

export function SkillAdder({ label, values, onChange }: { label: string; values: string[]; onChange: (values: string[]) => void }) {
  const [value, setValue] = useState('')
  function add() { const next = value.trim(); if (!next || values.includes(next)) return; onChange([...values, next]); setValue('') }
  return <div><label className="block text-xs text-black/60">{label}<div className="mt-2 flex gap-2"><input value={value} onChange={(event) => setValue(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) { event.preventDefault(); add() } }} className="min-w-0 flex-1 rounded-lg border border-black/15 px-3 py-2" placeholder="Add a custom skill" /><button type="button" onClick={add} className="rounded-lg border border-black/15 px-3 text-sm">Add</button></div></label><div className="mt-2 flex flex-wrap gap-1.5">{values.map((skill) => <button type="button" key={skill} onClick={() => onChange(values.filter((item) => item !== skill))} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs" aria-label={`Remove ${skill}`}>{skill} ×</button>)}</div></div>
}
