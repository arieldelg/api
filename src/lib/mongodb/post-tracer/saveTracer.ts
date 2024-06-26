import { client } from "../db";
import { SaveTracer, TracerPost } from "../../../types/type";

const saveTracer = async (props: TracerPost) => {
  try {
    // ! conect to database and then collection
    await client.connect();
    const database = client.db("tracer-track");
    const collection = database.collection<SaveTracer>("tracers");

    // ! Date
    const dateNow = new Date();
    const minutes = dateNow.getMinutes();
    const hour = dateNow.getHours();
    const day = dateNow.getDate();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();

    //! Cheking if minutes is a number between 1 and 9
    let newMinutes: number | string = "";
    if (minutes <= 9) {
      newMinutes = `0${day}`;
    } else {
      newMinutes = day;
    }

    const newFormatDate = `${day}/${month}/${year} - ${hour}:${newMinutes}/hrs`;

    // ! execute query
    const data = await collection.insertOne({
      title: props.title,
      priority: props.priority,
      text: props.text,
      complete: props.complete,
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
