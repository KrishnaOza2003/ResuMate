import Header from '@/components/custom/Header'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';

function Home() {
    return (
        <div>
            <div>

                <section className=" z-50">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                        <h1 className=" mt-10 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Build Your Resume <span className='text-primary'>With AI</span> </h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link to="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Get Started
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">

                        </div>
                    </div>
                </section>
                <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h2 className="font-bold text-3xl">How it Works ?</h2>
                    <h2 className="text-md text-gray-500">Create your AI - powered Resume in just 3 simple steps</h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <div className="flex justify-center items-center">
                                <AtomIcon className='h-8 w-8' />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-black">Describe Your Job Role</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Enter your target job title or a short prompt. Our AI will instantly generate a personalized resume structure for you.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >

                            <div className="flex justify-center items-center">
                                <Edit className='h-8 w-8' />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-black">Customize Content & Design</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Edit and fine-tune your resume sections. Choose from modern themes and tailor the design to match your personality.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <div className="flex justify-center items-center">
                                <Share2 className='h-8 w-8' />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-black">Download or Share</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Export your resume as PDF or share it via a unique link. It's job-ready and professionally formatted!
                            </p>
                        </a>


                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/dashboard"
                            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Home
