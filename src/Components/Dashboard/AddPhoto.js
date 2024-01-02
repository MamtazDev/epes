import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import addPhoto from "../../assets/logo/addPhoto.png";
import PhotoSlider from "./PhotoSlider";
import download from "../../assets/logo/download.png";
import {ImCross} from "react-icons/im"

const AddPhoto = () => {
  // add photo input field section function
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef();
  const onFileChangeCapture = (e) => {
    const name = e.target.files[0];
    console.log(name);

    var reader = new FileReader();
    var url = reader.readAsDataURL(name);
    console.log(url);

    const objectUrl = URL.createObjectURL(name);
    setFileName(objectUrl);
  };

  const inputHandler = () => {
    inputRef.current.click();
  };

  // form control function
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState([]);

  const onSubmit = (data1) => {
    setData([...data, fileName]);

    // console.log(data1);
    // let oldVal = [];
    // oldVal.push(...data, data1);
    // setData(oldVal);
  };
  const onDelete = () => {
    setData([]);
  } 
  console.log("Photos data: ", data);
  return (
    <div className="p-4 lg:p-12">
      <p className="font-bold">Our Family Photo</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-12 p-6 bg-white rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="shadow-lg rounded-lg flex items-center justify-center">
          <input
            {...register("photo")}
            type="file"
            ref={inputRef}
            onChangeCapture={onFileChangeCapture}
            className="file-input w-full hidden  border-0 bg-white"
          />
          {fileName === null ? (
            <div onClick={inputHandler} className="cursor-pointer">
              <img className="w-full" src={addPhoto} alt="" />
            </div>
          ) : (
            // <div className="w-full">
            //   <img className="w-full" src={fileName} alt="img" />
            // </div>
            <div className="relative w-full">
           <ImCross onClick={onDelete} className="absolute top-8 right-8"/>
              <img className="w-full" src={fileName} />
           
          </div>
          )}
        </div>

        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="input w-full mb-2 shadow-lg"
          />
          <input
            {...register("date")}
            type="date"
            placeholder="Date"
            className="input w-full my-2 shadow-lg"
          />
          <textarea
            {...register("description")}
            rows="12"
            className="textarea w-full my-2 shadow-lg"
            placeholder="Description"
          ></textarea>
          <button className="btn btn-md" type="submit">
            Add
          </button>
        </div>
      </form>

      {data.map((pic, index) => (
        <PhotoSlider key={index} pic={pic}></PhotoSlider>
      ))}
    </div>
  );
};

export default AddPhoto;
