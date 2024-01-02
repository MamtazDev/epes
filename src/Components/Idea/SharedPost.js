import React from "react";
import shohidul from "../../assets/logo/shohidul.png";
import attachment from "../../assets/logo/attachment.png";

const SharedPost = ({ allPost }) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const posts = [
    {
      avater: shohidul,
      name: "Md Shohidur Hasan",
      date: "02/06/22",
      details:
        "Eleifend nec cursus mauris quam eu semper. Est mauris fringilla vulputate ullamcorper vel duis. Ut sollicitudin consectetur netus apate edt.",
    },
    {
      avater: shohidul,
      name: "Md Shohidur Hasan",
      date: "02/06/22",
      details:
        "Eleifend nec cursus mauris quam eu semper. Est mauris fringilla vulputate ullamcorper vel duis. Ut sollicitudin consectetur netus apate edt.",
    },
    {
      avater: shohidul,
      name: "Md Shohidur Hasan",
      date: "02/06/22",
      details:
        "Eleifend nec cursus mauris quam eu semper. Est mauris fringilla vulputate ullamcorper vel duis. Ut sollicitudin consectetur netus apate edt.",
    },
    {
      avater: shohidul,
      name: "Md Shohidur Hasan",
      date: "02/06/22",
      details:
        "Eleifend nec cursus mauris quam eu semper. Est mauris fringilla vulputate ullamcorper vel duis. Ut sollicitudin consectetur netus apate edt.",
    },
  ];
  return (
    <div>
      <div className="bg-white rounded-md pb-1 mb-5">
      <div className="bg-[#323657] rounded-t-md py-3 px-6 flex items-center justify-between text-white">
          <p className="font-bold">My Posts</p>
        </div>
        <div className="m-4">
          {allPost.map((post, index) => (
            <div key={index} className="p-5 shadow my-5">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-[52px] rounded-full">
                    <img src={shohidul} />
                  </div>
                </div>
                <div>
                  <h5 className="font-bold">Nipa</h5>
                  <p className="text-[13px] text-[#A4A4A4]">{date}</p>
                </div>
              </div>
              <p className="py-3">{post.content}</p>
              <button className="flex justify-end items-center text-[#A4A4A4] ml-auto">
                <img className="mr-2" src={attachment} />1 attachment
              </button>
            </div>
          ))}
        </div>

</div>





      <div className="bg-white rounded-md pb-1">
       
        <div className="bg-[#323657] rounded-t-md py-3 px-6 flex items-center justify-between text-white">
          <p className="font-bold">Shohidur’s Shared Posts</p>
        </div>
        <div className="m-4">
          {posts.map((post, index) => (
            <div key={index} className="p-5 shadow my-5">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-[52px] rounded-full">
                    <img src={post.avater} />
                  </div>
                </div>
                <div>
                  <h5 className="font-bold">{post.name}</h5>
                  <p className="text-[13px] text-[#A4A4A4]">{post.date}</p>
                </div>
              </div>
              <p className="py-3">{post.details}</p>
              <button className="flex justify-end items-center text-[#A4A4A4] ml-auto">
                <img className="mr-2" src={attachment} />1 attachment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedPost;
