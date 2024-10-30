import { TrainingCard } from "@/components";




export default function TrainMe() {
  return (
    <>
      <h1 className="title mb-2">Entrenarme</h1>
      {/* line separator */}
      <div className="w-full h-1 bg-blue-950 mb-5"></div>

      <section className="mt-8">

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <TrainingCard
            photoUrl="/images/Yaimi_Trujillo_Casañola.png"
            name="Dr. C. Yaimí Trujillo"
            position="Decana"
            workplace="Universidad de las Ciencias Informáticas (UCI)"
            trainings={[
              "Certified Tester Advanced Level – Test Manager ",
            ]}
          />
          <TrainingCard
            photoUrl="/images/Alionuska_Velázquez.png"
            name="MSc. Alionuska Velázquez"
            position="Profesor"
            workplace="Universidad de las Ciencias Informáticas (UCI)"
            trainings={[
              "Certified Tester Foundation Level ",
            ]}
          />
          <TrainingCard
            photoUrl="/images/Daniel_Tolosa.png"
            name="Ing. Daniel Tolosa"
            position="Representante Chile HASTQB Argentina"
            workplace=""
            trainings={[
              "Certified Tester Mobile App Tester",
              "Certified Tester – Test Automation Engineer",
              "A4Q Scrum Master Pro",
            ]}
          />
        </div>

      </section>


    </>
  )
}
