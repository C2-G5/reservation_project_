export const TableOfRooms = () => {
  return (
   <div className="mt-6">
    <h1 className="text-[30px] font-bold mb-3">Rooms</h1>
    <div className="relative overflow-x-auto rounded-2xl shadow-md">
        
      <table className="w-full text-sm text-left text-gray-500   ">
        <thead className="text-xs text-white uppercase bg-[#222] ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Room No
            </th>
            <th scope="col" className="px-6 py-3">
              Hotel
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Availabilty
            </th>
            <th scope="col" className="px-6 py-3">
              Imgs
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              101
            </th>

            <td>Amman</td>
            <td>2 bed inside it with view</td>
            <td>Yes ✔</td>
            <td>🛏</td>
          </tr>
         
        </tbody>
      </table>
    </div>
   </div>
  );
};
