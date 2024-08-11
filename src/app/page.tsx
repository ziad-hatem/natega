import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul className="flex flex-col gap-4 w-screen items-center justify-center h-screen">
        <li className="bg-gray-200 p-4 rounded-md">
          <Link href="/by_seatingNo" className="text-xl font-bold">
            البحث برقم الجلوس
          </Link>
        </li>
        <li className="bg-gray-200 p-4 rounded-md">
          <Link href="/by_name" className="text-xl font-bold">
            البحث بالاسم
          </Link>
        </li>
      </ul>
    </>
  );
}
