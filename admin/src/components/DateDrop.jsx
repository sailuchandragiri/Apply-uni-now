/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const user = localStorage.getItem("user");
console.log(user);
const DateDrop=()=> {
  return (
    <Menu as="div" className="relative float-right  inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  w-full rounded-md  bg-sidenav text-sm font-medium text-gray-700 ">
          <div className="h-10 w-18  flex-col mr-12 flex">
            <div className="h-1/2 text-left w-full text-xs pt-1 text-gray-500 ml-7">
              Date Range{" "}
            </div>
            <div className="h-1/2 w-full text-left  text-white text-lg ml-7">Today</div>
            
          </div>
          <ChevronDownIcon className="  text-white h-5 mt-7 mr-8 w-5" aria-hidden="true" />

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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-52 rounded-md mr-2 h-38 shadow-lg bg-sidenav focus:outline-none">
          
          <div className="py-1">
            <form method="POST" action="#">
    
              <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Today
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Yesterday
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  This Month
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Last Month
                </a>
              )}
            </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}


export default DateDrop;