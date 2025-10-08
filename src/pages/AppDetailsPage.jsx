import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import Container from "../components/Container";
import {
  formatLargeNumber,
  localGetInstalledApp,
  localSetInsalledApp,
} from "../utils/utils";

// {
//     "image": "https://i.ibb.co.com/nNmPx1ZV/20240829053151-Gmail.jpg",
//     "title": "Gmail - Email Management",
//     "companyName": "Google LLC",
//     "id": 2,
//     "description": "Gmail provides secure email with 15GB storage, spam filtering, and smart replies. Organize emails with labels and search effortlessly. Integrates with Google Calendar and Drive for seamless productivity. Confidential mode protects sensitive info. In 2025, AI-powered summaries streamline email handling, making it a top choice for personal and professional communication.",
//     "size": 45,
//     "reviews": 30000000,
//     "ratingAvg": 4.2,
//     "downloads": 10000000000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 2000000
//         },
//         {
//             "name": "2 star",
//             "count": 1300000
//         },
//         {
//             "name": "3 star",
//             "count": 3000000
//         },
//         {
//             "name": "4 star",
//             "count": 7000000
//         },
//         {
//             "name": "5 star",
//             "count": 19000000
//         }
//     ]
// }

export default function AppDetailsPage() {
  const { id } = useParams();
  const data = useLoaderData();

  const app = data.find((app) => app.id === +id);
  const { image, title, companyName, downloads, ratingAvg, reviews, size } =
    app;

  const [isInstalled, setIsInstalled] = useState(() => {
    const allInstalledApp = localGetInstalledApp();
    return allInstalledApp.some((item) => item === +id);
  });

  function handleInstall() {
    setIsInstalled(true);
    toast.success(`Successfully installed!`);
    localSetInsalledApp(+id);
  }

  return (
    <Container style="space-y-10 py-6">
      {/* App Overview Section */}
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
          <div className="flex justify-between gap-4 py-6 text-base max-[21.875rem]:flex-wrap max-[21.875rem]:space-y-6 sm:justify-start sm:gap-4 sm:text-sm md:gap-16 md:text-base">
            {/* Dowload */}
            <div className="space-y-1.5">
              <img src={downloadIcon} alt="Download Icon" />
              <p className="">Dowloads</p>
              <p className="text-heading text-4xl font-extrabold">
                {formatLargeNumber(downloads)}
              </p>
            </div>
            {/* Ratings */}
            <div className="space-y-1.5">
              <img src={ratingIcon} alt="Rating Icon" />
              <p className="">Average Ratings</p>
              <p className="text-heading text-4xl font-extrabold">
                {ratingAvg}
              </p>
            </div>
            {/* Reviews */}
            <div className="space-y-1.5">
              <img src={reviewIcon} alt="Review Icon" />
              <p className="">Reviews</p>
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
    </Container>
  );
}
