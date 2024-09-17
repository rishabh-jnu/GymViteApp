import React from 'react'

function About() {
  return (
    <div className="mx-auto w-full max-w-full">
      {/* First Section */}
      <aside className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:py-16 py-8">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-40 space-y-8 text-center sm:text-right sm:ml-auto">
            {/* You can add some content here */}
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:pt-1 h-full">
          <img className="w-full h-full object-cover" src="/assets/homepic1st.jpg" alt="image1" />
        </div>
      </aside>

      {/* Second Section */}
      <aside className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:py-16 py-8">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center sm:space-y-8 sm:flex-col lg:flex-row lg:space-x-8 lg:mx-auto lg:max-w-3xl">

            {/* Text content */}
            <div className="flex flex-col w-full space-y-8 text-center lg:text-center mx-auto">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-5xl">
                Rainbow Gym Center
              </h2>
              <p className="text-lg sm:text-2xl">
                Take care of your body. It's the only place you have to live.
              </p>

              <span className="block text-base sm:text-xl">
                Offering the opportunity to stay healthy to people from all walks of life, Rainbow Gym Center offers avant-garde equipment and the latest fitness trends to keep you motivated, no matter your level of fitness.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full">
          <img className="w-full h-full object-cover" src="/assets/homepic2.jpg" alt="image2" />
        </div>
      </aside>
    </div>
  )
}

export default About;
