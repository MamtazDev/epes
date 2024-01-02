import React from "react";
import plus from "../../assets/family-photo/plus.png";
import { Link, NavLink } from "react-router-dom";
import GetFamilyPhotoes from "../../Utils/GetFamilyPhotoes";
import photo1 from "../../assets/family-photo/photo1.png";
import photo2 from "../../assets/family-photo/photo2.png";
import photo3 from "../../assets/family-photo/photo3.png";
import photo4 from "../../assets/family-photo/photo4.png";
import photo5 from "../../assets/family-photo/photo5.png";
import photo6 from "../../assets/family-photo/photo6.png";
import photo7 from "../../assets/family-photo/photo7.png";
import photo8 from "../../assets/family-photo/photo8.png";
import photo9 from "../../assets/family-photo/photo9.png";
import photo10 from "../../assets/family-photo/photo10.png";
import photo11 from "../../assets/family-photo/photo11.png";
import photo12 from "../../assets/family-photo/photo12.png";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import view from "../../assets/icon/view.png";

const FamilyPhoto = () => {
  const [photoes] = GetFamilyPhotoes();
  console.log(photoes);
  const photos = [
    {
      picture: photo1,
    },
    {
      picture: photo2,
    },
    {
      picture: photo3,
    },
    {
      picture: photo4,
    },
    {
      picture: photo5,
    },
    {
      picture: photo6,
    },
    {
      picture: photo7,
    },
    {
      picture: photo8,
    },
    {
      picture: photo9,
    },
    {
      picture: photo10,
    },
    {
      picture: photo11,
    },
    {
      picture: photo12,
    },
  ];
  return (
    <div className="p-12">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Our Family Photo</p>
        <NavLink
          to="/dashboard/addPhoto"
          className="btn btn-sm border-0 bg-[#00C968] px-4 rounded-none normal-case"
        >
          <img className="mr-2" src={plus} alt="" /> Add{" "}
          <span className="hidden md:block pl-2"> Photo</span>
        </NavLink>
      </div>
      {/* management */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
        {photos.map((photo) => (
          <div key={photo.id}>
            <div className="familyPhoto">
              {" "}
              <img className="w-full" src={photo.picture} alt="" />
              <div className="overlay "></div>
              <div className=" photo">
                <div className="flex gap-x-4">
                  <Link to='/dashboard/photoDetails' className="bg-[#DAFFED] h-[36px] w-[36px] rounded flex justify-center items-center">
                    <img src={view} alt="" />
                  </Link>
               
                  <Link to='/dashboard/addPhoto' className="bg-[#CCDCFA] h-[36px] w-[36px] rounded flex justify-center items-center">
                    <img src={edit} alt="" />{" "}
                  </Link>

                  <div className="bg-[#FED9DA] h-[36px] w-[36px] rounded flex justify-center items-center">
                    <img src={del} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* employee */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
        {photos.map((photo) => (
          <div key={photo.id}>
            <NavLink to="/dashboard/photoDetails">
              {" "}
              <img className="w-full" src={photo.picture} alt="" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyPhoto;
