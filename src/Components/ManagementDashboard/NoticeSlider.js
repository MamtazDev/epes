import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const NoticeSlider = () => {
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className=" bg-white  shadow rounded-md ">
        <div className="bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white">
          <p className="table_title  py-[15px]">Notice</p>
          <Link to="/dashboard/noticeBoardManagement" className="btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white">
            {" "}
            View all
          </Link>
        </div>
        <div className="p-3 lg:px-20 lg:py-10">
          <Slider {...settings}>
            <div className="px-5 lg:px-12">
              <h5 className="quote mb-[8px]">
                Consectetur orci, morbi mattis elit dolor.
              </h5>
              <p className="text-[#D9594F] text-[12px] mb-[30px]">
                19/05/22, Monday
              </p>
              <p className="text-[16px] font-[400] text-[#222222]">
                Interdum mattis aenean diam facilisis sed risus et arcu,
                blandit. Amet viverra sed dignissim ut. Condimentum cras in
                semper elit facilisis. Velit pulvinaripsum purus varius
                malesuada. Massa at vitae nisl sit hac ac amet, tempus. Risus
                feugiat elit nec pellentesque elementum non nulla. Sagittis,
                porttitor venenatis lectus sit sapien dui massa. Non nec nunc
                massa, in diam neque enim. Diam et, at congue ornare ipsum arcu,
                fringilla iaculis. Enim vitae viverra diam nunc massa neque,
                orci.
              </p>
            </div>
            <div className="px-5 lg:px-12">
              <h5 className="quote mb-[8px]">
                Consectetur orci, morbi mattis elit dolor.
              </h5>
              <p className="text-[#D9594F] text-[12px] mb-[30px]">
                19/05/22, Monday
              </p>
              <p className="text-[16px] font-[400] text-[#222222]">
                Interdum mattis aenean diam facilisis sed risus et arcu,
                blandit. Amet viverra sed dignissim ut. Condimentum cras in
                semper elit facilisis. Velit pulvinaripsum purus varius
                malesuada. Massa at vitae nisl sit hac ac amet, tempus. Risus
                feugiat elit nec pellentesque elementum non nulla. Sagittis,
                porttitor venenatis lectus sit sapien dui massa. Non nec nunc
                massa, in diam neque enim. Diam et, at congue ornare ipsum arcu,
                fringilla iaculis. Enim vitae viverra diam nunc massa neque,
                orci.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NoticeSlider;
