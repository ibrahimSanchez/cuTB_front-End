import { CurseGrid, SectionHome } from "@/components";



export default function Curses() {
  return (
    <>
      <SectionHome
        title="Nuestros cursos"
        text="Descubre nuestros cursos, organizados por niveles, para mejorar tus habilidades en pruebas 
        de software, desde iniciación hasta especialización avanzada."
        image="/system/Course.png"
      />

      <CurseGrid />

    </>
  )
}
