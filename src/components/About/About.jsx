import React from 'react'

function About() {
  return (
    <div className="mx-auto w-full max-w-full">
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

                {/* Original text content */}
                <div className="flex-1 max-w-xl mt-8 sm:mt-8 lg:mt-0 space-y-8 text-center sm:text-center lg:text-right lg:ml-auto">
                    <h2 className="text-3xl font-bold sm:text-3xl">
                         ‘Rainbow Gym Center’
                    </h2>
                    <p className='text-2xl'>Take care of your body. It's the only place you have to live.</p>


                        <span className="hidden sm:block text-1xl">
                        Offering the opportunity to stay healthy to people from all walks of life, Rainbow Gym Center offers avant-garde equipment and the latest fitness trends to keep you motivated, no matter your level of fitness.
                        </span>

                    
                </div>
            </div>
        </div>

        <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full">
            <img className="w-full" src="/assets/homepic2.jpg" alt="image1" />
        </div>
    </aside>


    

</div>
  )
}

export default About