import { client } from "../db";

const allTracersByOwner = async () => {
  const agg = [
    {
      $match: {
        owner: "Ariel",
      },
    },
    {
      $group: {
        _id: "$priority",
        tracer: {
          $push: "$$ROOT",
        },
        level: {
          $first: "$level",
        },
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
