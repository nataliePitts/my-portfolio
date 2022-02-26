import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { posts } from "../data";

export default function Posts() {
  return (
    <section id="posts" className="text-gray-400 bg-purple-dark body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            בלוג שכולו דיגיטל
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            בקרוב יפתח כאן אזור חדש באתר - בלוג דיגיטל שכולו ווב
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {posts.map((posts) => (
            <a
              href={posts.link}
              key={posts.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={posts.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-light bg-purple-darkest opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-light mb-1">
                    {posts.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-purple-lightest mb-3">
                    {posts.title}
                  </h1>
                  <p className="leading-relaxed text-purple-lightest">{posts.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}