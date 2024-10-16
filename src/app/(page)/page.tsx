import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="welcome-section min-h-screen mb-3">
        <div className="welcome-content">
          <h2 className="title mb-10">CuTB <br /> Junta Cubana de Pruebas de software</h2>

          <p className="xl:mt-10">
            El CUTB es el miembro oficial en Cuba del ISTQB® (International Software Testing Qualifications Board).
            <br /><br />
            El comité tiene la responsabilidad de mantener informada a la comunidad cubana que ejerce los roles relacionada con las pruebas de software.
          </p>

          <div className="welcome-buttons block md:flex md:justify-between xl:mt-14">
            <Link href="/certifications">
              <Button
                className="btn-primary my-2 sm:my-0">
                Nuestras certificaciones
              </Button>
            </Link>

            <Link href="/workWithUs">
              <Button className="btn-secondary my-2 sm:my-0">
                Trabaja con nosotros
              </Button>
            </Link>

          </div>
        </div>
      </section>

      <section className="px-[1rem]">
        <h2 className="title text-center">¿Qué es ISTQB?</h2>

        <div className="p-[1rem] lg:flex mt-10">

          <div className="lg:mr-14 mb-10 min-w-[200px] flex justify-center">
            <Image
              alt="istqb_logo"
              src={'/images/logo_istqb.jpg'}
              width={200}
              height={75}
            />
          </div>

          <p className="text_style">
            El International Software Testing Qualifications Board <Link href="www.istqb.org" className="text-blue-500 hover:text-blue-600">
              (www.istqb.org)
            </Link>, es una asociación sin ánimo de lucro
            (non-profit association) fundada en 2002, al igual que el CUTB, depende de voluntarios para mantener el sistema.
            Su sede se encuentra en Bélgica y cuenta con constitución, normas y reglamentos propios.
          </p>
        </div>

        <div>
          <p className="text_sryle mb-3">
            ISTQB® está compuesto por Testers <span className="font-bold">Expertos</span> a nivel internacional quienes trabajan de manera voluntaria.
          </p>

          <p className="text_sryle mb-3">
            Con <span className="font-bold">más de 400.000 personas certificadas en más de 100 países </span>, ISTQB® es la organización <span className="font-bold">más importante del mundo</span> en la
            certificación de <span className="font-bold">Software Testing</span>, lo cual ha logrado a través de su esquema de certificaciones <span className="font-bold">“ISTQB®  Certified Tester”</span>,
            convirtiéndose en una referencia  de-facto en prácticas recomendadas de Pruebas.
          </p>

          <p className="text_sryle mb-3">
            Para su operación en los diferentes países o regiones, ISTQB® cuenta con <span className="font-bold">50 comités miembros</span> que se encargan de manera “local”
            de todo lo relacionado con su prestigioso esquema de certificación. ISTQB® ha creado el esquema más exitoso del mundo para la
            certificación de probadores de software.
          </p>

          <p className="text_sryle mb-3">
            A partir de junio de 2023, ISTQB® ha administrado más de 1,3 millones de exámenes y <span className="font-bold">emitido más de 975k certificaciones en más
              de 130 países</span> de todo el mundo. El esquema se basa en un cuerpo de conocimientos (Syllabus y Glosario) y reglas de examen que
            se aplican de forma coherente en todo el mundo, con exámenes y material de apoyo disponible en muchos idiomas, incluido
            el español a través de la <span className="font-bold">CUTB</span>.
          </p>

        </div>
      </section>

    </>
  );
}
