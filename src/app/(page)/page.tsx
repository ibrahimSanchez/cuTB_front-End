import { HomeCard } from "@/components";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center p-6 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/bg/background.jpg')" }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 title">
            Bienvenido a CuTB
          </h1>
          <p className="text-xl sm:text-xl mb-8">
            Miembro oficial en Cuba del <span className="font-bold">ISTQB®</span>, conectando estándares globales con la comunidad cubana de pruebas de software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trainMe/curses">
              <Button className="btn-primary">Nuestras certificaciones</Button>
            </Link>
            <Link href="/workWithUs">
              <Button className="btn-secondary">Trabaja con nosotros</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-12 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          ¿Por qué elegir CuTB?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HomeCard
            srcImage="/images/logo_istqb.jpg"
            title="Certificaciones Internacionales"
            text="Ofrecemos acceso a certificaciones reconocidas globalmente, respaldadas por el prestigioso ISTQB®."
          />
          <HomeCard
            srcImage="/images/logo_istqb.jpg"
            title="Comunidad Activa"
            text="Colabora con una red de testers apasionados y accede a recursos exclusivos."
          />
          <HomeCard
            srcImage="/images/logo_istqb.jpg"
            title="Estándares de Calidad"
            text="Promovemos las mejores prácticas en pruebas de software con materiales y formación de calidad."
          />
        </div>
      </section>

      {/* New Section: Our Values */}
      <section className="bg-gray-100 py-16 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Nuestros Valores
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Value 1 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <Image
            width={100}
            height={100}
              src="/images/logo_istqb.jpg"
              alt="Innovación"
              className="w-20 h-20 mb-6"
            />
            <h3 className="text-2xl font-bold text-secondary mb-4">Innovación</h3>
            <p className="text-lg text-gray-700">
              Adoptamos tecnologías y prácticas innovadoras para garantizar resultados
              de calidad en pruebas de software, manteniéndonos siempre a la vanguardia.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <Image
            width={200}
            height={100}
              src="/images/logo_istqb.jpg"
              alt="Colaboración"
              className="w-20 h-20 mb-6"
            />
            <h3 className="text-2xl font-bold text-secondary mb-4">Colaboración</h3>
            <p className="text-lg text-gray-700">
              Creemos en el poder del trabajo en equipo, fomentando el aprendizaje y
              la cooperación dentro de la comunidad de testers.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <Image
            width={100}
            height={100}
              src="/images/logo_istqb.jpg"
              alt="Excelencia"
              className="w-20 h-20 mb-6"
            />
            <h3 className="text-2xl font-bold text-secondary mb-4">Excelencia</h3>
            <p className="text-lg text-gray-700">
              Nos comprometemos a ofrecer resultados excepcionales en cada proyecto,
              impulsando estándares de calidad en la industria de software.
            </p>
          </div>
        </div>
      </section>


      {/* New Section: Testimonials */}
      <section className="bg-white py-12 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center animateMove">
            <p className="text-lg text-gray-700 italic mb-4">
              Gracias a CuTB, obtuve mi certificación ISTQB y avancé en mi carrera profesional.
            </p>
            <h3 className="text-xl font-bold text-secondary">María Rodríguez</h3>
            <p className="text-sm text-gray-500">Ingeniera de Software</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center animateMove">
            <p className="text-lg text-gray-700 italic mb-4">
              La comunidad es increíblemente activa y los recursos son de gran calidad.
            </p>
            <h3 className="text-xl font-bold text-secondary">Carlos Pérez</h3>
            <p className="text-sm text-gray-500">Tester Freelance</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center animateMove">
            <p className="text-lg text-gray-700 italic mb-4">
              Recomendaría CuTB a cualquier profesional que desee certificarse y crecer.
            </p>
            <h3 className="text-xl font-bold text-secondary">Ana García</h3>
            <p className="text-sm text-gray-500">QA Manager</p>
          </div>
        </div>
      </section>
    </>
  );
}
