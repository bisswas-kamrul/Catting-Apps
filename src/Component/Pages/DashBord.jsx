import React from "react";
import userpic from "../../assets/my image.png";
import { IoHomeOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import group1 from "../../assets/groups-1.png";
import frend from "../../assets/Frend-.png"
import Odear1 from "../../assets/Odear.png"
import FrendRecust from "../../assets/frendRecust.png"
import group4 from "../../assets/group-4.png"
import unblock from "../../assets/unblock.png"
const DashBord = () => {
  return (
    <>
      {/* Dashboard main container */}
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        {/* Top Navbar */}
        <header className="w-full bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 border-r border-gray-700 p-5 hidden md:block">
            <img src={userpic} alt={"userpic"} className="w-[40%] pb-3" />
            <nav className="space-y-3">
              <div className="flex items-center gap-x-2  px-3 rounded-lg hover:bg-gray-700 transition">
                <IoHomeOutline />
                <h5 className="">Home</h5>
              </div>
              <div className="flex items-center gap-x-2 px-3 rounded-lg hover:bg-gray-700 transition">
                <IoChatboxEllipsesOutline />
                <h5 className="">Chat</h5>
              </div>
              <div className="flex items-center gap-x-2 px-3 rounded-lg hover:bg-gray-700 transition">
                <IoMdNotificationsOutline />
                <h5 className="">Notification</h5>
              </div>
              <div className="flex items-center gap-x-2 px-3 rounded-lg hover:bg-gray-700 transition">
                <IoSettingsOutline />
                <h5 className="">Setting</h5>
              </div>
            </nav>
          </aside>

          {/* Dashboard Content Area */}
          <section className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Groupes List</h2>
              <div className="flex items-center py-5 justify-between">
                <img src={group1} alt={"groupPng-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Friends Reunion <br></br><spn className=" font-normal ">Hi Guys, Wassup</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                  Search
                </button>
              </div>
              <div className="flex items-center py-5 justify-between">
                <img src={group1} alt={"groupPng-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Friends Forever <br></br><spn className=" font-normal ">Good to see you.</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                  Search
                </button>
              </div>
              <div className="flex items-center py-5 justify-between">
                <img src={group1} alt={"groupPng-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                 Crazy Cousins <br></br><spn className=" font-normal ">What plans today?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                  Search
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Friends</h2>
                <div className="flex items-center py-5  justify-between">
                <img src={frend} alt={"frend-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Raghav <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                  Search
                </button>
              </div>
                <div className="flex items-center py-5 justify-between">
                <img src={frend} alt={"frend-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Swathi <br></br><spn className=" font-normal ">Sure!</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                  Search
                </button>
              </div>
                <div className="flex items-center py-5 justify-between">
                <img src={frend} alt={"frend-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Kiran <br></br><spn className=" font-normal ">Hi.....</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                  Search
                </button>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">User List</h2>
               <div className="flex items-center py-5 justify-between">
                <img src={Odear1} alt={"Odear1-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Swathi <br></br><spn className=" font-normal ">Today, 2:31pm</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 +
                </button>
              </div>
               <div className="flex items-center py-5 justify-between">
                <img src={Odear1} alt={"Odear1-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                Marvin McKinney <br></br><spn className=" font-normal ">Hi Guys, Wassup</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 +
                </button>
              </div>
               <div className="flex items-center py-5 justify-between">
                <img src={Odear1} alt={"Odear1-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Tejeshwini <br></br><spn className=" font-normal ">Hi Guys, Wassup</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 +
                </button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Friend  Request</h2>
              <div className="flex items-center py-5 justify-between">
                <img src={FrendRecust} alt={"FrendRecust-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Al-amin Sir <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Accept
                </button>
              </div>
              <div className="flex items-center py-5 justify-between">
                <img src={FrendRecust} alt={"FrendRecust-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Al-amin Sir <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Accept
                </button>
              </div>
              <div className="flex items-center py-5 justify-between">
                <img src={FrendRecust} alt={"FrendRecust-1"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Al-amin Sir <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Accept
                </button>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Group</h2>
              <div className="flex items-center py-5 justify-between">
                <img src={group4} alt={"group-4"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Tejeshwini C <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Today, 8:56pm
                </button>
              </div>
              <div className="flex items-center py-5 justify-between">
                <img src={group4} alt={"group-4"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Tejeshwini C <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Today, 8:56pm
                </button>
              </div>
              <div className="flex items-center py-5 justify-between">
                <img src={group4} alt={"group-4"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                  Tejeshwini C <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Today, 8:56pm
                </button>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Unblock</h2>
               <div className="flex items-center py-5 justify-between">
                <img src={unblock} alt={"unblock"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                 Mubin <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Today, 8:56pm
                </button>
              </div>
               <div className="flex items-center py-5 justify-between">
                <img src={unblock} alt={"unblock"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                 Mubin <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Today, 8:56pm
                </button>
              </div>
               <div className="flex items-center py-5 justify-between">
                <img src={unblock} alt={"unblock"} className="w-[50px]" />
                <p className="text-[12px] font-semibold text-indigo-400">
                 Mubin <br></br><spn className=" font-normal ">Dinner?</spn>
                </p>
                <button
                  type="submit"
                  className="text-white  bg-[#1A3D64] hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 ">
                 Today, 8:56pm
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DashBord;
