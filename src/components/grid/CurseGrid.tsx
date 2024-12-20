"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { CurseCardUI } from "../ui/card/CurseCardUI"
import { getCurse_levels, getCurses } from "@/api";
import { Curse } from "@/interfaces";


type Curse_level = {
    uid: string;
    level: string;
}


export const CurseGrid = () => {

    const [curse_levels, setCurse_levels] = useState<Curse_level[]>([])
    const [curses, setCurses] = useState<Curse[]>([]);


    const loadCurse_levels = async () => {
        try {
            const res = await getCurse_levels();
            setCurse_levels(res.data.curse_levels);
        } catch (error) {
            console.log(error)
        }
    }

    const loadCurses = async () => {
        try {
            const res = await getCurses();
            setCurses(res.data.curses);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadCurse_levels();
        loadCurses();
    }, []);


    const curseShow = curses.filter(({ approved }) => approved);


    return (

        <section className="my-8 px-4">            {
            curse_levels.map(({ level, uid }) => (

                <div key={uid} className="mb-8">
                    <h4 className="text-3xl font-bold text-center text-blue-950 mb-10">
                        {level}
                    </h4>
                    <div className={
                        clsx(
                            "flex overflow-auto",
                            { "justify-evenly": false })
                    }>
                        {
                            curseShow.filter(({ curse_levelId }) => curse_levelId === uid).length === 0 ?
                                <p className="text-lg text-[--primary] underline cursor-default">No hay cursos disponibles</p> :
                                curseShow.filter(({ curse_levelId }) => curse_levelId === uid).map((curse) => (
                                    <CurseCardUI
                                        key={curse.uid}
                                        curse={curse}
                                    />
                                ))
                        }
                    </div>
                </div>
            ))
        }

        </section>
    )
}
