export type PortfolioEntry = {
  id: string
  section: string
  title: string
  body: string
  image_url: string | null
  link_url: string | null
  sort_order: number
  metadata: { skillsHave?: string[]; skillsDeveloping?: string[]; items?: string[] }
}

export async function getPortfolioEntries(section: string): Promise<PortfolioEntry[]> {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/portfolio_content`)
    url.searchParams.set("select", "id,section,title,body,image_url,link_url,sort_order,metadata")
    url.searchParams.set("section", `eq.${section}`)
    url.searchParams.set("order", "sort_order.asc")
    const response = await fetch(url, { headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "" }, cache: "no-store" })
    if (!response.ok) return []
    return (await response.json()) as PortfolioEntry[]
  } catch {
    return []
  }
}
