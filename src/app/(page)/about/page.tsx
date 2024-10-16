import Image from "next/image";




export default function About() {
  return (
    <>

      <h1 className="title mb-2">Sobre nosotros</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-4"></div>


      <section>
        <h4 className="subTitle mt-10 mb-6">
          Nuestra misión
        </h4>

        <p className="leading-7">
          Elevar los estándares en las pruebas de software en Cuba y contribuir al éxito económico del país mediante el desarrollo de
          oportunidades de aprendizaje y habilidades que permitan obtener mejores productos de software.
        </p>

        <h4 className="subTitle mt-10 mb-6">
          Visión
        </h4>

        <ul>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Avanzar la industria de pruebas de software en Cuba</li>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Promover la prueba de software como una profesión en Cuba </li>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Contribuir eficazmente a los programas de transformación de Cuba y aumentar la calidad de los productos de software</li>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Servir de enlace con el gobierno para promover la profesión de pruebas de Software</li>
        </ul>



        <h4 className="subTitle mt-10 mb-6">
          Objetivos
        </h4>

        <ul>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Promover ISTQB® como el estándar para la certificación de pruebas de software</li>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Promover la certificación ISTQB® para desarrollar habilidades de testing  </li>
          <li className="leading-7 mb-3"><span className="font-bold text-xl">*</span> Promover la acreditación ISTQB® para apoyar la formación en pruebas de software.</li>
        </ul>


        <p className="leading-7 my-12">
          A través de nuestra asociación con iSQI (www.isqi.org) somos capaces de ofrecer exámenes ISTQB® a nuestra comunidad de testing.
          Con el ISTQB® Certified Tester Foundation Level en el núcleo somos capaces de ofrecer trayectorias profesionales para los
          profesionales de pruebas de software.
        </p>

      </section>



      <section>

        <h4 className="subTitle mt-16 mb-6">
          Estructura
        </h4>

        <p className="leading-7">
          La <span className="font-bold">CuTB</span> estará representada por una Junta Ejecutiva. La Mesa Ejecutiva estará integrada por cubanos residentes en Cuba. El
          asesor de ISTQB® puede ser de fuera de Cuba y proporcionará experiencia y capacidad en pruebas de software a la Junta Ejecutiva.
        </p>

        <div className="flex justify-center mt-8">
          <Image
            width={700}
            height={700}
            alt="structure_img"
            src='/images/structure.png'
          />
        </div>

      </section>


      <section>
        <h4 className="subTitle mt-16 mb-6">
          La Junta Ejecutiva
        </h4>

        <div className="flex justify-evenly mt-8">

          <div>
            <Image
              width={200}
              height={200}
              alt="Ailyn_Febles_Estrada"
              src='/images/Ailyn_Febles_Estrada.png'
            />

            <div className="mt-2">
              <p className="text-sm">
                Dra.C. Ailyn Febles Estrada
              </p>
              <p className="text-sm">
                Presidenta
              </p>
            </div>
          </div>

          <div>
            <Image
              width={200}
              height={200}
              alt="Yaimi_Trujillo_Casañola"
              src='/images/Yaimi_Trujillo_Casañola.png'
            />
            <div className="mt-2">
              <p className="text-sm">
                Dra.C. Yaimi Trujillo Casañola
              </p>
              <p className="text-sm">
                VicePresidenta
              </p>
            </div>
          </div>

          <div>
            <Image
              width={200}
              height={200}
              alt="Agustina_Gay"
              src='/images/Agustina_Gay.png'
            />
            <div className="mt-2">
              <p className="text-sm">
                Agustina Gay
              </p>
              <p className="text-sm">
                Asesor ISTQB
              </p>
            </div>

          </div>
        </div>
      </section >


      <section>
        <h4 className="subTitle mt-16 mb-6">
          Únete al equipo del CuTB
        </h4>

        <p className="leading-7">
          Los miembros de CuTB tienen como objetivo la promoción y divulgación del Testing en general, a través de eventos,
          conferencias, seminarios, actividades direccionadas al Testing y a la Certificación.  Además de promover el Testing
          en general, los miembros deberán trabajar para el fortalecimiento del CuTB e ISTQB® en su país y/o región.
        </p>


        <div className="mt-8 lg:flex lg:px-14">

          <div className="lg:w-[40%] flex flex-col items-center">
            <Image
              className="mb-8"
              width={350}
              height={400}
              alt="members"
              src='/images/members_1.png'
            />
            <Image
              className="mb-8"
              width={350}
              height={400}
              alt="members"
              src='/images/members_2.png'
            />
          </div>

          <div className="lg:w-[50%] lg:ml-12">

            <h4 className="text-3xl mt-16 mb-6">
              Membresía
            </h4>

            <p className="leading-7 mb-4">
              Existen <span className="font-bold">dos tipos de membresía:</span> La membresía <span className="font-bold">institucional</span>
              y la membresía como <span className="font-bold">persona</span>. Para la afiliación al comité, debe ser presentada la
              solicitud como miembro ante el Consejo Directivo de CuTB, en la que debe dar respuesta a las preguntas:
            </p>

            <ul className="mb-6">
              <li>1. ¿Qué expectativas tiene en el Board al ingresar como miembro de CuTB?</li>
              <li>2. ¿Qué proyectos o actividades planea desarrollar dentro del Board?</li>
              <li>3. ¿Cuál es su visión como miembro dentro del país y dentro del CuTB?</li>
            </ul>

            <p className="leading-7 mb-4">
              La idea es que los miembros sean un instrumento de difusión, para esto contarán con el apoyo de CuTB en actividades
              propuestas por los mismos.
            </p>
          </div>

        </div>

      </section>




    </>
  )
}
