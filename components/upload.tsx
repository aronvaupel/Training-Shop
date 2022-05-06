import React, { useState } from "react";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const Upload = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "training-shop-preset");
    data.append("cloud_name", "dwy0h16kc");
    fetch("  https://api.cloudinary.com/v1_1/dwy0h16kc/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
      })

      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            // @ts-ignore
            setImage(e.target.files[0])
          }
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={url} />
      </div>
    </div>
  );
};
export default Upload;
