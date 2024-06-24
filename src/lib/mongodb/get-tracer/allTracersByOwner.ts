import { client } from "../db";

const agg = [
  {
    $match: {
      owner: "Ariel",
    },
  },
];

const allTracersByOwner = async () => {
  try {
    // ! conect to database and then collection
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection("tracers");

    // ! execute query
    const data = await collection.aggregate(agg).toArray();

    console.log(data);
    return data;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
};

export { allTracersByOwner };
