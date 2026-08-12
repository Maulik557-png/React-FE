import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  //   const [data, setData] = React.useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         "https://api.github.com/users/Maulik557-png",
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setData(data);
  //     };
  //     fetchData();
  //   }, []);

  const data = useLoaderData();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="GitHub Profile" width={300} />
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Maulik557-png");
  return response.json();
};
