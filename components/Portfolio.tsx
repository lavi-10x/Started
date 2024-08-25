"use client"
import Image from 'next/image';

export default function Portfolio(){
    return(
        <div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Recent projects</h2>
    <p className="mt-1 text-gray-600 dark:text-white">Stay in the know with insights from industry experts.</p>
  </div>
  
  <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    
    <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Blog Image"
            layout="fill"
          />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white">
            Studio by GeniusTech
          </h3>
          <p className="mt-3 text-gray-600 dark:text-white">
            Produce professional, reliable streams easily leveraging GeniusTech&apos;s innovative broadcast studio
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-yellow-400 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-yellow-400">
            Preview
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    
    <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Blog Image"
            layout="fill"
          />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white">
            Onsite
          </h3>
          <p className="mt-3 text-gray-600 dark:text-white">
            Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-yellow-400 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-yellow-400">
            Preview
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    
    <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Blog Image"
            layout="fill"
          />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white">
            The complete guide to OKRs
          </h3>
          <p className="mt-3 text-gray-600 dark:text-white">
            How to make objectives and key results work for your company
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-yellow-400 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-yellow-400">
            Preview
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    
    <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Blog Image"
            layout="fill"
          />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white">
            People program models
          </h3>
          <p className="mt-3 text-gray-600 dark:text-white">
            Six approaches to bringing your People strategy to life
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-yellow-400 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-yellow-400">
            Preview
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
  </div>
  
</div>
        </div>
    )
}