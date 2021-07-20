/* eslint-disable */
import React, { useState, useEffect } from "react";

const SecretPage: React.FC = () => {
  const [data, setData] = useState<any>();
  const githubUser = "https://api.github.com/users/s-pyadyshev";

  useEffect(() => {
    fetch(githubUser)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data && data.blog}</div>;
};

export default SecretPage;
