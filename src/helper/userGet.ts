import { loadUserById } from "@/api"


export const getUserEmail = async (id: string) => {

    try {
        const res = await loadUserById(id);
        console.log(res)
    } catch (error) {
        console.log(error)
    }


}