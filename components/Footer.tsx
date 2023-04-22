import React, { ReactElement } from 'react'
import Image from 'next/image'


function Footer(): ReactElement {
    return (
        <footer className="relative bg-white pt-8 pb-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap-reverse sm:flex-row-reverse">
            <div className="w-full lg:w-6/12 px-4 flex flex-col items-center align-bottom my-10">
              <div className='max-w-50 max-h-50'>
              <Image src="/favicons/logo-lowres.png" width="400" height="200" alt="..." />
              </div>
            </div>


            <div className="w-full lg:w-3/6">
              <div className="flex flex-wrap items-center my-auto text-center lg:text-left">
                <div className="w-full lg:w-4/12 px-4 py-6">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      Terms & Conditions
                    </li>
                    <li>
                      Privacy Policy
                    </li>
                    <li>
                      Contact Us
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                © {new Date().getFullYear()}{" "}Landing Page by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Ujjwal Agarwal
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
