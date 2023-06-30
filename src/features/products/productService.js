import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
// import { authSlice } from "./userSlice";




const getProducts=async(userData)=>{
    const response=await axios.get(`${base_url}product`);
    if(response.data){
        return response.data;
    }
};

export const productService={
    getProducts,
};