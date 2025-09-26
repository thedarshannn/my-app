import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Ongoing",
      content: (
        <div key="certification">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            📚 Currently working on my Google IT Support Certification,
            sharpening my technical troubleshooting and IT fundamentals skills.
            Always learning, always improving.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/bits-net.jpg"
              alt="Google IT Certification"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/os.jpg"
              alt="Certification progress"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2025",
      content: (
        <div key="convocation">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🏆 Convocation day, January 2025: the perfect ending to my Humber
            College chapter and the beginning of a new one.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/grad.jpg"
              alt="Convocation Ceremony"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/7.jpg"
              alt="Graduation celebration"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2025",
      content: (
        <div key="smart-sprout">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🌱 Led the development of Smart Sprout, an IoT-based home garden
            system. Managed both the hardware integration and Android app,
            delivering a smooth end-to-end solution in April 2025.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/5.jpg"
              alt="Smart Sprout prototype"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/10.jpg"
              alt="Smart Sprout app"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/9.jpg"
              alt="Smart Sprout hardware"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/8.jpg"
              alt="Smart Sprout sensors"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2023",
      content: (
        <div key="journey-to-canada">
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            ✈️ Landed in Canada — full of excitement, challenges, and new
            opportunities to look forward to.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/journey/1.jpg"
              alt="Flight to Canada"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/2.jpg"
              alt="BAPS Mandir"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/3.jpg"
              alt="College Life"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/journey/4.jpg"
              alt="Settling in Canada"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
