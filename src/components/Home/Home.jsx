import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const data = [
        {
            naam: 'Rishabh',
            img: '/assets/homepic1st.jpg',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing el',
        },
        {
            naam: 'Hello',
            img: '/assets/homepic2.jpg',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing el',
        },
        {
            naam: 'World',
            img: '/assets/gymlogo.png',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing el',
        },
        {
            naam: 'Guddu',
            img: '/assets/whyjoin1.jpg',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing el',
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // Mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mx-auto w-full max-w-full">
            {/* First Image Section */}
            <aside className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:h-screen min-h-[400px]">
                <div className="absolute inset-0 w-full h-full">
                    <img className="object-cover w-full h-full" src="/assets/homepic1st.jpg" alt="image1" />
                </div>
            </aside>



            {/* YouTube Section */}
            <aside className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:space-y-8 sm:flex-col lg:flex-row lg:space-x-8">
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

                <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full ">
                    <img className="w-full" src="/assets/homepic2.jpg" alt="image2" />
                </div>
            </aside>

            {/* Slider Section */}
            <aside className="relative  text-black rounded-lg sm:mx-16 mx-2 sm:py-16 mb-52">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    {/* Container for centering slider */}
                    <div className="absolute inset-0 pt-16 mt-20 flex justify-center items-center">
                        <div className="w-3/4">
                            <Slider {...settings}>
                                {data.map((d, index) => (
                                    <div key={index} className=" h-full text-black rounded-xl shadow-lg my-8 bg-white">
                                        <div className="rounded-t-xl h-56 bg-indigo-500 flex justify-center items-center">
                                            <img src={d.img} alt={d.naam} className="h-44 w-44 rounded-full" />
                                        </div>

                                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                                            <p className="text-xl font-semibold">{d.naam}</p>
                                            <p className="text-gray-700">{d.review}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                {/* Background image */}
                <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-[400px]">
                    <img className="w-full h-[400px] md:h-auto object-cover" src="/assets/homepic3.png" alt="image3" />
                </div>
            </aside>
        </div>
    );
}
