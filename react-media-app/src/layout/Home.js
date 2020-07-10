import React from "react";
import NewsFeed from "../components/newfeed/NewsFeed";

const Home = () => {
  return (
    <>
      <h2 className="text-2xl ml-6 my-3">Latest Feeds</h2>
      <NewsFeed />
    </>
  );
};

export default Home;
