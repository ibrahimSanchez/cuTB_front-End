'use client';

import React, { useState } from 'react';
import { Curse, Exam } from '@/interfaces';
import ApprovalCurseExamTable from '../ui/table/ApprovalCurseExamTable';

interface Props {
    courses: Curse[];
    exams: Exam[];
    loadData: (type: "curses" | "exams") => void;
}

const ApprovalCurseExamGrid: React.FC<Props> = ({ courses, exams, loadData }) => {
    const [isShowingCourses, setIsShowingCourses] = useState(true);

    const toggleView = () => {
        setIsShowingCourses((prev) => !prev);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="subTitle">Aprobar {isShowingCourses ? 'cursos' : 'exámenes'}</h2>
                <button
                    onClick={toggleView}
                    className="bg-[--primary] text-white px-4 py-2 rounded-lg hover:bg-[--secondary]"
                >
                    Mostrar {isShowingCourses ? 'Exámenes' : 'Cursos'}
                </button>
            </div>
            <ApprovalCurseExamTable
                data={isShowingCourses ? courses : exams}
                type={isShowingCourses ? 'course' : 'exam'}
                reloadData={() => {
                    loadData("curses");
                    loadData("exams");
                }}
            />
        </div>
    );
};

export default ApprovalCurseExamGrid;