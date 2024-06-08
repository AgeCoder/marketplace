// import "../globals.css";
import SideMenu from "./_components/SideMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <SideMenu />
      {children}
    </section>
  )
}