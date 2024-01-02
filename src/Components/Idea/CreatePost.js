import React, { useRef, useState } from "react";
import attachment from "../../assets/logo/attachment.png";
import album from "../../assets/logo/album.png";
import { useForm } from "react-hook-form";

const CreatePost = ({ allPost, setAllPost }) => {
  const { register, handleSubmit } = useForm();
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef();

  const onFileChangeCapture = (e) => {
    const name = e.target.files[0].name;
    console.log(name);
    setFileName(name);
  };
  const inputHandler = () => {
    inputRef.current.click();
  };

  const onSubmit = (data1) => {
    let oldVal = [];
    oldVal.push(...allPost, data1);
    setAllPost(oldVal);
    console.log(allPost);
  };

  return (
    <div>
      <div className=" bg-white  shadow rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[#323657] rounded-t-md py-2 px-6 flex items-center justify-between text-white">
            <p className="font-bold">Create Post</p>
            <button
              onClick={handleSubmit}
              className="btn btn-sm normal-case bg-white text-[#323657] font-bold hover:bg-white"
            >
              Add Post
            </button>
          </div>
          <div className="p-3 lg:p-12  shadow-b-lg ">
            <input
              {...register("content")}
              className="post textarea w-full border-0 bg-white"
              placeholder="type to share your thoughts or resources with everyone..."
            ></input>
          </div>
          <div className="flex flex-col lg:flex-row justify-around shadow">
            <div>
              <input
                {...register("attachment")}
                type="file"
                ref={inputRef}
                onChangeCapture={onFileChangeCapture}
                className="file-input w-full hidden  border-0 bg-white"
              />
              {fileName === null ? (
                <div
                  onClick={inputHandler}
                  className="border-0 bg-white rounded-lg h-[3rem] flex items-center cursor-pointer"
                >
                  <button className="btn bg-transparent text-[#787878] border-0 normal-case hover:bg-transparent">
                    <img className="mr-3" src={attachment} /> Add attachment
                  </button>
                </div>
              ) : (
                <div
                  onClick={inputHandler}
                  className="border-0 bg-white rounded-lg py-3"
                >
                  <span className="ml-3">{fileName}</span>
                </div>
              )}
            </div>
        


        

            <div>
              <input {...register("img2")} type="file" />
            </div>

            {/* <button className="btn bg-transparent text-[#787878] border-0 normal-case hover:bg-transparent">
            <img className="mr-3" src={attachment} /> Add attachment
          </button>
          <button className="btn bg-transparent text-[#787878] border-0 normal-case hover:bg-transparent">
            <img className="mr-3" src={album} /> Add image
          </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
