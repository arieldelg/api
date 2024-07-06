import { ObjectId } from "mongodb";
import { client } from "../db";

type Props = {
  id: string;
  options: string;
};

const getFilterTracer = async (props: Props) => {
  let agg: any = [];
  if (props.options === "false") {
    agg = [
      {
        $match: {
          tracerUserId: new ObjectId(props.id),
        },
      },
      {
        $sort: {
          dateCreated: -1,
        },
      },
    ];
  } else {
    const options = props.options.split("_");
    const key = options[0];
    const value = Number(options[1]);
    agg = [
      {
        $match: {
          tracerUserId: new ObjectId(props.id),
        },
      },
      {
        $sort: {
          [key]: value,
        },
      },
    ];
  }

  await client.connect();

  // ! conect to database and then collection
  const database = client.db("tracer-track");
  const collection = database.collection("tracers");

  // ! execute query
  const data = await collection.aggregate(agg).toArray();

  // await client.close();
  return data;
};

export default getFilterTracer;
