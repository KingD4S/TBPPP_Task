import React, { useState } from "react";
import axios from "axios";
import { use } from "react";

function Home() {
  // const [todos, setTodos] = useState([]);
  // const [error, setTodo] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchtodos = async () => {
  //     try {
  //       setLoading(true);
  //     } catch (error) {
  //       setError("Failed to fetch todos");
  //     }
  //   };
  // }, []);
  return (
    <div className="bg-gray-200 max-w-lg lg:max-w-xl rounded-lg shadow-lg mx-8 sm:mx-auto p-6 ">
      <h1 className="text-2xl font-semibold text-center"> Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new todo"
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
        />
        <button className="bg-blue-600 border rounded-r-md text-white px-4 py-2 hover:bg-blue-900 duration-300">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center justify-between p-3 bg-gray-200 rounded-md">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-500">Hello</span>
          </div>
          <button className="text-red-500 hover:text-red-800 duration-300">
            Delete
          </button>
        </li>
      </ul>

      <p className="mt-4 text-center text-sm text-gray-700">0 Todo Remaining</p>
      <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-800 duration-500 mx-auto block">
        Logout
      </button>
    </div>
  );
}

export default Home;
