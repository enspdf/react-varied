import React from "react";
import CommentForm from "../comment/commentForm";

const SingleFeed = () => {
  return (
    <>
      <div className="flex flex-wrap h-screen mt-6">
        <div className="w-full sm:w-1/2">
          <div className="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
            <div className="py-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <a
                  href="!#"
                  className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                >
                  <img
                    className="rounded-full h-8 w-8 object-cover"
                    src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                    alt=""
                  />
                  <p className="ml-2 text-base text-green-500 font-medium">
                    Jon Doe
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-xs font-semibold text-gray-500">
                  2 hours ago
                </p>
              </div>
            </div>
            <div className="mt-2">
              <img
                className="object-cover w-full rounded-lg"
                src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"
                alt=""
              />
            </div>
            <div className="py-2">
              <p className="leading-snug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ratione dicta deleniti, quas distinctio, veniam quo rem eveniet
                aliquid repudiandae fuga asperiores reiciendis tenetur? Eius
                quidem impedit et soluta accusamus.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-6">
          <div className="divide-y divide-gray-400">
            <CommentForm />
            <div className="py-2">
              <div className="flex bg-white shadow-lg rounded-lg">
                <div className="flex items-start px-4 py-6">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                  />
                  <div className="">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-green-500">
                        Brad Adams{" "}
                      </h2>
                      <small className="text-sm text-gray-700">22h ago</small>
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                      dolor sit amet!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFeed;
