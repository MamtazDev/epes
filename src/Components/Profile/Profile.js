import React, { useState } from "react";
import UploadImage from "../../assets/logo/UploadImage.png";
const Profile = () => {
  const [edits, setEdites] = useState(1);
  console.log(edits);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      {edits ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] py-16 px-12">
          <div className=" bg-white  shadow rounded-md lg:w-[690px] ">
            <div className="bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white">
              <p className="table_title  py-[15px]">Personal information</p>
              <button
                className="btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white"
                onClick={() => setEdites(0)}
              >
                Edit
              </button>
            </div>

            <div className="p-[45px]">
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-24">Name</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-16">Phone number</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center">
                <p className=" text-[16px] font-[600] pr-16">Date Of Birth</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
            </div>
          </div>

          <div className=" bg-white  shadow rounded-md">
            <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
              <p className="table_title">Profile picture</p>
            </div>

            <div className="p-[45px]">
              <div className="lg:flex justify-between">
                <div>
                  <img
                    style={{ height: "223px", width: "200px" }}
                    src={file}
                    alt="profile"
                  />
                </div>

                <div className="boxshadow">
                  <input
                    className="border-0"
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white  shadow rounded-md">
            <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
              <p className="table_title">Account Information</p>
            </div>
            <div className="p-[45px]">
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-24">ID No</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-16">Password</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center">
                <p className=" text-[16px] font-[600] pr-16">Whatsapp</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className=" bg-white  shadow rounded-md">
            <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
              <p className="table_title">Social Media Links</p>
            </div>

            <div className="p-[45px]">
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-24">Facebook</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-16">Linkedin</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center">
                <p className=" text-[16px] font-[600] pr-16">Whatsapp</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] py-16 px-12">
          <div className=" bg-white  shadow rounded-md lg:w-[690px] ">
            <div className="bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white">
              <p className="table_title  py-[15px]">Personal information</p>
              <button
                className="btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white"
                onClick={() => setEdites(1)}
              >
                Update
              </button>
            </div>

            <div className="p-[45px]">
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-24">Name</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-16">Phone number</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center">
                <p className=" text-[16px] font-[600] pr-16">Date Of Birth</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
            </div>
          </div>

          <div className=" bg-white  shadow rounded-md">
            <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
              <p className="table_title">Profile picture</p>
            </div>

            <div className="p-[45px]">
              <div className="lg:flex justify-between">
                <div>
                  <img
                    style={{ height: "223px", width: "200px" }}
                    src={file}
                    alt="profile"
                  />
                </div>

                <div className="boxshadow">
                  <input
                    className="border-0"
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white  shadow rounded-md">
            <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
              <p className="table_title">Account Information</p>
            </div>
            <div className="p-[45px]">
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-24">ID No</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-16">Password</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center">
                <p className=" text-[16px] font-[600] pr-16">Whatsapp</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className=" bg-white  shadow rounded-md">
            <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
              <p className="table_title">Social Media Links</p>
            </div>
            <div className="p-[45px]">
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-24">Facebook</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center mb-[25px]">
                <p className=" text-[16px] font-[600] pr-16">Linkedin</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
              <div className="lg:flex justify-between items-center">
                <p className=" text-[16px] font-[600] pr-16">Whatsapp</p>
                <input
                  type="text"
                  placeholder=""
                  className="shadow-md rounded-[16px] h-[60px] max-w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
