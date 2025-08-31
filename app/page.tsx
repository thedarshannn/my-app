"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Highlighter } from "@/components/magicui/highlighter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <Badge className="mb-4">Portfolio</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Hi, I’m{" "}
          <span className="text-indigo-600">
            <Highlighter action="highlight" color="#87CEFA">
              Darshan
            </Highlighter>
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A Computer Engineering graduate & aspiring Java Backend Developer,
          passionate about building real-world impactful software.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">💻 Skills</h2>
            <p className="text-gray-600">
              Java, Spring Boot, React, SQL, System Administration, IT Support
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">📚 Education</h2>
            <p className="text-gray-600">
              Computer Engineering Technology (Advanced Diploma) – Humber
              College
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
