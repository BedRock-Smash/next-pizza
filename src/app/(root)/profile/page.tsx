import { FormProfile } from "@/components";
import { AccessDenied } from "@/components/access-denied";
import { getUser } from "@/lib/get-user";
import { prisma } from "@/prisma/prizma-client";
export default async function ProfilePage() {

    const user = await getUser();



    
    const userData = await prisma.user.findUnique({
        where:{
            email:user.email as string
        }
    })

    if (!userData) {
        return(<AccessDenied/>)

    }


    return (
        <FormProfile user = {userData}/>
    
    )
}