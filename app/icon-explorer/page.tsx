import React from "react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

// This will show all available icons when accessed in browser
export default function IconList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Icons</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Simple Icons (SI)</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(SiIcons)
          .filter(
            ([name]) =>
              name.toLowerCase().includes("java") ||
              name.toLowerCase().includes("spring") ||
              name.toLowerCase().includes("typescript") ||
              name.toLowerCase().includes("react") ||
              name.toLowerCase().includes("android") ||
              name.toLowerCase().includes("azure") ||
              name.toLowerCase().includes("git") ||
              name.toLowerCase().includes("python") ||
              name.toLowerCase().includes("bash")
          )
          .map(([name, Icon]) => (
            <div
              key={name}
              className="border p-4 rounded flex flex-col items-center"
            >
              {React.createElement(Icon, { size: 24 })}
              <span className="mt-2 text-sm">{name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
