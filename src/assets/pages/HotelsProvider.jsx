import React, { useState, useEffect } from "react";
import HotelPhoto from "../components/HotelDetails/Hotelphoto";
import SearchBar from "../components/home/SearchBar";
// import Pagination from "../components/HotelDetails/Pagination";
function HotelsProvider() {
  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(12);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // useEffect(() => {
  //   setPosts(Stories);
  // }, []);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <HotelPhoto />
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mt-8 flex items-center justify-between">
            <div class="flex rounded border border-gray-100"></div>

            <form class="flex-col  items-center">
              <SearchBar />
              <div className="flex"></div>
            </form>
          </div>

          <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                  <div>
                    <div class="w-full image-cover rounded-t-md"></div>
                    <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <span class="block text-lg text-gray-800 font-bold tracking-wide">
                        <p>Book An Hotel</p>
                      </span>
                      <span class="block text-gray-600 text-sm">
                        <p>
                          Vivamus ac ligula sit amet erat luctus laoreet ac quis
                          ligula. Donec bibendum faucibus purus eget cursus.
                          Proin enim ante, scelerisque vel sem sit amet,
                          ultrices mollis risus. Praesent justo felis,
                          ullamcorper a cursus sed, condimentum at dui.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                      Paris city of light
                    </span>
                    <div class="pt-8 text-center">
                      <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                        book your room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                  <div>
                    <div class="w-full image-cover rounded-t-md"></div>
                    <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <span class="block text-lg text-gray-800 font-bold tracking-wide">
                        <p>Book An Hotel</p>
                      </span>
                      <span class="block text-gray-600 text-sm">
                        <p>
                          Vivamus ac ligula sit amet erat luctus laoreet ac quis
                          ligula. Donec bibendum faucibus purus eget cursus.
                          Proin enim ante, scelerisque vel sem sit amet,
                          ultrices mollis risus. Praesent justo felis,
                          ullamcorper a cursus sed, condimentum at dui.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                      Paris city of light
                    </span>
                    <div class="pt-8 text-center">
                      <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                        book your room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                  <div>
                    <div class="w-full image-cover rounded-t-md"></div>
                    <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <span class="block text-lg text-gray-800 font-bold tracking-wide">
                        <p>Book An Hotel</p>
                      </span>
                      <span class="block text-gray-600 text-sm">
                        <p>
                          Vivamus ac ligula sit amet erat luctus laoreet ac quis
                          ligula. Donec bibendum faucibus purus eget cursus.
                          Proin enim ante, scelerisque vel sem sit amet,
                          ultrices mollis risus. Praesent justo felis,
                          ullamcorper a cursus sed, condimentum at dui.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                      Paris city of light
                    </span>
                    <div class="pt-8 text-center">
                      <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                        book your room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                  <div>
                    <div class="w-full image-cover rounded-t-md"></div>
                    <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <span class="block text-lg text-gray-800 font-bold tracking-wide">
                        <p>Book An Hotel</p>
                      </span>
                      <span class="block text-gray-600 text-sm">
                        <p>
                          Vivamus ac ligula sit amet erat luctus laoreet ac quis
                          ligula. Donec bibendum faucibus purus eget cursus.
                          Proin enim ante, scelerisque vel sem sit amet,
                          ultrices mollis risus. Praesent justo felis,
                          ullamcorper a cursus sed, condimentum at dui.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                      Paris city of light
                    </span>
                    <div class="pt-8 text-center">
                      <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                        book your room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                  <div>
                    <div class="w-full image-cover rounded-t-md"></div>
                    <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <span class="block text-lg text-gray-800 font-bold tracking-wide">
                        <p>Book An Hotel</p>
                      </span>
                      <span class="block text-gray-600 text-sm">
                        <p>
                          Vivamus ac ligula sit amet erat luctus laoreet ac quis
                          ligula. Donec bibendum faucibus purus eget cursus.
                          Proin enim ante, scelerisque vel sem sit amet,
                          ultrices mollis risus. Praesent justo felis,
                          ullamcorper a cursus sed, condimentum at dui.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                      Paris city of light
                    </span>
                    <div class="pt-8 text-center">
                      <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                        book your room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                  <div>
                    <div class="w-full image-cover rounded-t-md"></div>
                    <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <span class="block text-lg text-gray-800 font-bold tracking-wide">
                        <p>Book An Hotel</p>
                      </span>
                      <span class="block text-gray-600 text-sm">
                        <p>
                          Vivamus ac ligula sit amet erat luctus laoreet ac quis
                          ligula. Donec bibendum faucibus purus eget cursus.
                          Proin enim ante, scelerisque vel sem sit amet,
                          ultrices mollis risus. Praesent justo felis,
                          ullamcorper a cursus sed, condimentum at dui.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                      Paris city of light
                    </span>
                    <div class="pt-8 text-center">
                      <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                        book your room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ol class="flex justify-center mt-8 gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span class="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                2
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span class="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        /> */}
      </section>
    </div>
  );
}

export default HotelsProvider;
