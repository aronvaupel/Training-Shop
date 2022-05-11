// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import { cloudinaryConfig } from "../../utils/cloudinaryConfig";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

type Data = {
  name: string;
};

export default async function deleteImg(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { data } = req.body;
  } else if (req.method === "DELETE") {
    const { publicId } = req.body;
    cloudinaryConfig;
    const cloudResults = await cloudinary.v2.api.delete_resources(publicId);
  } else {
    console.log("else");
  }
  res.status(200).json({ succes: true });
}
