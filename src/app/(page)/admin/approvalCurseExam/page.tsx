"use client";

import { getCurses, getExams } from "@/api";
import ApprovalCurseExamGrid from "@/components/grid/ApprovalCurseExamGrid";
import { Curse, Exam } from "@/interfaces";
import { useEffect, useState } from "react";


export default function Page() {

  const [courses, setCourses] = useState<Curse[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);

  const loadData = async (type: "curses" | "exams") => {
    try {
      if (type === "curses") {
        const res = await getCurses();
        setCourses(res.data.curses);
      } else if (type === "exams") {
        const res = await getExams();
        setExams(res.data.exams);
      }
    } catch (error) {
      console.error(`Error loading ${type}:`, error);
    }
  };


  useEffect(() => {
    loadData("curses");
    loadData("exams");
  }, []);

  const cursesShow = courses.filter(({ approved }) => !approved);
  const examsShow = exams.filter(({ approved }) => !approved);


  return (
    <>
      <ApprovalCurseExamGrid
        courses={cursesShow}
        exams={examsShow}
        loadData={loadData}
      />
    </>
  );
}