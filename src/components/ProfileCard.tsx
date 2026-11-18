
"use client";
import React from "react";
import Link from "next/link";
import Avatar from "./avatar";

type ProfileCardProps = {
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  posts?: number;
  followers?: number;
  following?: number;
  isOwnProfile?: boolean;
};

const ProfileCard = ({
  username,
  email,
  avatar,
  bio = "Welcome to my profile! I love sharing ideas and creating content.",
  posts = 0,
  followers = 0,
  following = 0,
  isOwnProfile = true,
}: ProfileCardProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

      {/* COVER SECTION */}
      <div className="relative h-32 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/20">
            BlogSpace Member
          </span>
        </div>

      </div>

      {/* PROFILE CONTENT */}
      <div className="px-6 pb-6">

        {/* AVATAR */}
        <div className="relative -mt-14 mb-4 flex justify-between items-end">

          <div className="rounded-full border-4 border-gray-900 bg-gray-900">
            <Avatar
              img={avatar}
              alt={`${username}'s profile`}
            />
          </div>

          {isOwnProfile && (
            <Link
              href="/profile/edit"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Edit Profile
            </Link>
          )}

        </div>

        {/* USER INFORMATION */}
        <div className="space-y-2">

          <h2 className="text-2xl font-bold text-white">
            {username}
          </h2>

          <p className="text-sm text-indigo-400">
            {email}
          </p>

          <p className="text-sm text-gray-300 leading-relaxed pt-2">
            {bio}
          </p>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-5"></div>

        {/* PROFILE STATISTICS */}
        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <h3 className="text-xl font-bold text-white">
              {posts}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Posts
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              {followers}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Followers
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              {following}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Following
            </p>
          </div>

        </div>

        {/* PROFILE ACTIONS */}
        <div className="mt-6 flex gap-3">

          {isOwnProfile ? (
            <Link
              href="/create-blog"
              className="flex-1 text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/20"
            >
              + Create Blog
            </Link>
          ) : (
            <button
              type="button"
              className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
            >
              Follow
            </button>
          )}

          <Link
            href="/blog"
            className="flex-1 text-center py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm transition-colors"
          >
            View Blogs
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
