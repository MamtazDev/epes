import React from "react";
import UpdateLink from "./UpdateLink";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import AddLink from "./AddLink";
import plus from "../../assets/family-photo/plus.png";

const LatestUpdate = () => {
  const updates = [
    {
      title: "Consectetur orci, morbi mattis elit dolor.",
      content:
        "Tempus duis in mauris ac sociis mauris, vivamus tincidunt. Vel interdum lobortis enim, ultrices nunc at volutpat. Pharetra vel, morbi lectus yurton Dictumst elementum mauris pharetra vitae diam lectus. Dignissim turpis bibendum eu vitae, vitae urna. Aenean pellentesque est  pharetr unno Ac, commodo volutpat viverra neque, imperdiet malesuada. Eget senectus quis nibh feugiat id sapien.",
      class: "bg-white p-8 border-l-8 border-[#D9594F] rounded-bl-lg my-6",
    },
    {
      title: "Consectetur orci, morbi mattis elit dolor.",
      content:
        "Tempus duis in mauris ac sociis mauris, vivamus tincidunt. Vel interdum lobortis enim, ultrices nunc at volutpat. Pharetra vel, morbi lectus yurton Dictumst elementum mauris pharetra vitae diam lectus. Dignissim turpis bibendum eu vitae, vitae urna. Aenean pellentesque est  pharetr unno Ac, commodo volutpat viverra neque, imperdiet malesuada. Eget senectus quis nibh feugiat id sapien.",
      class: "bg-white p-8 border-l-8 border-[#323657] rounded-bl-lg my-6",
    },
    {
      title: "Consectetur orci, morbi mattis elit dolor.",
      content:
        "Tempus duis in mauris ac sociis mauris, vivamus tincidunt. Vel interdum lobortis enim, ultrices nunc at volutpat. Pharetra vel, morbi lectus yurton Dictumst elementum mauris pharetra vitae diam lectus. Dignissim turpis bibendum eu vitae, vitae urna. Aenean pellentesque est  pharetr unno Ac, commodo volutpat viverra neque, imperdiet malesuada. Eget senectus quis nibh feugiat id sapien.",
      class: "bg-white p-8 border-l-8 border-[#D9594F] rounded-bl-lg my-6",
    },
  ];
  return (
    <div className="p-12">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Latest Update</p>

        {/* <!-- The button to open modal --> */}
        <label for="link-modal">
          {" "}
          <div className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case">
            <img className="mr-2" src={plus} alt="" /> Add  {" "}
            <span className="hidden md:block pl-2"> Update</span>
          </div>
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="link-modal" class="modal-toggle" />
        <label for="link-modal" class="modal cursor-pointer">
          <label class="modal-box relative p-0 rounded-md" for="">
            <AddLink />
          </label>
        </label>
      </div>
      <div>
        {updates.map((update, index) => (
          <div key={index} className={update.class}>
            <div className="flex justify-between mb-[15px]">
              <p className="text-[20px] font-[500]">{update.title}</p>
              <div className="flex gap-x-4 cursor-pointer">
                {/* <!-- The button to open modal --> */}
                <label
                  className="bg-[#CCDCFA] h-[36px] w-[36px] rounded flex justify-center items-center "
                  for="my-modal-4"
                >
                  <img  src={edit} alt="" />{" "}
                </label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <label for="my-modal-4" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <UpdateLink />
                  </label>
                </label>

                <div className="bg-[#FED9DA] h-[36px] w-[36px] rounded flex justify-center items-center">
                  <img src={del} alt="" />
                </div>
              </div>
            </div>
            <p className="text-[18px] font-[400]">{update.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdate;
