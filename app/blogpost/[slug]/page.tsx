import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const htmlContent = `
  <h1>Title Here</h1>
  <p>Content goes here...</p>
`;

export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <MaxWidthWrapper className="">
      <h1>Title Here</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      {params.slug}
    </MaxWidthWrapper>
  );
}
