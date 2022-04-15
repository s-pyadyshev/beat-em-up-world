/* eslint-disable */
import React, { useState, useEffect } from "react";

const SecretPage: React.FC = () => {
  const [data, setData] = useState<any>();
  const githubUserUrl = "https://api.github.com/users/s-pyadyshev";
  const catFactsUrl = "https://catfact.ninja/fact";

  useEffect(() => {
    const catFactPromise = fetch(catFactsUrl); // returns Promise
    // Promise {<pending>}
    catFactPromise
      .then((response) => response.json())
      .then((data) => data.fact);

    const githubPromise = fetch(githubUserUrl); // returns Promise
    // Promise {<pending>}
    githubPromise.then((response) => response.json()).then((data) => data.blog);

    Promise.all([catFactPromise, githubPromise]).then(
      (data) => console.log(data[0], data[1]),
      (error) => console.log(error)
    );
  }, []);

  return <div>{data && data.blog}</div>;
};

export default SecretPage;
