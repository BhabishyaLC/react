import React from 'react'

function Image({username="Rohan",post=" HR Manager"}) {
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, distinctio.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          {username}
        </div>
        <div className="text-slate-700 da">
         {post}
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default Image