import React from "react";

const CardProject = () => {
  return (
    <figure className="rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0">
      <img
        className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
        src="/profile.png"
        alt=""
        width="384"
        height="512"
      />
      <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that i have seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default CardProject;
