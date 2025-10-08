import { useEffect, useState } from "react";
import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import { formatLargeNumber } from "../utils/utils";
import LinkButton from "./LinkButton";
import Loader from "./Loader";

export default function AppsContainer({
  data,
  search = "",
  onTotalData = () => {},
}) {
  const [isLoading, setIsLoading] = useState(true);

  let filterData = data.filter((app) =>
    app.title
      .toLowerCase()
      .includes(search.replace(/\s+/g, " ").trim().toLowerCase()),
  );

  useEffect(
    function () {
      setIsLoading(true);
      setTimeout(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        filterData = data.filter((app) =>
          app.title
            .toLowerCase()
            .includes(search.replace(/\s+/g, " ").trim().toLowerCase()),
        );
        setIsLoading(false);
      }, 800);
    },
    [data, search],
  );

  useEffect(
    function () {
      onTotalData(filterData.length);
    },
    [filterData.length, onTotalData],
  );

  if (isLoading) {
    return <Loader />;
  }
  if (filterData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-heading text-4xl font-bold">No Apps Found</p>
        <LinkButton
          styles="bg-gradient-primary text-center text-white max-w-fit mx-auto"
          to="/apps"
        >
          Show All
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="xs:grid-cols-2 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {filterData.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
}

function AppCard({ app }) {
  const { image, title, downloads, ratingAvg, id } = app;

  return (
    <Link
      to={`/appDetails/${id}`}
      className="flex flex-col justify-between gap-4 rounded-md bg-white p-4 transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <figure className="overflow-hidden rounded-lg max-[38.125rem]:w-full">
        <img className="h-48 w-full object-cover" src={image} alt={title} />
      </figure>
      <h5 className="heading-5">{title}</h5>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-sm bg-[#F1F5E8] px-2 py-1">
          <img className="h-4" src={downloadIcon} alt="Download Icon" />
          <p className="text-[#00D390]">{formatLargeNumber(downloads)}</p>
        </div>
        <div className="flex items-center gap-1 rounded-sm bg-[#FFF0E1] px-2 py-1">
          <img className="h-4" src={ratingsIcon} alt="Rating Icon" />
          <p className="text-[#FF8811]">{ratingAvg}</p>
        </div>
      </div>
    </Link>
  );
}
