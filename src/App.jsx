import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const App = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");

  const store = JSON.parse(localStorage.getItem("users")) || [];
  const [allUsers, setAllUsers] = useState(store);

  const formHandle = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ image, title, role, desc });

    localStorage.setItem("users", JSON.stringify(users));
    setAllUsers(users);

    setImage("");
    setTitle("");
    setRole("");
    setDesc("");
  };

  const handleDelete = (idx) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(idx, 1);
    localStorage.setItem("users", JSON.stringify(users));
    setAllUsers(users);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          Add Team Member
        </h1>

        <form
          onSubmit={formHandle}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            className="border border-slate-600 bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            type="url"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            className="border border-slate-600 bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            type="text"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border border-slate-600 bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            className="border border-slate-600 bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button className="md:col-span-2 bg-sky-500 text-white py-3 rounded-xl hover:bg-sky-600 active:scale-95 transition">
            Add User
          </button>
        </form>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {allUsers.map((elem, idx) => (
          <div
            key={idx}
            className="relative bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition"
          >
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600 transition"
            >
              <MdDelete size={22} />
            </button>

            <img
              src={elem.image}
              alt=""
              className="w-24 h-24 rounded-full object-cover object-top mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{elem.title}</h2>
            <p className="text-sky-400 font-medium">{elem.role}</p>
            <p className="text-slate-300 mt-2 text-sm">{elem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
