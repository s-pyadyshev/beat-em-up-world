/* eslint-disable */
import React, { useState, useEffect } from "react";

const SecretPage: React.FC = () => {
  const [asyncData, setAsyncData] = useState({
    fact: "",
    blog: "",
    done: false,
  });
  // const githubUserUrl = "https://api.github.com/users/s-pyadyshev";
  // const catFactsUrl = "https://catfact.ninja/fact";

  useEffect(() => {
    // const catFactPromise = fetch(catFactsUrl);
    // const githubPromise = fetch(githubUserUrl);

    // catFactPromise
    //   .then((response) => response.json())
    //   .then((data) =>
    //     setAsyncData((prevState: any) => ({
    //       ...prevState,
    //       fact: data.fact,
    //     }))
    //   );

    // githubPromise
    //   .then((response) => response.json())
    //   .then((data) =>
    //     setAsyncData((prevState: any) => ({
    //       ...prevState,
    //       blog: data.blog,
    //     }))
    //   );

    // Promise.all([catFactPromise, githubPromise]).then(
    //   (data) => {
    //     setAsyncData((prevState: any) => ({
    //       ...prevState,
    //       done: true,
    //     }));
    //   },
    //   (error) => console.log(error)
    // );

    const fetchData = async () => {
      try {
        // const catFactPromise = await fetch(catFactsUrl);
        // const githubPromise = await fetch(githubUserUrl);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData().then(() => {
      setAsyncData((prevState: any) => ({
        ...prevState,
        done: true,
      }));
    });
  }, []);

  return (
    <div>
      <div>Promise 1 {asyncData.fact}</div>
      <div>Promise 2 {asyncData.blog}</div>
      {asyncData.done ? "All data is loaded" : null}
    </div>
  );
};

export default SecretPage;
