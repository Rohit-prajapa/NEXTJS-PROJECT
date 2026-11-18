import React from "react";

type Props = {
  img?: string;
  title?: string;
  alt?: string;
};

const Blog = ({ img, title = "Blog", alt = "Blog" }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      {/* CIRCULAR BLOG IMAGE */}
      <div className="w-[76px] h-[76px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-md group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full rounded-full bg-gray-950 p-[3px]">
          <img
            src={img || "/default-blog.png"}
            alt={alt}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/default-blog.png";
            }}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* BLOG TITLE */}
      <p className="text-sm font-medium text-gray-200 group-hover:text-indigo-400 transition-colors">
        {title}
      </p>
    </div>
  );
};

export default Blog;
