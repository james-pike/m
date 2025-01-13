import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 border-radius-dot-25 rounded-lg">


      <section class="relative rounded-lg  md:-mt-[76px] not-prose mx-1.5 my-1.5 bg-white/90 dark:bg-gray-900/90 border-radius-dot-25">



        <div class="relative max-w-7xl mx-auto px-4 sm:px-10 ">
          <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
          <div class="pt-6 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
            <div class="basis-1/2 text-center lg:text-left pb-8 md:pb-16 mx-auto">
              <a href="/reviews" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Free Website & SEO Audit!</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
              <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">

                <span class="text-sky-500">Website Design & Development Services</span>
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl mb-6 dark:text-slate-300">
                  Transform your online presence with our custom web design and development services. We help businesses create stunning, fast, and secure websites.

                </p>

                <div class=" sm:max-w-md m-auto grid grid-cols-1 border-radius-dot-25 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">
                  <div class="flex w-full">
                    <button class="btn w-full bg-blue-200 py-1 rounded-sm dark:bg-blue-400">
                      Get Started
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-red-200 py-1 rounded-sm dark:bg-red-400">
                      Book A Free Consultation
                    </button>
                  </div>

                </div>

              </div>
            </div>




            <div class="basis-1/2 ">
              
            </div>

          </div>

        </div>

      </section>
    </div>
  );
});
