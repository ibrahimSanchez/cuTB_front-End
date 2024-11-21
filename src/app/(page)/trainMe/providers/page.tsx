import { ProviderGrid, SectionHome } from "@/components";



export default function Curses() {
  return (
    <>
      <SectionHome
        title="Proveedores"
        text="En esta sección encontrarás los principales proveedores de exámenes y cursos acreditados 
        por el CuTB. Estos proveedores están comprometidos con la calidad y la excelencia en la 
        formación y certificación en pruebas de software, ofreciendo recursos que garantizan el 
        desarrollo profesional y el cumplimiento de estándares internacionales como los del ISTQB®"
        image="/system/proveedor.png"
        />

      <ProviderGrid />


    </>
  )
}
