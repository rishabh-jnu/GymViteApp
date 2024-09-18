import React from 'react';

function About() {
  return (
    <div className="mx-auto w-full max-w-full">
      {/* First Section */}
      <aside className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:h-screen min-h-[400px]">
        <div className="absolute inset-0 w-full h-full">
          <img className="object-cover w-full h-full blur-sm" src="/assets/about1.jpg" alt="image1" />
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

              <div className='flex flex-col items-start content-start'>
                <p className='p-2'>At Rainbow Gym Center, we are passionate about creating a healthier, stronger, and more vibrant community. Located in the heart of Malhani Bazar, Jaunpur, we provide an inclusive fitness experience designed to cater to everyone — from beginners to seasoned athletes. Our mission is simple: to inspire fitness, promote health, and offer an environment where everyone feels welcome.</p>
                <p className='p-2'>At Rainbow Gym Center, we combine state-of-the-art equipment with expert training programs tailored to help you achieve your unique fitness goals. Whether you're looking to improve your strength, endurance, or flexibility, our team of professional trainers will guide you every step of the way. We believe that fitness is not just about working out; it’s about enhancing your overall well-being, and we're here to support you on your journey.</p>
                <p className='p-2'>We strive to go beyond what’s expected from a typical fitness center. Rainbow Gym Center offers a wide range of training options — from strength training and cardio to group fitness classes and personal coaching. Our clean, modern facilities are designed to provide a motivating atmosphere, ensuring you have everything you need for a successful workout.</p>
                <p className='p-2'>We believe in offering affordable, accessible fitness to our community in Jaunpur. Our equipment is the latest in the industry, our team is passionate, and our environment is friendly and welcoming.</p>
                <p className='p-2'>At Rainbow Gym Center, we understand that fitness is not a one-size-fits-all journey. That's why we focus on providing personalized solutions that fit into your lifestyle. Whether you’re working towards weight loss, building muscle, or simply staying active, we are here to offer guidance, support, and motivation.</p>
                <p className='p-2'>Join us at Rainbow Gym Center and make a positive change. Together, we’ll help you achieve a healthier, happier lifestyle that lasts a lifetime.</p>

              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full">
          <img className="w-full h-full object-cover" src="/assets/homepic2.jpg" alt="image2" />
        </div>
      </aside>
    </div>
  );
}

export default About;
