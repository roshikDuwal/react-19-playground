
import { axiosInstance } from "../services/api.services";

export const getTodoData=async()=>{
    try {
        const response=await axiosInstance.get('/todos/');
        return response.data;
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getTodoDataByid=async({params}:any)=>{
    console.log(params);
    
    try {
        const response=await axiosInstance.get(`/todos/${params.id}`);
        return response.data;
        
    } catch (error) {
        console.log(error);
        
    }
}