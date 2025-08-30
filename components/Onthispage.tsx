"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface LinkType {
  id: string;
  text: string;
}

const Onthispage = ({
  htmlContent,
  className,
}: {
  htmlContent: string;
  className?: string;
}) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);
  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;
    const headingElements = temp.querySelectorAll("h1, h2, h3");
    const generatedLinks: LinkType[] = [];
    headingElements.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      generatedLinks.push({ id, text: (heading as HTMLElement).innerText });
    });
    setLinks(generatedLinks);
  }, [htmlContent]);

  return (
    <div className={cn("hidden md:block", className)}>
      <div className="sticky top-20">
        <h2>On this page</h2>
        <ul className="not-prose mt-4 space-y-2">
          {links?.map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Onthispage;
