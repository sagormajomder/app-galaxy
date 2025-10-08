import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatLargeNumber } from "../../utils/utils";

export default function RatingStateChart({ ratings }) {
  const sortedRatings = ratings.toSorted((a, b) => {
    return parseInt(b.name) - parseInt(a.name);
  });

  return (
    <section className="pb-10">
      <h4 className="heading-4">Ratings</h4>

      <div className="h-[18.75rem] md:h-[25rem] lg:h-[31.25rem]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={sortedRatings}
            margin={{ top: 40, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              type="number"
              tick={{ fontSize: "0.75rem" }}
              tickFormatter={(value) => formatLargeNumber(value)}
            />
            <YAxis
              dataKey="name"
              type="category"
              scale="band"
              tick={{
                fontSize: "0.9rem",
                fontWeight: 500,
                dy: 0,
              }}
            />
            <Tooltip />
            <Bar dataKey="count" barSize={35} maxBarSize={50} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
