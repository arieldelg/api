import { client } from "../db";

const userAuth = async (email: string) => {
  const arrg = [
    {
      $match: {
        email: email,
      },
    },
  ];
  try {
    await client.connect();
    const database = client.db("userAuth");
    const collection = database.collection("User");
    const data = await collection.aggregate(arrg).toArray();
    return data;
  } finally {
    // await client.close();
  }
};

export { userAuth };
