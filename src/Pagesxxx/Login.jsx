// eslint-disable-next-line no-unused-vars
import React from "react";

function Login() {
  return (
    <div className="mt-24  card w-full h-[calc(100vh-80px)] flex items-center justify-center bg-gray-200">
      <div className="w-[1000px] p-5 bg-black rounded-lg text-white flex flex-col space-y-8 space-x-8">
        <h1 className="text-center text-3xl font-bold space-y-8 space-x-8 gap-5">
          Create A Post
        </h1>
        <br />
        <div className="flex flex-col space-y-8 space-x-8">
          <label className="text-xl font-semibold">Title:</label>
          <br />
          <input
            placeholder="Title..."
            // onChange={(event) => setTitle(event.target.value)}
            className="w-full p-3 text-lg text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <br />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-xl font-semibold">Post:</label>
          <br />
          <textarea
            placeholder="Post..."
            // onChange={(event) => setPostText(event.target.value)}
            className="w-full p-3 text-lg text-black border border-gray-300 rounded-md h-36 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <br />
        <br />
        <button
          // onClick={createPost}
          className="btn py-2 mt-4 text-lg font-semibold text-black focus:outline-none focus:ring-2"
        >
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default Login;
