import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FlexWrapper,
} from "@/components/ui/card";
import { GoGraph } from "react-icons/go";
import { BsCalendar3 } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { PiBagSimple } from "react-icons/pi";

export const cardData = [
  {
    id: 1,
    title: "4000",
    description:"Today's Sale",
    icon: <GoGraph />,
    color: "text-red-600",
    bgColor: "bg-red-300/50"
  },
  {
    id: 2,
    title: "300000",
    description:"Yearly Total Sales",
    color:'text-green-600',
    icon:<BsCalendar3/> ,

    bgColor:'bg-green-300/50'
  },
  {
    id: 3,
    title: "10000",
    description:"Net Income",
    color:'text-blue-600',
    icon: <FiDollarSign /> ,
    bgColor:'bg-blue-300/50'
  },
  {
    id: 4,
    title: "456",
    description:"Products",
    color:'text-yellow-600',
    icon: <PiBagSimple/>,
    bgColor:'bg-yellow-300/50'
  },
]
export const Cards = (prop) => {
  const {id, title, description, icon , color, bgColor}  = prop;
  return (
    <Card className='py-6' key={id}>
      <FlexWrapper className="mx-4 items-center justify-around">
        <div className={`w-auto p-2 ${bgColor} rounded-full`}>
          <div className={color}>{icon}</div>
        </div>
          <CardContent className='h-auto p-0'>
            <p className="text-md font-bold text-gray-700">{title}</p>
            <p className="text-xs text-gray-700">{description}</p>
          </CardContent>
      </FlexWrapper>
    </Card>
  );
};
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="border-t-2 border-solid border-gray-300 my-2"></div>
      <h2 className="text-md font-semibold mb-2">Sales Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
