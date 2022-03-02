/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const user = localStorage.getItem("user");
console.log(user);
export default function Example() {
  

  return (
    <Menu as="div" className="relative float-right  inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-sidenav text-sm font-medium text-gray-700 ">
          <img src="logout.png" alt="logout" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 h-32 shadow-lg bg-sidenav focus:outline-none">
          <div className="text-white text-sm pl-8 mt-7 mb-5 pr-16">{user}</div>
          <hr className="border-gray-900" />
          <div className="py-1">
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/">
                  <button
                    type="submit"
                    className={classNames(
                      active ? "text-white" : "text-white",
                      "block w-full text-left px-11 py-2 text-lg"
                    )}
                  >
                    Log-Out
                  </button>
                  </Link>

                  
                  
                )}

              </Menu.Item>

      
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
