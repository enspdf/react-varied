import React, { useState, useContext } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layouts/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import createProductValidation from "../validation/createProductValidation";
import { FirebaseContext } from "../firebase";
import { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import Error404 from "../components/layouts/404";

const INITIAL_STATE = {
  name: "",
  company: "",
  image: "",
  url: "",
  description: "",
};

const NewProduct = () => {
  const [imageName, setImageName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const [error, setError] = useState(false);
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
    handleBlur,
  } = useValidation(INITIAL_STATE, createProductValidation, createProduct);

  const { name, company, image, url, description } = values;

  const router = useRouter();
  const { user, firebase } = useContext(FirebaseContext);

  async function createProduct() {
    if (!user) {
      return router.push("/login");
    }

    const product = {
      name,
      company,
      url,
      imageUrl,
      description,
      votes: 0,
      comments: [],
      create: Date.now(),
      creator: {
        id: user.uid,
        name: user.displayName,
      },
      voted: [],
    };

    firebase.db.collection("products").add(product);

    return router.push("/");
  }

  const handleUploadStart = () => {
    setProgress(0);
    setUploading(true);
  };

  const handleProgress = (progress) => setProgress({ progress });

  const handleUploadError = (error) => {
    setUploading(error);
    console.error(error);
  };

  const handleUploadSuccess = (name) => {
    setProgress(100);
    setUploading(false);
    setImageName(name);

    firebase.storage
      .ref("products")
      .child(name)
      .getDownloadURL()
      .then((url) => setImageUrl(url));
  };

  return (
    <div>
      <Layout>
        {!user ? (
          <Error404 />
        ) : (
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              New Product
            </h1>
            <Form onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>General Information</legend>
                <Field>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Product Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.name && <Error>{errors.name}</Error>}
                <Field>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name"
                    name="company"
                    value={company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.company && <Error>{errors.company}</Error>}
                <Field>
                  <label htmlFor="image">Image</label>
                  <FileUploader
                    accept="image/*"
                    id="image"
                    name="image"
                    randomizeFilename
                    storageRef={firebase.storage.ref("products")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />
                </Field>
                <Field>
                  <label htmlFor="url">URL</label>
                  <input
                    type="url"
                    id="url"
                    placeholder="Product URL"
                    name="url"
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.url && <Error>{errors.url}</Error>}
              </fieldset>
              <fieldset>
                <legend>About your product</legend>
                <Field>
                  <label htmlFor="url">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.description && <Error>{errors.description}</Error>}
              </fieldset>
              {error && <Error>{error}</Error>}
              <InputSubmit type="submit" value="Create Product" />
            </Form>
          </>
        )}
      </Layout>
    </div>
  );
};

export default NewProduct;
