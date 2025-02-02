import { Chart, Series, Legend, Title, Tooltip } from "devextreme-react/chart";

export default function ChartDashboard() {
    const earningsData = [
        { month: "Jan", earnings: 5000 },
        { month: "Feb", earnings: 10000 },
        { month: "Mar", earnings: 7500 },
        { month: "Apr", earnings: 15000 },
        { month: "May", earnings: 20000 },
        { month: "Jun", earnings: 25000 },
        { month: "Jul", earnings: 30000 },
        { month: "Aug", earnings: 35000 },
        { month: "Sep", earnings: 40000 },
        { month: "Oct", earnings: 42000 },
        { month: "Nov", earnings: 45000 },
        { month: "Dec", earnings: 50000 },
    ];

    return (
        <div className="chart" style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1, border: "1px solid #e3e6f0", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff" }}>
                <h3 style={{ marginBottom: "20px" }}>Earnings Overview</h3>
                <Chart dataSource={earningsData} title="Earnings Overview">
                    <Series
                        valueField="earnings"
                        argumentField="month"
                        type="line"
                        color="#4e73df"
                    />
                    <Legend visible={false} />
                    <Title text="" />
                    <Tooltip enabled={true} />
                </Chart>
            </div>
        </div>
    )
}