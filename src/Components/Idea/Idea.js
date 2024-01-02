import React, { useState } from "react";
import CreatePost from "./CreatePost";
import People from "./People";
import SharedPost from "./SharedPost";

const Idea = () => {
  const [allPost, setAllPost] = useState([])
  return (
    <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <CreatePost allPost={allPost} setAllPost={setAllPost} />
        <People />
      </div>
      <div>
        <SharedPost allPost={allPost} />
      </div>
    </div>
  );
};

export default Idea;
