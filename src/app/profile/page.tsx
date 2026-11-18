"use client";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950 px-4 py-12">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        My Profile
      </h1>

      <ProfileCard
        username="Rohit Prajapati"
        email="rohit@example.com"
        avatar="/default-avatar.png"
        bio="Computer Science student | Full Stack Developer | AI/ML Enthusiast"
        posts={12}
        followers={150}
        following={80}
        isOwnProfile={true}
      />
    </main>
  );
}
