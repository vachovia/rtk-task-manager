import React from "react";

export default function About(props) {
  return (
    <>
      <section className="relative py-16 bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-96 bg-gray-100" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-xl mx-auto py-10 px-8 sm:px-20 bg-white rounded-md">
            <div className="text-center mb-6">
              <h4 className="font-heading text-3xl sm:text-4xl mt-2">
                About Page
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
