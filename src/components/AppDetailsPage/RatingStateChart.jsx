import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function RatingStateChart({ ratings }) {
  const sortedRatings = ratings.toSorted((a, b) => {
    return parseInt(b.name) - parseInt(a.name);
  });

  return (
    <section className="pb-10">
      <h4 className="heading-4">Ratings</h4>

      <div className="h-[31.25rem]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={sortedRatings}
            margin={{ top: 40, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Bar dataKey="count" barSize={35} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
