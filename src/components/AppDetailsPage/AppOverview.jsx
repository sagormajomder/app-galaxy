import React, { useState } from "react";
import { toast } from "react-toastify";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import {
  formatLargeNumber,
  localGetInstalledApp,
  localSetInsalledApp,
} from "../../utils/utils";

export default function AppOverview({
  id,
  image,
  title,
  companyName,
  downloads,
  ratingAvg,
  reviews,
  size,
}) {
  const [isInstalled, setIsInstalled] = useState(() => {
    const allInstalledApp = localGetInstalledApp();
    return allInstalledApp.some((item) => item === id);
  });

  function handleInstall() {
    setIsInstalled(true);
    toast.success(`Successfully installed!`);
    localSetInsalledApp(id);
  }
  return (
    <section className="flex flex-col gap-8 border-b border-gray-300 py-10 sm:flex-row">
      <figure className="basis-1/2 overflow-hidden md:basis-1/3">
        <img className="h-full object-cover" src={image} alt={title} />
      </figure>
      {/* Overview Content */}
      <div className="basis-1/2 md:basis-2/3">
        {/* Basic Overview */}
        <div className="border-b border-gray-300 pb-5">
          <h3 className="heading-3">{title}</h3>
          <p className="text-lg md:text-xl">
            Developed by{" "}
            <span className="bg-gradient-primary bg-clip-text font-semibold text-transparent">
              {companyName}
            </span>
          </p>
        </div>
        {/* Details Overview */}
        <div className="flex justify-between gap-2.5 py-6 text-base max-[25rem]:flex-wrap max-[25rem]:space-y-6 sm:justify-start sm:gap-4 sm:text-sm md:gap-16 md:text-base">
          {/* Dowload */}
          <div className="space-y-1.5">
            <img src={downloadIcon} alt="Download Icon" />
            <p className="max-w-fit">Dowloads</p>
            <p className="text-heading text-4xl font-extrabold">
              {formatLargeNumber(downloads)}
            </p>
          </div>
          {/* Ratings */}
          <div className="space-y-1.5">
            <img src={ratingIcon} alt="Rating Icon" />
            <p className="max-w-max">Average Ratings</p>
            <p className="text-heading text-4xl font-extrabold">{ratingAvg}</p>
          </div>
          {/* Reviews */}
          <div className="space-y-1.5">
            <img src={reviewIcon} alt="Review Icon" />
            <p className="max-w-fit">Reviews</p>
            <p className="text-heading text-4xl font-extrabold">
              {formatLargeNumber(reviews)}
            </p>
          </div>
        </div>
        {/* Install Button */}
        <button
          disabled={isInstalled}
          onClick={handleInstall}
          className={`btn bg-[#00D390] ${isInstalled ? "text-gray-400" : "text-white"}`}
        >
          {isInstalled ? "Installed" : `Install Now (${size} MB)`}
        </button>
      </div>
    </section>
  );
}
