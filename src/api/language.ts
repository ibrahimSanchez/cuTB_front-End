import axios from "axios";


export const getLanguages = () => {
    return axios.get('http://localhost:8080/api/languages')
}

export const postCurse_language = (languageIds: string[], curseId: string) => {
    console.log(languageIds, curseId)
}


export const postExam_language = (languageIds: string[], examId: string) => {
    console.log(languageIds, examId)
}
