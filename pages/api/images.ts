// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import { cloudinaryConfig } from "../../utils/cloudinaryConfig";

const config = cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

type Data = {
  name: string;
};

export default async function images(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { data } = req.body;
    console.log("postReq: ", data)

  } else if (req.method === "DELETE") {
    // const { publicId } = req.query;
    const  publicId  = req.query.del ;
    console.log("deleteReq: ", publicId)
    
    cloudinary.v2.config({
      cloud_name: 't0ny86img',
      api_key:'313793264519598',
      api_secret: 'qjU9CL739rTkf1mZdzWOsml6rfc',
    });

    const cloudResults = await cloudinary.v2.uploader.destroy(publicId);
    console.log('cloudResults: ', cloudResults)
  } else {
    console.log("else");
  }
  res.status(200).json({ succes: true });
}
