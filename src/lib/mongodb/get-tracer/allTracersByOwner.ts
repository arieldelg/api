import { ObjectId } from "mongodb";
import { client } from "../db";

const allTracersByOwner = async (id: string) => {
  const agg = [
    {
      $match: {
        tracerUserId: new ObjectId(id),
      },
    },
  ];
  try {
    // ! conect to database and then collection
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection("tracers");

    // ! execute query
    const data = await collection.aggregate(agg).toArray();

    return data;
  } finally {
    // await client.close();
  }
};

export { allTracersByOwner };
