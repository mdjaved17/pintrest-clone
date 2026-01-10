import React, { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text);
    setText('')
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex bg-gray-900 gap-5 p-5"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="border-2 w-full px-4 py-3 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
        />
        <button className="bg-emerald-700 border-2 px-4 py-3 text-xl rounded active:scale-95 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
