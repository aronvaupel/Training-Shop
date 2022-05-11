import React, { useState } from "react";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const Delete = () => {
  const [publicId, setPublicId] = useState("");
  const [url, setUrl] = useState("");

  const deleteImage = async () => {
    try {
      const data = new FormData();
      data.append("publicId", `training-shop/${publicId}`);
      data.append("upload_preset", "training-shop-preset");
      data.append("cloud_name", "dwy0h16kc");
      const response = await fetch("/api/images", {
        method: "DELETE",
        body: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div>
        <input
          className="border"
          type="text"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            // @ts-ignore
            setPublicId(e.target.value)
          }
        ></input>
        <button onClick={deleteImage}>Delete</button>
      </div>
    </div>
  );
};
export default Delete;
