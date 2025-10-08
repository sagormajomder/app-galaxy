import {
  Bar,
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
    <section className="border-b border-gray-300 pb-6">
      <h4 className="heading-4">Ratings</h4>

      <div className="h-[18.75rem] md:h-[25rem] lg:h-[31.25rem]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={sortedRatings}
            barGap={1}
            barCategoryGap={1}
            margin={{ top: 40, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis
              type="number"
              tick={{ fontSize: "0.75rem" }}
              tickFormatter={(value) => formatLargeNumber(value)}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={50}
              tick={{
                fontSize: "0.9rem",
                fontWeight: 500,
                dy: 0,
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip formatter={(value) => formatLargeNumber(value)} />
            <Bar
              dataKey="count"
              barSize={35}
              fill="#FF8811"
              radius={[0, 3, 3, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
