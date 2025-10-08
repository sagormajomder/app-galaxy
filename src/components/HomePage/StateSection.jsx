import React from "react";

export default function StateSection() {
  return (
    <section className="bg-gradient-primary space-y-10 py-14 text-center text-white">
      <h2 className="heading-2 text-white">
        Trusted by Millions, Built for You
      </h2>
      {/* States */}
      <div className="mx-auto flex max-w-[51.25rem] flex-col justify-between gap-3 sm:flex-row sm:gap-0">
        {/* state 1 */}
        <div className="space-y-2 p-4 sm:space-y-4">
          <p className="opacity-80">Total Downloads</p>
          <p className="text-6xl font-bold tracking-wide">29.6M</p>
          <p className="opacity-80">21% more than last month</p>
        </div>
        {/* state 2 */}
        <div className="space-y-2 p-4 sm:space-y-4">
          <p className="opacity-80">Total Reviews</p>
          <p className="text-6xl font-bold tracking-wide">906K</p>
          <p className="opacity-80">46% more than last month</p>
        </div>
        {/* state 3 */}
        <div className="space-y-2 p-4 sm:space-y-4">
          <p className="opacity-80">Active Apps</p>
          <p className="text-6xl font-bold tracking-wide">132+</p>
          <p className="opacity-80">31 more will Launch</p>
        </div>
      </div>
    </section>
  );
}
