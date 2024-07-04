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
export const Cards = () => {
  return (
    <Card className='py-4'>
      <FlexWrapper className="mx-4 items-center justify-around">
        <div className="w-auto p-2 bg-red-300/50 rounded-md"><GoGraph className="text-red-600"/></div>
          <CardContent className='h-auto p-0'>
            <p className="text-xs text-gray-700">Card Content</p>
            <p className="text-xs text-gray-700">Card Content 2</p>
          </CardContent>
      </FlexWrapper>
    </Card>
  );
};
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Cards />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
