import React, { useState } from "react";
import { IonHeader, IonContent, IonPage, IonBackButton } from "@ionic/react";
import { CgChevronLeft } from "react-icons/cg";

const AddVehicle = () => {
  const [name, setName] = useState("Toyota Corolla");
  const [imei, setImei] = useState("861234123351604");
  const [preNum, setPreNum] = useState("+981");
  const [phoneNumber, setPhoneNumber] = useState("9876543210");
  const deviceTypes = [{ name: "Teltonika" }, { name: "Test" }];
  const deviceModels = [{ name: "Test" }, { name: "FMC130" }];
  const addItem = async (e) => {};

  return (
    <>
      <IonPage>
        <IonHeader>
          <div className="flex relative bg-[#18AFF5] justify-center items-center pt-2 pb-8">
            <button className="p-2 rounded-full border-">
              <CgChevronLeft className="" />
            </button>
            <p className="text-white font-semibold">Nom du véhicule</p>
          </div>
        </IonHeader>
        <IonContent style={{ alignItems: "center" }}>
          <div className="flex flex-col items-center text-[#2E516D]">
            <form noValidate onSubmit={addItem} className="px-8 mb-auto w-full">
              <div>
                <p className="text-sm font-medium">Vehicle Name</p>
                <input
                  name="name"
                  type="text"
                  className="p-3 border-[1px_solid_#A9A9A9] text-xs rounded-lg w-full block bg-[#A9A9A9]"
                  placeholder="Vehicle Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <p className="text-sm font-medium">Device IMEI</p>
                <input
                  name="name"
                  type="text"
                  className="p-3 border-[1px_solid_#A9A9A9] text-xs rounded-lg w-full block bg-[#A9A9A9]"
                  placeholder="Device IMEI"
                  value={imei}
                  onChange={(e) => setImei(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <p className="text-sm font-medium">SIM No.</p>
                <div className="flex">
                  <input
                    name="name"
                    type="text"
                    className="p-3 border-[1px_solid_#A9A9A9] text-xs rounded-lg w-full block bg-[#A9A9A9]"
                    placeholder=""
                    value={preNum}
                    onChange={(e) => setPreNum(e.target.value)}
                    disabled
                    required
                  ></input>
                  <input
                    name="name"
                    type="text"
                    className="p-3 border-[1px_solid_#A9A9A9] text-xs rounded-lg w-full block bg-[#A9A9A9]"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <p className="text-[#2E516D] text-sm font-medium">
                  Device Type
                </p>
                <select id="device_type">
                  {deviceTypes.map((item, index) => (
                    <option value={item.name} key={`type_${index}`}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-[#2E516D] text-sm font-medium">
                  Device Model
                </p>
                <select id="device_model">
                  {deviceModels.map((item, index) => (
                    <option value={item.name} key={`model_${index}`}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mx-5 mt-[93px]">
                <button className="bg-[#2E516D] text-white text-center font-semibold w-full py-2 rounded-[10px]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default React.memo(AddVehicle);
