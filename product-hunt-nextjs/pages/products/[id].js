import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layouts/404";
import Layout from "../../components/layouts/Layout";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Field, InputSubmit } from "../../components/ui/Form";
import Button from "../../components/ui/Button";

const ProductContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;

const ProductCreator = styled.p`
  padding: 0.5rem 2rem;
  background-color: #da552f;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const Product = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [comment, setComment] = useState({});
  const [queryDb, setQueryDb] = useState(true);

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { firebase, user } = useContext(FirebaseContext);

  const getProduct = async (id) => {
    const productQuery = await firebase.db.collection("products").doc(id);
    const currentProduct = await productQuery.get();

    if (currentProduct.exists) {
      setProduct(currentProduct.data());
    } else {
      setError(true);
    }

    setQueryDb(false);
  };

  useEffect(() => {
    if (id && queryDb) {
      getProduct(id);
    }
  }, [id]);

  if (Object.keys(product).length === 0 && !error) return "Loading...";

  const {
    name,
    company,
    url,
    imageUrl,
    description,
    votes,
    comments,
    create,
    creator,
    voted = [],
  } = product;

  const voteProduct = () => {
    if (!user) {
      return router.push("/login");
    }

    const totalVotes = votes + 1;

    if (voted.includes(user.uid)) return;

    const allVotes = [...voted, user.uid];

    firebase.db
      .collection("products")
      .doc(id)
      .update({ votes: totalVotes, voted: allVotes });

    setProduct({
      ...product,
      votes: totalVotes,
    });

    setQueryDb(true);
  };

  const changeComment = (e) => {
    e.preventDefault();

    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const isCreator = (id) => {
    if (creator.id === id) {
      return true;
    }
  };

  const addComment = (e) => {
    e.preventDefault();

    if (!user) {
      return router.push("/login");
    }

    comment.userId = user.uid;
    comment.userName = user.displayName;

    const newComments = [...comments, comment];

    firebase.db.collection("products").doc(id).update({
      comments: newComments,
    });

    setProduct({
      ...product,
      comments: newComments,
    });

    setQueryDb(true);
  };

  const canDelete = () => {
    if (!user) return false;

    if (creator.id === user.uid) {
      return true;
    }
  };

  const deleteProduct = async () => {
    if (!user) {
      return router.push("/login");
    }

    if (creator.id !== user.uid) {
      return router.push("/");
    }

    try {
      await firebase.db.collection("products").doc(id).delete();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <>
        {error ? (
          <Error404 />
        ) : (
          <div className="container">
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              {name}
            </h1>
            <ProductContainer>
              <div>
                <p>Posted {formatDistanceToNow(new Date(create))} ago</p>
                <p>
                  By: {creator.name} of {company}
                </p>
                <img src={imageUrl} />
                <p>{description}</p>
                {user && (
                  <>
                    <h2>Add your comment</h2>
                    <form onSubmit={addComment}>
                      <Field>
                        <input
                          type="text"
                          name="message"
                          onChange={changeComment}
                        />
                      </Field>
                      <InputSubmit type="submit" value="Add comment" />
                    </form>
                  </>
                )}
                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comments
                </h2>
                {comments.length === 0 ? (
                  "No Comments"
                ) : (
                  <ul>
                    {comments.map((comment, i) => (
                      <li
                        key={`${comment.userId}-${i}`}
                        css={css`
                          border: 1px solid #e1e1e1;
                          padding: 2rem;
                        `}
                      >
                        <p>{comment.message}</p>
                        <p>
                          Written by:
                          <span
                            css={css`
                              font-weight: bold;
                            `}
                          >
                            {" "}
                            {comment.userName}
                          </span>
                        </p>
                        {isCreator(comment.userId) && (
                          <ProductCreator>It's Creator</ProductCreator>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <aside>
                <Button target="_blank" bgColor="true" href={url}>
                  Visit URL
                </Button>
                <div
                  css={css`
                    margin-top: 5rem;
                  `}
                >
                  <p
                    css={css`
                      text-align: center;
                    `}
                  >
                    {votes} Votes
                  </p>
                  {user && <Button onClick={voteProduct}>Vote</Button>}
                </div>
              </aside>
            </ProductContainer>
            {canDelete() && (
              <Button onClick={deleteProduct}>Delete Product</Button>
            )}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Product;
