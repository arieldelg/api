import { client } from "../db";
import { SaveTracer, TracerPost } from "../../../types/type";

const saveTracer = async (props: TracerPost) => {
  try {
    // ! conect to database and then collection
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection<SaveTracer>("tracers");

    // ! Date
    const timeStamp = new Date().toLocaleString();
    const dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();

    // ! execute query
    const data = await collection.insertOne({
      title: props.title,
      priority: props.priority,
      text: props.text,
      complete: props.complete,
      dateCreated: timeStamp,
      dateUpdated: timeStamp,
      objectDay: {
        year: year,
        month: month,
        day: day,
      },
      owner: "Ariel",
      level: props.level,
    });

    console.log(`A document was inserted baby with id ${data.insertedId}`);
  } finally {
    await client.close();
  }
};

export { saveTracer };
