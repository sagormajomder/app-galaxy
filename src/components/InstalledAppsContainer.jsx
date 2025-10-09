import downloadIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import { formatLargeNumber } from "../utils/utils";
export default function InstalledAppsContainer({ apps, onRemoveApp }) {
  return (
    <div className="space-y-4">
      {apps.map((app) => (
        <InstalledAppCard key={app.id} app={app} onRemoveApp={onRemoveApp} />
      ))}
    </div>
  );
}

function InstalledAppCard({ app, onRemoveApp }) {
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className="xs:flex-row flex flex-col gap-6 rounded-md bg-white p-4 transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="xs:gap-6 flex gap-2 max-[17.5rem]:flex-col">
        <figure className="overflow-hidden rounded-lg">
          <img
            className="h-20 w-20 object-cover max-[17.5rem]:w-full"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex flex-col justify-between">
          <h5 className="heading-5">{title}</h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img className="h-4" src={downloadIcon} alt="Download Icon" />
              <p className="text-[#00D390]">{formatLargeNumber(downloads)}</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4" src={ratingsIcon} alt="Rating Icon" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>
            <p>{size} MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemoveApp(id)}
        className="btn my-auto ml-auto bg-[#00D390] text-white"
      >
        Uninstall
      </button>
    </div>
  );
}
