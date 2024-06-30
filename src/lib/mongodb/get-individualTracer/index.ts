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
  } finally {
    await client.close();
  }
};

const updateTracerById = async (id: string, props: Props) => {
  // ! caching id prom props
  const filter = { _id: new ObjectId(id) };
  // ! Date
  const timeStamp = new Date().toLocaleString();
  const dateNow = new Date();
  const day = dateNow.getDate();
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();

  // ! object to update
  const updateTracer = {
    $set: {
      complete: props.complete,
      text: props.text,
      title: props.title,
      priority: props.priority,
      dateUpdated: timeStamp,
      objectDay: {
        year: year,
        month: month,
        day: day,
      },
    },
  };
  try {
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection("tracers");
    const data = await collection.updateOne(filter, updateTracer);
    return data;
  } finally {
    await client.close();
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
  } finally {
    await client.close();
  }
};

export { tracerById, updateTracerById, deleteTracerById };
