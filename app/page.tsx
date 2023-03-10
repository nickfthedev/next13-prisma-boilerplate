//import { Task } from "@prisma/client";
import axios from "axios";

type SampleData = {
  test: string
}

// Fetch Data
const getdata = async () => {
  const response = await axios.get(
    `${process.env.BASE_URL}/api/sample/`
  );
  return response.data;
};

export default async function Home() {
  const data: SampleData = await getdata();
  console.log(data.test);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="mt-4">{data.test}</p>

    </div>
  );
}
