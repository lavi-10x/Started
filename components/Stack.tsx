"use client";

import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android",
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
  "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
  "androidstudio", "sonarqube", "figma",
];

export default function Stack() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Technology Stack</h2>
    <p className="mt-1 text-gray-600 dark:text-white">Our trusted tools for quality products and designs.</p>
  </div>
      <div className="flex max-sm:flex-col justify center gap 8 lg:gap-16 lg:items-center">
          <div className=" flex p-10 items-center justify-center rounded-lg border bg-white dark:bg-black h-full w-full ">
            <IconCloud iconSlugs={slugs} />
          </div>


        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-50">
                Collaborative tools to design stunning user experience
              </h2>
              <p className="text-gray-500 dark:text-neutral-50">
                Use our tools to explore your ideas and make your vision come true. Then share your work easily.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              {[
                { text: "<span className='font-bold'>Less routine</span>  more creativity" },
                { text: "Hundreds of thousands saved" },
                { text: "Scale budgets <span className='font-bold'>efficiently</span>" },
              ].map((item, index) => (
                <li key={index} className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-yellow-40 text-yellow-400 dark:bg-yellow-400/30 dark:text-yellow-400">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-50" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}