import { Top1, Top2, Top3 } from "@/public/icons";
import photo from "../public/image.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex flex-row bg-white pl-2 shadow-md pr-4 py-2">
      <form className="w-full px-5">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full mt-1 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Search... "
            required
          />
        </div>
      </form>

      <div className="flex flex-row space-x-2 my-2 justify-around w-40">
        <Top1 />
        <Top2 />
        <Top3 />
        <Image
            src={photo}
            alt="Photo"
            width={40}
            className="-mt-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
