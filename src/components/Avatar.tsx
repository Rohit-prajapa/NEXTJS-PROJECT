import React from "react";

type Props = {
  img?: string;
  alt?: string;
};

export const Avatar = ({ img, alt = "Avatar" }: Props) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <img
        src={img || "/default-avatar.png"}
        alt={alt}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/default-avatar.png";
        }}
        className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 shadow-md hover:scale-105 hover:border-indigo-400 transition-all duration-200"
      />

      {/* ONLINE STATUS */}
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
    </div>
  );
};

export default Avatar;
