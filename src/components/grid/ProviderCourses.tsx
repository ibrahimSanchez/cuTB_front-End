'use client';

import React, { useEffect, useState } from 'react';
import {
    getCursesByProviderId,
    getCurse_levels
} from '@/api';
import {
    Curse
} from '@/interfaces';

interface Level {
    uid: string;
    level?: string;
    stream?: string;
}



interface ProviderCoursesExamsProps {
    providerId: string;
    providerType: string;
}


export default function ProviderCourses({ providerId, providerType }: ProviderCoursesExamsProps) {
    const [courses, setCourses] = useState<Curse[]>([]);
    const [courseLevels, setCourseLevels] = useState<Level[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const [coursesRes, courseLevelsRes] = await Promise.all([
                getCursesByProviderId(providerId),
                getCurse_levels(),
            ]);

            setCourses(coursesRes.data.curses);
            setCourseLevels(courseLevelsRes.data.curse_levels);
        };

        loadData();
    }, [providerId]);

    const groupByLevel = <T extends {
        uid: string;
        curse_levelId?: string;
        streamId?: string;
        approved: boolean
    }>(
        items: T[],
        levels: Level[],
        levelKey: 'curse_levelId' | 'streamId'
    ) => levels
        .map((level) => ({
            level,
            items: items.filter((item) => (item[levelKey] === level.uid && item.approved)),
        }))
        .filter((group) => group.items.length > 0); // Filtrar niveles sin cursos/exámenes

    const groupedCourses = groupByLevel(courses, courseLevels, 'curse_levelId');
    // const groupedExams = groupByLevel(exams, examStreams, 'streamId');



    return (
        <>
            {providerType === 'curse_provider' && (
                <>
                    <h3 className="text-xl font-bold text-[--primary] mb-3">Cursos por Nivel</h3>
                    {groupedCourses.map(({ level, items }) => (
                        <div key={level.uid} className="mb-5">
                            <h4 className="text-lg font-semibold text-[--text_color]">{level.level}</h4>
                            <ul className="list-disc ml-6">
                                {items.map((course) => (
                                    <li key={course.uid} className="text-primary">{course.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            )}

        </>
    );
}
