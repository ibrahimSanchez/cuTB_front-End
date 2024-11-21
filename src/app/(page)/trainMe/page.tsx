import { SectionHome, TrainingCard } from "@/components";




export default function TrainMe() {
  return (
    <div className="mx-auto">
    
      <SectionHome
        className="pt-20"
          title="Entrenarme!!!"
          text="Los instructores que imparten entrenamientos desde el CuTB tienen amplios conocimientos y experiencia en pruebas de software.
              Estos proveedores de formación pueden y proporcionarán información adicional sobre terminología de pruebas, técnicas, métodos
              y contenido del plan de estudios ISTQB, para que sea más fácil obtener las certificaciones ISTQB."
          image="/system/entrenarme.png"
        />


      <section className="my-8 px-4">
        <h4 className="text-3xl font-bold text-center text-blue-950 mb-10">
          Instructores
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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


    </div>
  )
}
