import { TracerPost } from "../../../services/tracerServices";
import { client } from "../db";
import { SaveTracer } from "../../../types/type";

const saveTracer = async (props: TracerPost) => {
  try {
    // ! conect to database and then collection
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection<SaveTracer>("tracers");

    // ! Date
    const dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();
    const newFormatDate = `${day}/${month}/${year}`;

    // ! execute query
    const data = await collection.insertOne({
      title: props.title,
      priority: props.priority,
      text: props.text,
      dateCreated: newFormatDate,
      dateUpdated: newFormatDate,
      owner: "Ariel",
    });

    console.log(`A document was inserted baby with id ${data.insertedId}`);
  } finally {
    await client.close();
  }
};

export { saveTracer };
