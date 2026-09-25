import Image from "next/image"

type PixelBandProps = {
  src: string
  alt: string
  darkSrc?: string
  darkAlt?: string
  eyebrow?: string
  title?: string
}

export function PixelBand({ src, alt, darkSrc, darkAlt, eyebrow, title }: PixelBandProps) {
  return (
    <div className="py-8">
      <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={darkSrc ? "object-cover dark:hidden" : "object-cover"}
          sizes="(min-width: 768px) 78vw, 100vw"
        />
        {darkSrc ? (
          <Image
            src={darkSrc}
            alt={darkAlt ?? alt}
            fill
            className="hidden object-cover dark:block"
            sizes="(min-width: 768px) 78vw, 100vw"
          />
        ) : null}
        {title ? (
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl shadow-xl px-6 py-5 w-[min(520px,100%)] text-center">
              {eyebrow ? <p className="text-[11px] uppercase tracking-[0.25em] text-black/50">{eyebrow}</p> : null}
              <p className="mt-2 font-serif text-xl md:text-2xl font-medium tracking-tight text-black/85 text-balance leading-snug">
                {title}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
