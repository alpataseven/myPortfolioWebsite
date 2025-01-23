// DashboardComponent.js
import { Chart, Series, Legend, Title, Tooltip } from "devextreme-react/chart"

const revenueSnapshotData = [
  { source: "Direct", value: 50 },
  { source: "Social", value: 30 },
  { source: "Referral", value: 20 },
];

const RevenueSources = () => {
  return (
    <div style={{ flex: 1, border: "1px solid #e3e6f0", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff" }}>
      <h3 style={{ marginBottom: "20px" }}>Revenue Snapshot</h3>
      <Chart
        dataSource={revenueSnapshotData}
        palette={["#4e73df", "#1cc88a", "#36b9cc"]} // Özel renk paleti
        title="Revenue Snapshot"
      >
        <Series
          argumentField="source"
          valueField="value"
          type="stackedbar"
        />
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Tooltip enabled={true} />
      </Chart>
    </div>
  )
}

export default RevenueSources;
