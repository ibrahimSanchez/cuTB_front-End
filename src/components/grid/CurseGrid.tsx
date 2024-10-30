import clsx from "clsx";
import { CurseCardUI } from "../ui/card/CurseCardUI"




export const CurseGrid = () => {




    const curse = {
        uid: '1',
        name: 'Curso 1',
        startDate: '2/02/2024',
        endDate: '2/03/2024',
        prise: '150',
        email: 'email@gmail.com',
        providerId: '1',
        curse_levelId: '1'
    }



    return (
        <section className="mt-8">

            <div className={
                clsx(
                    "flex overflow-auto",
                    {
                        // "justify-evenly": certificationData.length
                        "justify-evenly": false
                    }
                )
            }>

                <CurseCardUI
                    curse={curse}
                />

                <CurseCardUI
                    curse={curse}
                />

            </div>


        </section>
    )
}
