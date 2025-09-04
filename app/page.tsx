"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Highlighter } from "@/components/magicui/highlighter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-7xl font-bold tracking-tight text-gray-900">
          Hi, I’m{" "}
          <span className="text-indigo-600">
            <Highlighter action="highlight" color="#87CEFA">
              Darshan
            </Highlighter>
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A Computer Engineering graduate & aspiring Java Backend Developer,
          passionate about building real-world impactful technology solutions.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </section>
    </main>
  );
}
