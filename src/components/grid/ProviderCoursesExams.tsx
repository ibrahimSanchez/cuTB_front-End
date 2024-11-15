'use client';

import React, { useEffect, useState } from 'react';
import { getCursesByProviderId, getCurse_levels, getExamsByProviderId, getStream } from '@/api';
import { Curse, Exam } from '@/interfaces';

interface Level {
    uid: string;
    level?: string;
    stream?: string;
}

interface ProviderCoursesExamsProps {
    providerId: string;
    providerType: string;
}

export default function ProviderCoursesExams({ providerId, providerType }: ProviderCoursesExamsProps) {
    const [courses, setCourses] = useState<Curse[]>([]);
    const [exams, setExams] = useState<Exam[]>([]);
    const [courseLevels, setCourseLevels] = useState<Level[]>([]);
    const [examStreams, setExamStreams] = useState<Level[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const [coursesRes, examsRes, courseLevelsRes, examStreamsRes] = await Promise.all([
                getCursesByProviderId(providerId),
                getExamsByProviderId(providerId),
                getCurse_levels(),
                getStream(),
            ]);

            setCourses(coursesRes.data.curses);
            setExams(examsRes.data.exams);
            setCourseLevels(courseLevelsRes.data.curse_levels);
            setExamStreams(examStreamsRes.data.streams);
        };

        loadData();
    }, [providerId]);

    // Ajustamos groupByLevel para aceptar Curse o Exam, y filtramos niveles sin cursos/exámenes
    const groupByLevel = <T extends { uid: string; curse_levelId?: string; streamId?: string }>(
        items: T[],
        levels: Level[],
        levelKey: 'curse_levelId' | 'streamId'
    ) => levels
        .map((level) => ({
            level,
            items: items.filter((item) => item[levelKey] === level.uid),
        }))
        .filter((group) => group.items.length > 0); // Filtrar niveles sin cursos/exámenes

    const groupedCourses = groupByLevel(courses, courseLevels, 'curse_levelId');
    const groupedExams = groupByLevel(exams, examStreams, 'streamId');

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
                                    <li key={course.uid} className="text-[--text_secondary_color]">{course.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            )}

            {providerType === 'exam_provider' && (
                <>
                    <h3 className="text-xl font-bold text-[--primary] mt-6 mb-3">Exámenes por Nivel</h3>
                    {groupedExams.map(({ level, items }) => (
                        <div key={level.uid} className="mb-5">
                            <h4 className="text-lg font-semibold text-[--text_color]">{level.stream}</h4>
                            <ul className="list-disc ml-6">
                                {items.map((exam) => (
                                    <li key={exam.uid} className="text-[--text_secondary_color]">{exam.topic}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}
