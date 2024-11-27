'use client';

import React, { useEffect, useState } from 'react';
import {
    getExamsByProviderId,
    getStream
} from '@/api';
import {
    Exam
} from '@/interfaces';

interface Level {
    uid: string;
    stream: string;
}



interface ProviderCoursesExamsProps {
    providerId: string;
}


export default function ProviderExams({ providerId }: ProviderCoursesExamsProps) {
    const [exams, setExams] = useState<Exam[]>([]);
    const [examLevels, setExamLevels] = useState<Level[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const [examsRes, examsLevelsRes] = await Promise.all([
                getExamsByProviderId(providerId),
                getStream(),
            ]);
            setExams(examsRes.data.exams);
            setExamLevels(examsLevelsRes.data.streams);
        };

        loadData();
    }, [providerId]);

    const groupByLevel = <T extends {
        uid: string;
        curse_levelId?: string;
        streamId?: string;
        approved: boolean;
    }>(
        items: T[],
        levels: Level[],
        levelKey: 'streamId' | 'curse_levelId'
    ) => {
        return levels.map(level => ({
            level,
            items: items.filter(item => item[levelKey] === level.uid)
        })).filter((group) => group.items.length > 0);
    };



    // const groupedCourses = groupByLevel(courses, courseLevels, 'curse_levelId');
    const groupedExams = groupByLevel(exams, examLevels, 'streamId');


    return (
        <>
            {/* {providerType === 'curse_provider' && ( */}
            <>
                <h3 className="text-xl font-bold text-[--primary] mb-3">Exámenes por Nivel</h3>
                {groupedExams.map(({ level, items }) => (
                    <div key={level.uid} className="mb-5">
                        <h4 className="text-lg font-semibold text-[--text_color]">{level.stream}</h4>
                        <ul className="list-disc ml-6">
                            {items.map((item) => (
                                <li key={item.uid} className="text-primary">{item.topic}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
            {/* )} */}

        </>
    );
}
