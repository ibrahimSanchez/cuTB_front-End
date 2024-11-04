import { CurseGrid } from "@/components";



export default function Curses() {
  return (
    <>
      <h1 className="title mb-2">Cursos</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-5"></div>

      <CurseGrid />

    </>
  )
}
