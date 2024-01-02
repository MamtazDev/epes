import React from "react";
import PhotoSlider from "./PhotoSlider";
import photo from "../../assets/family-photo/photo1.png";
import zoom from "../../assets/logo/zoom.png";
import download from "../../assets/logo/download.png";

const PhotoDetails = () => {
  return (
    <div className="p-4 lg:p-12">
      <p className="font-bold">Our Family Photo</p>
      <div className="my-12 p-6 bg-white rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="shadow-lg rounded-lg flex items-center justify-center relative">
          <img className="w-full" src={photo} alt="" />
          {/* modal */}
          {/* <!-- The button to open modal --> */}
          <label for="my-modal-6">
            <img className="absolute top-8 right-8" src={zoom} alt="" />
          </label>

          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="relative">
              <a href={photo} download>
              <img className="absolute top-8 right-8" src={download} alt="" />
                <img className="w-full lg:w-[50vw] lg:h-[60vh]" src={photo} />
              </a>
            </div>
          </div>
          {/* modal */}
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <p className="font-bold">Picture Name</p>
          <p className="text-sm text-[#787878]">Date: 02/06/22 </p>
          <p>
            Tempus duis in mauris ac sociis mauris, vivamus tincidunt. Vel
            interdum lobortis enim, ultrices nunc at volutpat. Pharetra vel, mob
            Dictumst elementum mauris pharetra vitae diam lectus. Dignissim
            turpis bibendum eu vitae, vitae urna. Aenean pellentesque est Ac,
            commodo volutpat viverra neque, imperdiet malesuada. Eget senectus
            quis nibh feugiat id sapien.
          </p>
        </div>
      </div>

      <PhotoSlider />
    </div>
  );
};

export default PhotoDetails;
