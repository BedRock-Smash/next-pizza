
import { ApiRoutes } from "./constans"
import { axsiosInstance } from "./instences"

export const Product = async (search:string) =>{
    return (await axsiosInstance.get(ApiRoutes.PRODUCT,{
        params:{search},
    })).data
}