import React from "react";

const InfoTable = ({ natega }: { natega: any }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              الحالة
            </th>

            <th scope="col" className="px-6 py-3">
              النسبة المئوية
            </th>
            <th scope="col" className="px-6 py-3">
              اسم الطالب
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              className={`px-6 py-4 ${
                natega.student_case_desc === "ناجح دور أول"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {natega.student_case_desc}
            </td>
            <td className="px-6 py-4">
              %{((natega.total_degree / 410) * 100).toFixed(2)}
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {natega.arabic_name}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
