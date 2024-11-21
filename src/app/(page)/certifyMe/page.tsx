import { SectionHome } from "@/components";
import Image from "next/image";
import Link from "next/link";


export default function CertifyMe() {
  return (
    <>
      <SectionHome
        className="shadow-2xl"
        title="Certificarme"
        text="Explora los exámenes de certificación disponibles para validar tus conocimientos y 
        habilidades en pruebas de software, con el respaldo de organismos reconocidos."
        image="/system/Course.png"
      />


      <section className="py-10 lg:flex bg-background shadow-2xl px-4">

        <div className="lg:w-[30%] flex flex-col items-center">
          <Image
            className="mb-8"
            width={300}
            height={400}
            alt="ISQUI"
            src='/images/ISQUI.jpg'
          />

          <button className="btn-primary mb-6">
            <Link
              href="http://www.google.com/url?q=http%3A%2F%2Fwww.isqi.org&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1WORSc9jpbtheVg_42Ay_m"
            >
              Descargar materiales
            </Link>
          </button>
        </div>


        <div className="lg:w-[60%] lg:ml-6">
          <h4 className="text-3xl font-bold text-blue-950 mb-6">Exámenes de certificación</h4>

          <p className="leading-7 mb-4">
            Para ejecutar los exámenes, el CuTB puede contar con convenio con Proveedores de Exámenes Acreditados por ISTQB®.
          </p>

          <p className="leading-7 mb-4">
            Con ellos podrás validar las tarifas vigentes, medios para tomar el examen, formas de pago disponibles, y en general todo
            lo relacionado con la presentación del examen de certificación.
          </p>

          <p className="leading-7 mb-4">
            Los programas de estudios, los modelos de examen y las normas de examen también pueden descargarse del sitio web de iSQI.
          </p>

          <p className="leading-7 mb-4">
            Los candidatos aprobados pueden optar por inscribirse en el Registro de Candidatos Aprobados ISTQB a través de nuestro
            proveedor de exámenes iSQI (incluido en su correo electrónico de resultados).
          </p>
        </div>

      </section>



      <section className="mb-20 py-16 px-6 rounded-lg">

        <h4 className="text-3xl font-bold text-blue-950 mb-6 text-center"> Esquema de Certificacioness</h4>

        <p className="leading-7 text-center">
          Este esquema de certificaciones es referencia en la industria para la profesión de pruebas de Software
        </p>

        <div className="flex justify-center mt-8">
          <Image
            className="mb-8 rounded-2xl"
            width={1300}
            height={400}
            alt="ISQUI"
            src='/images/scheme.png'
          />
        </div>
      </section>

    </>
  )
}
