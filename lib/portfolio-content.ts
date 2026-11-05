import { createClient } from "@/lib/supabase/server"

export type PortfolioEntry = {
  id: string
  section: string
  title: string
  body: string
  image_url: string | null
  link_url: string | null
  sort_order: number
  metadata: { skillsHave?: string[]; skillsDeveloping?: string[] }
}

export async function getPortfolioEntries(section: string): Promise<PortfolioEntry[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("portfolio_content")
      .select("id, section, title, body, image_url, link_url, sort_order, metadata")
      .eq("section", section)
      .order("sort_order")
    if (error) return []
    return (data ?? []) as PortfolioEntry[]
  } catch {
    return []
  }
}
