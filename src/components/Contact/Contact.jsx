import React from 'react';

function Contact() {
    return (
        <div className="mx-auto w-full max-w-full">
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-8 text-center">
                        <div className="flex-1 max-w-xl space-y-8">
                            <h2 className="text-6xl md:text-6xl font-bold sm:text-4xl">
                                Contact us
                            </h2>
                            <div className='py-3 my-3'>
                                <hr className="w-14 mx-auto border-t-8 border-yellow-300" />
                            </div>
                            <span className="text-3xl md:text-3xl sm:text-2xl block">
                                Please fill the following form if you are interested in partnering with us and contact us for any inquiries.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 w-full sm:pt-1 pt-12 h-full filter blur-sm">
                    <img className="w-full h-full object-cover" src="/assets/whyjoin2.jpg" alt="image1" />
                </div>
            </aside>

            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 p-8'>
                {/* Address Section */}
                <div className='w-full md:w-1/2 bg-blue-50 p-6 rounded-lg shadow-lg'>
                   
                    <div className='space-y-4'>
                        <div>
                            <div className='flex items-center'>                             
                                <img src='/assets/location.png' alt='Address' className='h-6 w-6 mr-2' />
                                <h2 className='text-2xl font-bold'>Address</h2>
                            </div>
                            <div className='text-lg pl-8'>
                                <h1 className='font-bold'>Rainbow Gym Center</h1>
                                <p>Malhani Bazar Jaunpur,<br />Next to Malhani Bazar Chauraha,<br />Jaunpur, Uttar Pradesh - 222003</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src='/assets/telephone.jpg' alt='Telephone' className='h-6 w-6 mr-2' />
                            <span className='text-lg'>+91 12345 67890</span>
                        </div>
                        <div className='flex items-center'>
                            <img src='/assets/phone.png' alt='Mobile' className='h-6 w-6 mr-2' />
                            <span className='text-lg'>+91 98765 43210</span>
                        </div>
                        <div className='flex items-center'>
                            <img src='/assets/email.png' alt='Email' className='h-6 w-6 mr-2' />
                            <span className='text-lg'>info@rainbowgym.com</span>
                        </div>
                        <div className='flex items-center'>
                            <img src='/assets/global.png' alt='Website' className='h-6 w-6 mr-2' />
                            <span className='text-lg'>
                                <a href='http://localhost:5173/' className='text-blue-500 hover:underline'>
                                    www.rainbowgymcenter.com
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className='w-full md:w-1/2 bg-blue-50 p-6 rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block text-lg font-medium'>Name</label>
                            <input type='text' id='name' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Name' />
                        </div>
                        <div>
                            <label htmlFor='contact' className='block text-lg font-medium'>Contact</label>
                            <input type='tel' id='contact' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Contact Number' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-lg font-medium'>Email</label>
                            <input type='email' id='email' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Email' />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-lg font-medium'>Message</label>
                            <textarea id='message' rows='4' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Message'></textarea>
                        </div>
                        <button type='submit' className='w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
