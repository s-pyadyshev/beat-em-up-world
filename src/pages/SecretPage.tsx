/* eslint-disable */
import React, { useState, useEffect } from "react";
import { getResource } from "../services/api";

const SecretPage: React.FC = () => {
  const [data, setData] = useState<any>();
  const githubUserUrl = "https://api.github.com/users/s-pyadyshev";
  const catFactsUrl = "https://catfact.ninja/fact";

  useEffect(() => {
    const catFactPromise = fetch(catFactsUrl); // returns Promise
    // Promise {<pending>}
    catFactPromise
      .then((response) => response.json())
      .then((data) => {
        console.log(data.fact);
        return data.fact;
      });

    const githubPromise = fetch(githubUserUrl); // returns Promise
    // Promise {<pending>}
    githubPromise
      .then((response) => response.json())
      .then((data) => {
        console.log(data.blog);
        return data.blog;
      });

    Promise.all([catFactPromise, githubPromise]).then(([catfact, github]) =>
      console.log(catfact, github)
    );
  }, []);

  return <div>{data && data.blog}</div>;
};

export default SecretPage;
