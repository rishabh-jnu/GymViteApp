import React from 'react'

function Trainig() {
  return (
    <div className="mx-auto w-full max-w-full">
      <div className='flex flex-col items-center content-center text-center'>
        <p className='flex flex-col gap-2 text-5xl text-blue-800 font-bold m-3 p-3'>
          <span>Customized Workout Plans for</span>
          <span> Every Individual</span>
        </p>
        <div className='w-[70%] mb-8'>
          <p>Whether you’re a beginner or a fitness enthusiast, our expert trainers lead groups as well as personalized, effective workout. The workout routines are designed using practical knowledge and expertise to help you achieve your fitness goals and build a community. </p>
        </div>
      </div>

      <div className='items-center justify-center text-center mb-12 mt-8'>
        <button className='bg-blue-800 text-white py-2 px-5 text-2xl rounded-full hover:scale-110 transition-transform duration-300'>Find Your Gym to Know More</button>
      </div>

      <div className='flex flex-col md:flex-row text-white mx-10 mb-10 space-y-6 md:space-y-0 md:space-x-6'>
        {/* Card 1 */}
        <div className='flex flex-col items-center text-center'>
          <img className='h-20 w-16' src="assets/whyjoin1.jpg" alt="training.jpg" />
          <span className='bg-blue-900 p-4 rounded-lg'>
            <h1 className='text-2xl font-bold'>Fitness Consultation</h1>
            <p>Gain confidence for your fitness journey with our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan.</p>
          </span>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-center text-center'>
          <img className='h-20 w-16' src="assets/whyjoin1.jpg" alt="training.jpg" />
          <span className='bg-blue-900 p-4 rounded-lg'>
            <h1 className='text-2xl font-bold'>Fitness Consultation</h1>
            <p>Gain confidence for your fitness journey with our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan.</p>
          </span>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-center text-center'>
          <img className='h-20 w-16' src="assets/whyjoin1.jpg" alt="training.jpg" />
          <span className='bg-blue-900 p-4 rounded-lg'>
            <h1 className='text-2xl font-bold'>Fitness Consultation</h1>
            <p>Gain confidence for your fitness journey with our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan.</p>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Trainig