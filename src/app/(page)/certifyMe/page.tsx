'use client';

import { getProviders } from "@/api";
import { ProviderCardUI, SectionHome } from "@/components";
import { Provider } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function CertifyMe() {


  const [providers, setProviders] = useState<Provider[]>([]);

  const loadProviders = async () => {
    try {
      const res = await getProviders();
      setProviders(res.data.providers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProviders();
  }, []);


  const examProviders = providers.filter(({ type }) => type === "exam_provider");

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




      {/* Sección de Proveedores de Exámenes */}
      <section className="my-12 px-6">
        <h4 className="text-3xl font-bold text-center text-blue-950 mb-2">
          Proveedores de exámenes:
        </h4>
        <div className="w-full h-1 bg-blue-950 mb-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
          {examProviders.length > 0 ? (
            examProviders.map((provider) => (
              <ProviderCardUI key={provider.uid} provider={provider} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-2">
              No hay proveedores de exámenes disponibles.
            </p>
          )}
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
