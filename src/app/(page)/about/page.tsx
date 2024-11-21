import { BulletList, ExecutiveMember, SectionHome } from "@/components";
import Image from "next/image";


export default function About() {
  return (
    <div className="mx-auto">
      {/* Primera sección: Portada */}

      <SectionHome
        title="¿Quiénes somos?"
        text="Somos el CuTB, una organización dedicada a elevar los estándares de pruebas de software en Cuba,
        promoviendo certificaciones internacionales y desarrollando competencias para la transformación digital."
        image="/system/About_us.png"
      />
     

      {/* Sección combinada: Misión, Visión y Objetivos */}
      <section className="bg-gray-100 py-16 px-6 shadow-lg mb-16">
        {/* <h4 className="text-3xl font-bold text-center text-blue-950 mb-12">¿Quiénes somos?</h4> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Misión */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-full mb-6">
              <Image
                src='/system/mision.png'
                alt="about image"
                width={100}
                height={100}
              />
            </div>
            <h5 className="text-xl font-bold text-blue-950 mb-4">Nuestra misión</h5>
            <p className="text-lg leading-7 text-gray-700">
              Elevar los estándares en las pruebas de software en Cuba y contribuir al éxito económico del país mediante el desarrollo de
              oportunidades de aprendizaje y habilidades.
            </p>
          </div>

          {/* Visión */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-full mb-6">
              <Image
                src='/system/vision.png'
                alt="about image"
                width={100}
                height={100}
              />
            </div>
            <h5 className="text-xl font-bold text-blue-950 mb-4">Visión</h5>
            <BulletList
              items={[
                "Avanzar la industria de pruebas de software en Cuba.",
                "Promover la prueba de software como una profesión en Cuba.",
                "Contribuir a los programas de transformación y aumentar la calidad de los productos.",
                "Servir de enlace con el gobierno para promover la profesión de pruebas de Software.",
              ]}
            />
          </div>

          {/* Objetivos */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-full mb-6">
              <Image
                src='/system/Objetivos.png'
                alt="about image"
                width={100}
                height={100}
              />
            </div>
            <h5 className="text-xl font-bold text-blue-950 mb-4">Objetivos</h5>
            <BulletList
              items={[
                "Promover ISTQB® como el estándar para la certificación de pruebas de software.",
                "Desarrollar habilidades de testing a través de la certificación ISTQB®.",
                "Fomentar la acreditación ISTQB® para apoyar la formación en pruebas de software.",
              ]}
            />
          </div>
        </div>
      </section>


      {/* Estructura */}
      <section className="mb-20 p-8">
        <h4 className="text-3xl font-bold text-center text-blue-950 mb-10">
          Estructura
        </h4>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Descripción */}
          <div className="lg:w-1/2">
            <p className="text-lg leading-8 text-gray-700">
              La <span className="font-bold">CuTB</span> estará representada por una Junta Ejecutiva. La Mesa Ejecutiva estará integrada por cubanos residentes en Cuba. El asesor de ISTQB® puede ser de fuera de Cuba y proporcionará experiencia y capacidad en pruebas de software a la Junta Ejecutiva.
            </p>
          </div>
          {/* Imagen */}
          <div className="lg:w-1/2 flex justify-center">

            <div className="bg-gradient w-full rounded-xl py-4 px-2">
              <div className="flex w-full justify-between">
                <div className="bg-[#c44d3d] w-full m-2 text-white flex items-center justify-center text-xl py-4 px-2 rounded-xl">
                  President
                </div>
                <div className="bg-[#c44d3d] w-full m-2 text-white flex items-center justify-center text-xl py-4 px-2 rounded-xl">
                  Vice President
                </div>
                <div className="bg-[#c44d3d] w-full m-2 text-white flex items-center justify-center text-xl py-4 px-2 rounded-xl">
                  Treasurer
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="bg-[#c44d3d] w-full m-2 text-white flex items-center justify-center text-xl py-4 px-2 rounded-xl">
                  Secretary
                </div>
                <div className="bg-[#c44d3d] w-full m-2 text-white flex items-center justify-center text-xl py-4 px-2 rounded-xl">
                  Head of Technical Advisory Committee (TAC)
                </div>
                <div className="bg-[#37a34b] w-full m-2 text-white flex items-center justify-center text-xl py-4 px-2 rounded-xl">
                  ISTQB Advisor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junta Ejecutiva */}
      <section className="mb-20 bg-gradient text-white py-16 px-6 shadow-lg">
        <h4 className="text-3xl font-bold text-center mb-12">La Junta Ejecutiva</h4>
        <div className="flex flex-wrap justify-evenly gap-12">
          <ExecutiveMember
            src="/images/Ailyn_Febles_Estrada.png"
            name="Dra.C. Ailyn Febles Estrada"
            role="Presidenta"
          />
          <ExecutiveMember
            src="/images/Yaimi_Trujillo_Casañola.png"
            name="Dra.C. Yaimi Trujillo Casañola"
            role="VicePresidenta"
          />
          <ExecutiveMember
            src="/images/Agustina_Gay.png"
            name="Agustina Gay"
            role="Asesor ISTQB"
          />
        </div>
      </section>

      {/* Membresía */}
      <section className="mb-20 py-16 px-6 rounded-lg">
        <h4 className="text-3xl font-bold text-center text-blue-950 mb-10">
          Únete al equipo del CuTB
        </h4>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Imágenes */}
          <div className="lg:w-1/2 flex flex-col items-center gap-6">
            <Image
              width={350}
              height={400}
              alt="members"
              src="/images/members_1.png"
              className="rounded-lg shadow-xl"
            />
            <Image
              width={350}
              height={400}
              alt="members"
              src="/images/members_2.png"
              className="rounded-lg shadow-xl"
            />
          </div>
          {/* Contenido */}
          <div className="lg:w-1/2">
            <h4 className="text-3xl font-bold text-blue-950 mb-6">Membresía</h4>
            <p className="text-lg leading-8 text-gray-700 mb-6">
              Existen <span className="font-bold">dos tipos de membresía:</span> La membresía <span className="font-bold">institucional</span> y la membresía como <span className="font-bold">persona</span>. Para la afiliación al comité, debe ser presentada la solicitud como miembro ante el Consejo Directivo de CuTB.
            </p>
            <BulletList
              items={[
                "¿Qué expectativas tiene en el Board al ingresar como miembro de CuTB?",
                "¿Qué proyectos o actividades planea desarrollar dentro del Board?",
                "¿Cuál es su visión como miembro dentro del país y dentro del CuTB?",
              ]}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
