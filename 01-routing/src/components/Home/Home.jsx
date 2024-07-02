import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <aside className="relative bg-gray-800 text-white rounded-lg p-8 shadow-lg sm:p-16">
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Get the App Today
                        <span className="block mt-2 text-xl sm:text-2xl">Experience the Future</span>
                    </h2>

                    <Link
                        className="inline-flex items-center mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-500"
                        to="/download"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download Now
                    </Link>
                </div>

                <div className="absolute inset-0 flex items-center justify-center h-full opacity-25">
                    <img className="max-w-sm" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="app preview" />
                </div>
            </aside>

            <div className="grid place-items-center mt-12">
                <img className="sm:w-96 w-64" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="app screenshot" />
            </div>

            <h1 className="text-center text-3xl sm:text-5xl py-8 font-semibold">Welcome to the Future of Connectivity</h1>
        </div>
    );
}
