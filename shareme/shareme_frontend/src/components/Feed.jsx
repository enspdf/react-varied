import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

import { client } from "../services/sanityClient";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  if (!pins?.length) return <p>No pins available</p>;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
