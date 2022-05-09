// import { cloudinaryV2 } from "./cloudinary";
 import Cloudinary from "cloudinary";
export const cloudinaryV2 = Cloudinary.v2

 cloudinaryV2.config({
    cloud_name: process.env.CLOUD_NAME_TONY || 't0ny86img',
    api_key: process.env.CLOUD_API_KEY || '313793264519598',
    api_secret: process.env.CLOUD_API_SECRET || 'qjU9CL739rTkf1mZdzWOsml6rfc'
}) 
const URL = "https://shop-backend-dev1.herokuapp.com/api/posts";

export const getPosts = async () =>{
     
        let posts = await fetch(`${URL}`, {
            method:"GET"
        })
       
        return await posts.json()
}

export const createPosts = () =>{

    return ""
}

export const deletePosts = async(publicId : string) =>{
    try {
        
        const res = await fetch(`${URL}/${publicId}`, {
            method:"DELETE"
        })

         const cloudResults = await cloudinaryV2.uploader.destroy(publicId);
         console.log("destroy= ", cloudResults)
        console.log("DELETE= ", res)
    } catch (error) {
        console.log(error)
    }
    
}