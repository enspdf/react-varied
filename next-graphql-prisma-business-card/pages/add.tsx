import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Add() {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmitForm(values) {
    const endpoint = "/api/graphql";
    const graphqlClient = new GraphQLClient(endpoint, {});

    const mutation = gql`
      mutation AddCard($input: CardInput!) {
        addCard(input: $input) {
          name
          id
          email
        }
      }
    `;

    const variables = {
      input: values,
    };

    try {
      const data = await graphqlClient.request(mutation, variables);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="flex items-center justify-center w-1/2 bg-white rounded-full">
          <div className="">
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div>
                <label htmlFor="name">
                  Name
                  <input
                    {...register("name", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="name"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="email">
                  Email
                  <input
                    {...register("email", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="email"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="phone">
                  Phone
                  <input
                    {...register("phone", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="phone"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="biography">
                  Biography
                  <input
                    {...register("biography", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="biography"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="twitter">
                  Twitter
                  <input
                    {...register("twitter", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="twitter"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="github">
                  Github
                  <input
                    {...register("github", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="github"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="website">
                  Website
                  <input
                    {...register("website", { required: true })}
                    className="w-full mt-1 mb-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="text"
                    id="website"
                  />
                </label>
              </div>
              <button className="px-3 py-1 mt-10 text-white bg-green-700 rounded-md" type="submit">
                Add Card
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
