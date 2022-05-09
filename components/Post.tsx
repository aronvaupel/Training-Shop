import { deletePosts } from "../utils/strapiApi";

interface PostProps {
    title: string,
    content: string,
    imgUrl: string,
    publicId: string,
}
const Post = ({ title, content, imgUrl, publicId }: PostProps) => {

    return (

        <div className="p-2 w-2/6 border">
            <div className="flex justify-between">

                <h4 className="p-1 to-blue-700 ">
                    {title}
                </h4>
                <button className="bg-gray-400 rounded-full border w-5 h-6" 
                onClick={()=> deletePosts(publicId) }
                >X</button>
            </div>
            <img className=" block min-w-full max-h-fit"
                src={imgUrl} alt="" />
            <p className="p-1 block w-full" >
                {content}
            </p>
        </div>
    )
}


export default Post;