import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ChartSection({ chartData, pair }) {
  return (
    <section className="chart-section">
      <div className="chart-header">
        <h3>{pair}</h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <AreaChart data={chartData}>
          <defs>
            <linearGradient
              id="colorRate"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#d7ff2f"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#d7ff2f"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']}
          /> 

          <Tooltip />

          <Area
            type="natural"
            dataKey="rate"
            stroke="#d7ff2f"
            fillOpacity={1}
            fill="url(#colorRate)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ChartSection;