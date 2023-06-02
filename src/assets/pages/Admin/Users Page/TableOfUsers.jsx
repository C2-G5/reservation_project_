import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2'
export const TableOfUsers = () => {
    const alert = ()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}
  return (
    <section className="w-full dark:bg-gray-900 mt-5 ">
      <div className="">
      <h1 className="text-[30px] font-bold py-3">Users</h1>
        {/* Start coding here */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-[#222] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Img
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
                   Mohammad Zayed
                  </th>
                  <td className="px-4 py-3">mohammad@gmail.com</td>
                  <td className="px-4 py-3">***********</td>
                  <td className="px-4 py-3">0786856766</td>
                  <td className="px-4 py-3">😎</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <div
                      id=""
                      className="bg-white  rounded divide-y divide-gray-100 shadow "
                    >
                      <div
                        className="tooltip tooltip-error text-white"
                        data-tip="Delete"
                      >
                        <button onClick={alert} className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none ">
                          <AiOutlineDelete className="text-red-500 text-[15px]" />
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
