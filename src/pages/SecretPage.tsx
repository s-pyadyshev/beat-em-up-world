/* eslint-disable */
import React, { useState, useEffect } from "react";
import { getResource } from "../services/api";

const SecretPage: React.FC = () => {
  const [data, setData] = useState<any>();
  const githubUserUrl = "https://api.github.com/users/s-pyadyshev";

  useEffect(() => {
    getResource(githubUserUrl)
      .then((body: any) => {
        setData(body);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  }, []);

  return <div>{data && data.blog}</div>;
};

export default SecretPage;
