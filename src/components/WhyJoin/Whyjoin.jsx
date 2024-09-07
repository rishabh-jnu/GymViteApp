import React from 'react';

function Whyjoin() {
  return (
    <div className="mx-auto w-full max-w-full">
      <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Original text content */}
            <div className="flex-1 max-w-xl space-y-8">
              <h2 className="text-3xl font-bold sm:text-3xl">
                Why Join Rainbow Gym Fitness?
              </h2>

              <span className="text-1xl block">
                Rainbow Gym Center offers a vibrant and inclusive fitness experience tailored for everyone. Enjoy 24/7 access, cutting-edge equipment, and personalized support from expert trainers. Whether you're a beginner or a fitness enthusiast, our diverse community and innovative programs help you stay motivated and achieve your goals. Step into a world of health and wellness, where every day is a chance to shine—any time, any day, at Rainbow Gym Center.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full filter blur-sm">
          <img className="w-full h-full object-cover" src="/assets/whyjoin2.jpg" alt="image1" />
        </div>
      </aside>
      <div>
        <div className="flex-1 items-center justify-center text-center space-y-8">
          <h1 className="font-bold text-3xl sm:text-3xl py-2 m-3">
            WHY CHOOSE RAINBOW FITNESS GYM MEMBERSHIP
          </h1>
        </div>

        {/* Section for cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mx-20">
          {/* First card */}
          <div className="bg-white hover:bg-blue-950 hover:text-white shadow-lg rounded-lg p-6 text-center">
            <img className="h-16 mx-auto mb-4" src="assets/whyjoin1.jpg" alt="support.jpg" />
            <h1 className="text-xl font-bold mb-2">Support</h1>
            <p className="text-1xl">
              Rainbow Gym Center offers comprehensive support to all gym members. From personalized
              training to regular guidance, our certified trainers assist you in fulfilling your fitness goals.
              It is the perfect place for starting a journey towards a healthy lifestyle.
            </p>
          </div>

          {/* Second card */}
          <div className="bg-white hover:bg-blue-950 hover:text-white  shadow-lg rounded-lg p-6 text-center">
            <img className="h-16 mx-auto mb-4" src="assets/whyjoin1.jpg" alt="support.jpg" />
            <h1 className="text-xl font-bold mb-2">Flexibility</h1>
            <p className="text-1xl">
              Rainbow Gym Center offers unmatched flexibility. With 24/7 access and tailored workout
              plans, you can train at your own pace and schedule. Our gym is designed to fit your lifestyle.
            </p>
          </div>

          {/* Third card */}
          <div className="bg-white hover:bg-blue-950 hover:text-white  shadow-lg rounded-lg p-6 text-center">
            <img className="h-16 mx-auto mb-4" src="assets/whyjoin1.jpg" alt="support.jpg" />
            <h1 className="text-xl font-bold mb-2">Community</h1>
            <p className="text-1xl">
              Join a vibrant community of fitness enthusiasts at Rainbow Gym Center. Our welcoming
              environment ensures that you're motivated and supported by like-minded individuals.
            </p>
          </div>

          {/* Fourth card */}
          <div className="bg-white hover:bg-blue-950 hover:text-white  shadow-lg rounded-lg p-6 text-center">
            <img className="h-16 mx-auto mb-4" src="assets/whyjoin1.jpg" alt="support.jpg" />
            <h1 className="text-xl font-bold mb-2">Advanced Equipment</h1>
            <p className="text-1xl">
              Rainbow Gym Center provides cutting-edge fitness equipment. Whether your focus is
              cardio, strength, or flexibility, our state-of-the-art machines will help you achieve your
              fitness goals.
            </p>
          </div>
        </section>
      </div>

    </div>
  );
}

export default Whyjoin;
