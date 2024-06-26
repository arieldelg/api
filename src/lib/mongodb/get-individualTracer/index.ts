import { ObjectId } from "mongodb";
import { client } from "../db";

type Props = {
  complete: boolean;
  text: string;
  title: string;
  priority: string;
};

const tracerById = async (props: string) => {
  const agg = [
    {
      $match: {
        _id: new ObjectId(`${props}`),
      },
    },
  ];
  try {
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection("tracers");
    const data = await collection.aggregate(agg).toArray();
    return data;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
};

const updateTracerById = async (id: string, props: Props) => {
  const filter = { _id: new ObjectId(id) };
  const minutes = new Date().getMinutes();
  const hour = new Date().getHours();
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const updateTracer = {
    $set: {
      complete: props.complete,
      text: props.text,
      title: props.title,
      priority: props.priority,
      dateUpdated: `${day}/${month}/${year} - ${hour}:${minutes}/hrs`,
    },
  };
  try {
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection("tracers");
    const data = await collection.updateOne(filter, updateTracer);
    return data;
  } catch (error) {
    return error;
  }
};

const deleteTracerById = async (id: string) => {
  const filter = { _id: new ObjectId(id) };

  try {
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection("tracers");
    const data = await collection.deleteOne(filter);
    return data;
  } catch (error) {
    return error;
  }
};

export { tracerById, updateTracerById, deleteTracerById };
