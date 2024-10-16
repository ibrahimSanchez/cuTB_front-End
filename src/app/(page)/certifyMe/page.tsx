import Image from "next/image";
import Link from "next/link";


export default function CertifyMe() {
  return (
    <>

      <h1 className="title mb-2">Certificarme</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-4"></div>




      <section className="mt-8 lg:flex">

        <div className="lg:w-[30%] flex flex-col items-center">
          <Image
            className="mb-8"
            width={300}
            height={400}
            alt="ISQUI"
            src='/images/ISQUI.jpg'
          />

          <button className="btn-primary">
            <Link
              href="http://www.google.com/url?q=http%3A%2F%2Fwww.isqi.org&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1WORSc9jpbtheVg_42Ay_m"
            >
              Descargar materiales
            </Link>
          </button>
        </div>


        <div className="lg:w-[60%] lg:ml-6">

          <h4 className="text-3xl mt-16 mb-6">
            EXÁMENES DE CERTIFICACIÓN
          </h4>

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



      <section>
        <h4 className="subTitle mt-16 mb-6">
          Esquema de Certificaciones
        </h4>

        <p className="leading-7">
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
