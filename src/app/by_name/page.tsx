"use client";
import React, { useEffect, useState } from "react";
import InfoTable from "../components/infoTable";
import axios from "axios";

const Page = () => {
  const [natega, setNatega] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [deepsearch, setDeepsearch] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    if (name.length < 3) {
      alert("الاسم يجب ان يكون ثلاثي علي الاقل");
      return;
    }
    (async () => {
      setIsLoading(true);
      setNatega(null);
      try {
        const response = await axios.post(
          deepsearch ? "/api/nategabyname/deepsearch" : "/api/nategabyname",
          {
            name: name,
          }
        );
        if (response.data.length === 0) {
          setError("لا يوجد نتايج");
        } else {
          setNatega(response.data);
        }
      } catch (error: any) {
        setError(error.response.data);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <div className="flex flex-col mt-10 items-center justify-center min-h-screen">
      <ul className="mb-4 text-right w-[80%] max-w-[500px]">
        <li className="text-bold text-xl">:تعليمات البحث بالاسم</li>
        <li className="text-gray-500 mr-1">
          يجب ان يكون الاسم ثلاثي علي الاقل
        </li>
        <li className="text-gray-500 mr-1">
          عند كتابة الاسماء المركبه لا تضع مسافه
        </li>
        <li className="text-gray-500 mr-1">
          يجب ان يكون الاسم في اللغة العربية
        </li>
      </ul>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center justify-center gap-4 w-[80%] max-w-[500px]"
      >
        <h1 className="text-2xl font-bold">البحث بالاسم</h1>
        <input
          type="text"
          placeholder="الاسم"
          minLength={3}
          className="w-full p-2 rounded-md text-center border-2 outline-none border-gray-300"
        />
        {error != "لا يوجد نتايج" && (
          <div>
            {deepsearch && (
              <button
                onClick={() => setDeepsearch(false)}
                className="text-white bg-blue-7000 w-full max-w-fit justify-center hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                التغير الي البحث العادي
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-blue-7000 w-full max-w-fit justify-center hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              {!isLoading ? null : (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {isLoading ? "جاري البحث" : deepsearch ? "البحث بعمق" : "ابحث"}
            </button>
          </div>
        )}
        {error == "لا يوجد نتايج" && (
          <p className="text-red-500 font-bold">{error}</p>
        )}
        {error == "لا يوجد نتايج" && (
          <div className="flex flex-row items-center justify-center gap-2">
            <button
              onClick={() => {
                setError("");
              }}
              className="text-white bg-blue-7000 w-full max-w-fit justify-center hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              لا
            </button>
            <button
              onClick={() => {
                setDeepsearch(true);
                setError("");
              }}
              className="text-white bg-blue-7000 w-full max-w-fit justify-center hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              هل تريد تجربة البحث العميق ؟
            </button>
          </div>
        )}
      </form>

      <div className="w-[95%] max-w-fit mt-8">
        {natega && <InfoTable natega={natega} />}
      </div>
    </div>
  );
};

export default Page;
