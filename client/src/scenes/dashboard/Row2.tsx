import DashboardBox from "@/components/DashboardBox";
import { Stock } from "@ant-design/plots";
import { useState, useEffect } from "react";
import { ResponsiveContainer } from "recharts";
type Props = {};

const Row2 = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://gw.alipayobjects.com/os/antfincdn/ZWgtj7pC%261/stock.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    appendPadding: [0, 20, 20, 20],
    data,
    xField: "trade_date",
    yField: ["open", "close", "high", "low"],
    slider: {},
  };

  return (
    <>
      <DashboardBox gridArea="d">
        <ResponsiveContainer width="100%" height="100%">
          <Stock {...config} />
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
