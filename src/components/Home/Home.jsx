import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:pt-1 h-full ">
                    <img className="w-full" src="/assets/homepic1st.jpg" alt="image1" />
                </div>
            </aside>

            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:space-y-8 sm:flex-col lg:flex-row lg:space-x-8">
                        {/* Card with YouTube video */}
                        <div className="flex-1 w-full sm:max-w-full lg:max-w-md rounded-lg shadow-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/your-video-id"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Original text content */}
                        <div className="flex-1 max-w-xl mt-8 sm:mt-8 lg:mt-0 space-y-8 text-center sm:text-center lg:text-right lg:ml-auto">
                            <h2 className="text-3xl font-bold sm:text-3xl">
                                It's ‘Time’ to Join ‘Rainbow Gym Center’
                            </h2>
    
                                <span className="hidden sm:block text-1xl">
                                Offering the opportunity to stay healthy to people from all walks of life, Rainbow Gym Center offers avant-garde equipment and the latest fitness trends to keep you motivated, no matter your level of fitness.
                                </span>

                            <Link
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-sm hover:opacity-75"
                                to="/"
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
                                &nbsp; KNOW MORE
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full">
                    <img className="w-full" src="/assets/homepic2.jpg" alt="image1" />
                </div>
            </aside>

            

        </div>
    );
}