"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type AvatarProps = {
  href?: string;
  src?: string;
  alt?: string;
  size?: number; // pixel size of the avatar
};

const Avatar: React.FC<AvatarProps> = ({
  href = "#",
  src = "/hero.jpg",
  alt = "Profile avatar",
  size = 80,
}) => {
  const content = (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority
      className="rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
      style={{ width: size, height: size }}
    />
  );

  return href ? (
    <Link href={href} aria-label="Open profile" className="inline-block">
      <span className="sr-only">Open profile</span>
      {content}
    </Link>
  ) : (
    content
  );
};

export default Avatar;
