import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"         fill="currentColor">
                <path fillRule="evenodd" d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/about"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  About Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/our-services"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Our Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/our-team"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Our Team
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/testimonials"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Clients' Testimnoials
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/faq"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  FAQ
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/contact-us"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Contact Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/saved-listings"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Saved Searches
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/create-listing"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Post Property
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/search"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                    'block px-4 py-2 text-sm '
                  )}
                >
                  Search Property
                </a>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}