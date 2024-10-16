import Image from "next/image";
// import Link from "next/link";


export default function TrainMe() {
  return (
    <>

      <h1 className="title mb-2">Entrenarme</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-4"></div>




      <section className="mt-8">

        {/* <div className="lg:w-[30%] flex flex-col items-center">
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
        </div> */}


        <div>
          <h4 className="text-3xl mt-16 mb-6">
            Los instructores
          </h4>

          <p className="leading-7 mb-4">
            Los instructores que imparten entrenamientos desde el CuTB tienen amplios conocimientos y experiencia en pruebas de software.
            Estos proveedores de formación pueden y proporcionarán información adicional sobre terminología de pruebas, técnicas, métodos
            y contenido del plan de estudios ISTQB, para que sea más fácil obtener las certificaciones ISTQB.
          </p>
        </div>



        <div className="flex justify-between">

          <div className="flex">
            <Image
              className="mb-8"
              width={300}
              height={50}
              alt="ISQUI"
              src='/images/Yaimi_Trujillo_Casañola.png'
            />
            <div className="ml-4">

              <p className="font-bold mb-4 text-xl">
                Dra.C. Yaimi Trujillo Casañola
              </p>

              <p className="mb-4">
                Decana en Universidad de las Ciencias Informáticas (UCI)
              </p>

              <h4 className="font-bold mb-2 text-xl">Entrenamiento </h4>

              <ul>
                <li className="font-bold mb-1">
                  Certified Tester Mobile App Tester</li>
                <li className="font-bold mb-1">
                  Certified Tester – Test Automation Engineer </li>
                <li className="font-bold mb-1">
                  A4Q Scrum Master Pro </li>
              </ul>
            </div>

          </div>



        </div>


      </section>



    </>
  )
}
