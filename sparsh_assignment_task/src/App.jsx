import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="main_container">
          <h2>All User Posts</h2>
          {data?.posts?.length > 0 ? (
            <div className="posts_container">
              {data?.posts?.map((item) => {
                return <Cards data={item} key={item?.id} />;
              })}
            </div>
          ) : (
            <>data not found</>
          )}
        </div>
      )}
    </>
  );
};

export default App;
