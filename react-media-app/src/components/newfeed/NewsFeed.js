import React from 'react';
import { Link } from 'react-router-dom';

const NewsFeed = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-6 flex-wrap">
        <div className="max-w-sm w-full lg:max-w-full lg:flex sm:mb-0 lg:mb-3">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)",
            }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <Link to="/newsfeed/2">
                  <i className="far fa-eye text-green-500"></i>
                  <span className="ml-2 text-green-500">View Feed</span>
                </Link>
              </p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <Link to="/profile/2" className="text-green-500 leading-none">
                  Jonathan Reinink
                </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mx-6 flex-wrap">
        <div className="max-w-sm w-full lg:max-w-full lg:flex sm:mb-0 lg:mb-3">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)",
            }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <Link to="/newsfeed/2">
                  <i className="far fa-eye text-green-500"></i>
                  <span className="ml-2 text-green-500">View Feed</span>
                </Link>
              </p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <Link to="/profile/4" className="text-green-500 leading-none">
                  Jonathan Reinink
                </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
