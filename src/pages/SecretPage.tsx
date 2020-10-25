/* eslint-disable */
import React, { useState, useEffect } from "react";

const SecretPage: React.FC = () => {
  const [data, setData] = useState<any>();
  const githubUser = "https://api.github.com/users/s-pyadyshev";

  useEffect(() => {
    // const getResponse = (url: any) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open("GET", url, true);
    //   xhr.send;
    //   return xhr.response;
    // };

    // const response = getResponse("https://api.github.com/users/s-pyadyshev");
    // setData(response);

    fetch(githubUser)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data && data.blog}</div>;
};

export default SecretPage;
