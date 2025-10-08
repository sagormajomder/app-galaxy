import { useLoaderData, useParams } from "react-router";

import AppOverview from "../components/AppDetailsPage/AppOverview";
import RatingStateChart from "../components/AppDetailsPage/RatingStateChart";
import Container from "../components/Container";

export default function AppDetailsPage() {
  const { id } = useParams();
  const data = useLoaderData();

  const app = data.find((app) => app.id === +id);
  const {
    image,
    title,
    description,
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
      <RatingStateChart ratings={ratings} />
      {/* Description section */}
      <section className="pb-10">
        <h4 className="heading-4 mb-2">Description</h4>
        <p>{description}</p>
      </section>
    </Container>
  );
}
