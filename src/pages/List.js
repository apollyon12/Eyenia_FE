import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonPopover,
} from "@ionic/react";
import { connect } from "../data/connect";

import {
  MdCarRepair,
  MdBattery3Bar,
  MdSignalCellularAlt,
} from "react-icons/md";
import { ImMeter } from "react-icons/im";
import { BsFuelPumpFill, BsThreeDotsVertical } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";

const List = () => {
  const listItems = [
    {
      name: "BMW",
      speed: 60,
      fuel: 50,
      battery: 35,
      cellular: "Full",
      status: "Ew Arret 7 mi",
      statusCode: 0,
      position: "57, Street Rock Garden, 59800 Washington",
    },
    {
      name: "AUDI",
      speed: 55,
      fuel: 50,
      battery: 45,
      cellular: "Full",
      status: "En mouvement 7 mi",
      statusCode: 1,
      position: "57, Street Rock Garden, 59800 Washington",
    },
    {
      name: "BMW",
      speed: 60,
      fuel: 50,
      battery: 49,
      cellular: "Full",
      status: "Ew Arret 7 mi",
      statusCode: 0,
      position: "57, Street Rock Garden, 59800 Washington",
    },
  ];

  return (
    <IonPage id="notification" className="bg-white">
      <div className="flex relative justify-center items-center pt-4 pb-8 pl-8 pr-6">
        <button className="absolute left-8 rounded-full border-[1px] border-solid border-[#0000004f] p-2">
          <MdArrowBackIosNew className="text-[#232339] text-xl" />
        </button>
        <p className="text-[#000000c4] text-lg font-semibold">Lists</p>
      </div>
      <IonContent>
        <div className="flex gap-1 m-1 mx-4 items-center border-[1px] border-solid border-[#18567f8c] rounded-lg p-2">
          <RiSearchLine className="text-black text-2xl" />
          <input
            type="search"
            className="w-full p-3 text-xs focus:outline-none border-none focus:border-none"
            placeholder="Search Vehicle"
          ></input>
          <button className="rounded-full w-10 text-white font-bold text-center bg-[#454D56]">
            +
          </button>
        </div>
        <div className="ml-5 mr-4">
          {listItems.map((item, index) => (
            <IonCard key={`item-${index}`}>
              <IonCardHeader className="flex justify-between px-5 py-4 text-[#18567F]">
                <div className="flex items-center gap-1">
                  <MdCarRepair className="text-2xl" />
                  <p className="text-xl font-semibold">{item.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdBattery3Bar className="text-2xl" />
                  <p className="text-xs">{item.battery}%</p>
                </div>
              </IonCardHeader>
              <IonCardContent className="px-4 bg-[#18567f1f]">
                <div className="flex py-4 text-[#18567f] gap-10">
                  <div className="flex gap-2 items-center">
                    <ImMeter className="text-lg" />
                    <p className="text-xs">{item.speed}km/h</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BsFuelPumpFill className="text-lg" />
                    <p className="text-xs">{item.fuel}L</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdSignalCellularAlt className="text-lg" />
                    <p className="text-xs">{item.cellular}</p>
                  </div>
                </div>
                <div className="flex justify-between items-end py-2">
                  <div className="text-xs">
                    <p
                      className={
                        item.statusCode === 1
                          ? `text-[#19B000]`
                          : `text-[#FF0000]`
                      }
                    >
                      {item.status}
                    </p>
                    <p className="text-black">{item.position}</p>
                  </div>
                  <button>
                    <BsThreeDotsVertical
                      id={`item-${index}`}
                      className="mb-2 text-2xl text-black"
                    />
                    <IonPopover trigger={`item-${index}`} side="top">
                      <div className="bg-white rounded-lg p-3 w-28">
                        <button className="flex gap-[10px] mb-4">
                          <TbListDetails className="text-lg" />
                          <p className="text-black text-xs">Details</p>
                        </button>
                        <button className="flex gap-[10px] mb-4">
                          <RiDeleteBin6Line className="text-lg" />
                          <p className="text-black text-xs">Delete</p>
                        </button>
                        <button className="flex gap-[10px]">
                          <AiOutlineSetting className="text-lg" />
                          <p className="text-black text-xs">Setting</p>
                        </button>
                      </div>
                    </IonPopover>
                  </button>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect({
  component: React.memo(List),
});
