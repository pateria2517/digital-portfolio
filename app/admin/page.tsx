import dynamic from "next/dynamic"

const AdminClient = dynamic(() => import("./admin-client"), { ssr: false })

export default function Page() {
  return <AdminClient />
}
