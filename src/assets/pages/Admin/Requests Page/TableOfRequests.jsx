import { CiCircleRemove , CiCircleCheck} from "react-icons/ci";
import Swal from 'sweetalert2'

export const TableOfRequests = () => {

    const alert = ()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added Successfully ',
            showConfirmButton: false,
            timer: 1800
          })
    }
  return (
    <section className="w-full dark:bg-gray-900 mt-5 ">
      <div className="">
      <h1 className="text-[30px] font-bold py-3">Requests</h1>
        {/* Start coding here */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-[#222] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Hotel Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Number Of Rooms
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Imgs
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   Amman Hotel
                  </th>
                  <td className="px-4 py-3">Amman</td>
                  <td className="px-4 py-3">5⭐ Hotel</td>
                  <td className="px-4 py-3">100</td>
                  <td className="px-4 py-3">🏢</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <div
                      id=""
                      className="bg-white flex  rounded divide-y divide-gray-100 gap-2  "
                    >
                      <div
                        className="tooltip tooltip-success text-white "
                        data-tip="Accept"
                      >
                        <button onClick={alert} className="btn bg-white hover:bg-green-200 shadow-lg hover:shadow-xl border-none ">
                          <CiCircleCheck className="text-green-500 text-[20px]" />
                        </button>
                      </div>
                      <div
                        className="tooltip tooltip-error text-white"
                        data-tip="Reject"
                      >
                        <button className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none ">
                          <CiCircleRemove className="text-red-500 text-[20px]" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
