import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

import AppOverview from "../components/AppDetailsPage/AppOverview";
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
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = app;

  return (
    <Container style="space-y-10 py-6">
      {/* App Overview Section */}
      <AppOverview
        id={+id}
        image={image}
        title={title}
        companyName={companyName}
        downloads={downloads}
        ratingAvg={ratingAvg}
        reviews={reviews}
        size={size}
      />
      {/* Reviews Chart Section */}
      <section className="pb-10">
        <h4 className="heading-4">Ratings</h4>
      </section>
    </Container>
  );
}
