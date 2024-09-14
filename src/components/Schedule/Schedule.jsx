import React from 'react';

function Schedule() {
  const timings = [
    {
      shift: 'Morning',
      time: '6:00 AM - 12:00 PM',
      description: 'Perfect for early birds who like to kickstart their day with a workout!',
    },
    {
      shift: 'Evening',
      time: '4:00 PM - 10:00 PM',
      description: 'Ideal for those who prefer to unwind with an evening workout after a long day.',
    },
  ];

  return (
    <div className="max-w-lg mx-auto py-6 sm:py-10 px-4 sm:px-0">
      <h2 className="text-3xl sm:text-5xl text-blue-800 font-bold text-center mb-6">
        Gym Schedule
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {timings.map((timing, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{timing.shift} Shift</h3>
            <p className="text-base sm:text-lg text-blue-600 mb-4">{timing.time}</p>
            <p className="text-sm sm:text-base text-gray-700">{timing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
