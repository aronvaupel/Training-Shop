import React, { FormEvent, useState } from "react";
// import sha1 from "sha1";
import { getPosts } from "../utils/strapiApi";
import Post from "./Post"
import { cloudinaryV2 } from "../utils/cloudinary";

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

// const signature = sha1(payload_to_sign + api_secret);


// console.log('urlTest: ',cloudinaryV2.url('sample'))
// https://cloudinary.com/documentation/admin_api#delete_resources
// cloudinary.api.delete_resources(['image1', 'image2']) 
// cloudinary.api.delete_resources_by_prefix('xxx')
// cloudinaryV2.uploader.destroy('sample') // delete 'sample' image and all their associated derived assets
interface PostObj {
    title:string,
    content:string,
    img_url: string,
    public_id: string,
}

export const ImageMgr = ()=>{
    const [image, setImage] = useState(null);
    const [posts, setPosts] = useState <PostObj[]> ([]);
    
    const uploadToClient = (event: React.FormEvent<HTMLInputElement> )=>{
        //@ts-ignore
        if(event.target && event.target.files[0]){
            //@ts-ignore
            const tmpImage = event.target.files[0]
            console.log(tmpImage)
        }
    }
    const getRequest =  (e:FormEvent)=>{
        e.preventDefault();
        getPosts().then((data)=>{
            // console.log(data.data)
            let results = data.data 
             results = results.map((post: any)=>{
                return post.attributes
            });
            console.log(results)
            setPosts(results)
        })
    }

    const uploadToServer= ()=>{}

    return (
        <>
        <h5>CRUD Post</h5>
        <form className="border">
        <input type="file" onChange={uploadToClient} />
        <button type="submit"onClick={uploadToServer}>
            upload
        </button>
        </form>
        <hr></hr>
        <form className="border" onSubmit={getRequest}>
        <button className="p-1 bg-slate-300 block"
        type="submit">
            load all
        </button>
        {posts && posts.map((p, index)=>{
            return <Post 
            key={index}
            title={p.title}
            imgUrl={p.img_url}
            publicId={p.public_id}
            content={p.content}
            />
        })}
        </form>
        </>
    )
}