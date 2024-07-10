import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FlexWrapper,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GoGraph } from "react-icons/go";
import { BsCalendar3 } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { PiBagSimple } from "react-icons/pi";
import { useState } from "react";

export const cardData = [
  {
    id: 1,
    title: "4000",
    description: "Today's Sale",
    icon: <GoGraph />,
    color: "text-red-600",
    bgColor: "bg-red-300/50",
  },
  {
    id: 2,
    title: "300000",
    description: "Yearly Total Sales",
    color: "text-green-600",
    icon: <BsCalendar3 />,

    bgColor: "bg-green-300/50",
  },
  {
    id: 3,
    title: "10000",
    description: "Net Income",
    color: "text-blue-600",
    icon: <FiDollarSign />,
    bgColor: "bg-blue-300/50",
  },
  {
    id: 4,
    title: "456",
    description: "Products",
    color: "text-yellow-600",
    icon: <PiBagSimple />,
    bgColor: "bg-yellow-300/50",
  },
];

export const data = [
  {
    name: "Jan",
    stockIn: 4000,
    stockOut: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    stockIn: 3000,
    stockOut: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    stockIn: 2000,
    stockOut: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    stockIn: 2780,
    stockOut: 3908,
    amt: 2000,
  },
  {
    name: "May",
    stockIn: 1890,
    stockOut: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    stockIn: 2390,
    stockOut: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    stockIn: 3490,
    stockOut: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    stockIn: 3490,
    stockOut: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    stockIn: 3490,
    stockOut: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    stockIn: 3490,
    stockOut: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    stockIn: 3490,
    stockOut: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    stockIn: 3490,
    stockOut: 4300,
    amt: 2100,
  },
];
export const Cards = (prop) => {
  const { id, title, description, icon, color, bgColor } = prop;
  return (
    <Card className="py-6" key={id}>
      <FlexWrapper className="mx-4 items-center justify-around">
        <div className={`w-auto p-2 ${bgColor} rounded-full`}>
          <div className={color}>{icon}</div>
        </div>
        <CardContent className="h-auto p-0">
          <p className="text-md font-bold text-gray-700">{title}</p>
          <p className="text-xs text-gray-700">{description}</p>
        </CardContent>
      </FlexWrapper>
    </Card>
  );
};
const Dashboard = () => {
  const [graphData, setGraphData] = useState(data);
  return (
    <div className="w-full overflow-y-scroll">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="border-t-2 border-solid border-gray-300 my-2"></div>
      <div>
        <h2 className="text-md font-semibold mb-2">Sales Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((item) => (
            <Cards key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="h-auto bg-white rounded-md mt-4 shadow-md">
        <h2 className="text-md font-semibold pt-4 mx-4">Stock Report</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={graphData}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stockIn" stackId="a" fill="#04B4FC" />
              <Bar dataKey="stockOut" stackId="a" fill="#6C11D9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        lorem2000
      </div>
    </div>
  );
};

export default Dashboard;
