import React, { ReactElement, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    transparent?: boolean;
}

function Navbar(props: Props): ReactElement {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav
            className={
                (props.transparent
                    ? "top-0 absolute z-50 w-full"
                    : "relative bg-white shadow-lg") +
                " flex flex-wrap items-center justify-between px-2 py-3 "
            }
        >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link href="/">
                        <Image
                            src="/favicons/logo-lowres.png"
                            width="100"
                            height="100"
                            alt="Remine Logo"
                        />
                    </Link>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >

                        <i
                            className={
                                (props.transparent ? "text-red-500" : "text-gray-800") +
                                " fas fa-bars"
                            }
                        ></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                        (navbarOpen ? " block rounded shadow-lg" : " hidden")
                    }
                    id="example-navbar-warning"
                >


                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">

                            <Link href="/" className={
                                (props.transparent
                                    ? "lg:text-white lg:hover:animate-pulse text-gray-800"
                                    : "text-gray-800 hover:text-gray-600") +
                                " px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                            }><i
                                    className={
                                        (props.transparent
                                            ? "lg:text-gray-300 text-black"
                                            : "text-gray-500") +
                                        " fa-solid fa-house text-lg leading-lg mr-2"
                                    }
                                /> Home</Link>
                        </li>
                        <li className="flex items-center">
                            <Link href="/" className={
                                (props.transparent
                                    ? "lg:text-white lg:hover:animate-pulse text-gray-800"
                                    : "text-gray-800 hover:text-gray-600") +
                                " px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                            }><i
                                    className={
                                        (props.transparent
                                            ? "lg:text-gray-300 text-black"
                                            : "text-gray-500") +
                                        " fa-solid fa-circle-info text-lg leading-lg mr-2"
                                    }
                                /> About Us</Link>
                        </li>

                        <li className="flex items-center">
                            <Link href="/" className={
                                (props.transparent
                                    ? "lg:text-white lg:hover:animate-pulse text-gray-800"
                                    : "text-gray-800 hover:text-gray-600") +
                                " px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                            }><i
                                    className={
                                        (props.transparent
                                            ? "lg:text-gray-300 text-black"
                                            : "text-gray-500") +
                                        " fa-solid fa-address-book text-lg leading-lg mr-2"
                                    }
                                /> Contact</Link>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
