import React, { useState } from "react";

const SearchBar = () => {
  const [text, settext] = useState("");

  return (
    <div>
      <form className="flex gap-5 p-5">
        <input
          required
          className="border-2 px-4 py-3 text-xl rounded outline-none"
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
