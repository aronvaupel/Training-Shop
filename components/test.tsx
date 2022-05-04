import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState();

  // getDataFunc = fetch something from shopifyAPI

  return (
    <>
      <button className="bg-green-500" onClick={getData}>
        test
      </button>
      <pre>{data}</pre>
    </>
  );
};
export default Test;
