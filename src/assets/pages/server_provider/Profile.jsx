import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";

const Profile = () => {
  const [choise, setChoise] = useState("profilePage");

  return (
    <>
      {/* Menu */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-[#5aa1c2] rounded-lg sm:hidden hover:bg-black transition"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 w-64 bg-gray-950 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto"
          style={{ backgroundColor: "black" }}
        >
          <ul className="space-y-2 font-medium">
            <li>
              <span className="flex-1 ml-3 whitespace-nowrap text-white font-bold uppercase">
                My ProfilePage
              </span>
            </li>
            <li>
              <a
                onClick={() => {
                  setChoise("profilePage");
                }}
                className="flex items-center p-2 text-white rounded-lg  hover:bg-[#5aa1c2]"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  ProfilePage
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  setChoise("Booking");
                }}
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#5aa1c2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-ui-checks"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">My Hotels</span>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  setChoise("sitings");
                }}
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#5aa1c2]"
              >
                <Icon path={mdiCog} size={1} />
                <span className="flex-1 ml-3 whitespace-nowrap">sitings</span>
              </a>
            </li>

            <li>
              <a
                smooth="true"
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#5aa1c2]"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white transition duration-75 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 m-5 sm:ml-64">
        <div className="p-4 bg-white rounded-lg">
          {choise === "profilePage" && (
            <>
              <h1 class="text-2xl md:text-3xl pl-2 my-10 border-l-4 text-black mt-10  font-sans font-bold border-[#5aa1c2] ">
                PROFILEPage
              </h1>
              <div className="bg-white overflow-hidden mx-5 shadow rounded-lg border border-[#5aa1c2]">
                <div className="border-t border-[#5aa1c2] px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black">
                        user name
                      </dt>
                      <dd className="mt-1 text-sm text-[#5aa1c2] sm:mt-0 sm:col-span-2">
                        essam
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black">email</dt>
                      <dd className="mt-1 text-sm text-[#5aa1c2] sm:mt-0 sm:col-span-2">
                        essam@gmail.com
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black">
                        Phone number
                      </dt>
                      <dd className="mt-1 text-sm text-[#5aa1c2] sm:mt-0 sm:col-span-2">
                        (+962) 786992500
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-black">Gender</dt>
                      <dd className="mt-1 text-sm text-[#5aa1c2] sm:mt-0 sm:col-span-2">
                        Male
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </>
          )}

          {choise === "Booking" && (
            <>
              <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                  <span className="bg-clip-text uppercase">MY HOTELS</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5aa1c2]"></span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="relative">
                      <img
                        className="w-full"
                        src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </div>

                    <div className="bg-white">
                      <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                        <li>
                          <div className="px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Hotel name:
                                <span className="text-[#5aa1c2]"> spy</span>
                              </h3>
                            </div>
                            <div class="mt-4 flex items-center justify-between">
                              <p class="text-sm font-medium text-black">
                                Location:
                                <span className="text-[#5aa1c2]"> zarqa</span>
                              </p>
                            </div>
                            <div class="mt-4 flex items-center justify-between">
                              <p class="text-sm font-medium text-black">
                                Booking Date:
                                <span className="text-[#5aa1c2]">
                                  {" "}
                                  31/05/2023
                                </span>
                              </p>
                            </div>
                            <div class="mt-4 flex items-center justify-between">
                              <p class="text-sm font-medium text-black">
                                Booking Date:
                                <span className="text-[#5aa1c2]">
                                  {" "}
                                  30/06/2023
                                </span>
                              </p>
                            </div>

                            <div class="mt-4 flex items-center justify-between">
                              <p class="text-sm font-medium text-black">
                                People numder:
                                <span className="text-[#5aa1c2]"> 5</span>
                              </p>
                            </div>
                            <button class="bg-[#5aa1c2] text-white hover:bg-white hover:text-black border border-[#5aa1c2] font-bold py-2 px-4 rounded-lg transition mt-5">
                              Delete
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {choise === "sitings" && (
            <>
              <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                  <span className="text-black uppercase">Edit info</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5aa1c2]"></span>
                </h1>

                <main className="w-full flex flex-col items-center justify-center sm:px-4">
                  <div className="w-full space-y-6 sm:max-w-md">
                    <div className="text-center"></div>
                    <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                      <form className="space-y-5">
                        <div>
                          <label className="font-medium">New name</label>
                          <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#5aa1c2] shadow-sm rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="font-medium">New email</label>
                          <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#5aa1c2] shadow-sm rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="font-medium">New Phone</label>
                          <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#5aa1c2] shadow-sm rounded-lg"
                          />
                        </div>
                        <button className="w-full px-4 py-2 text-black font-medium bg-[#5aa1c2] hover:bg-[#5aa1c2]  rounded-lg duration-150">
                          Submit edit
                        </button>
                      </form>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                </main>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
