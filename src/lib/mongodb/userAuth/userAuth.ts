import { client } from "../db";

type Props = {
  email: string;
};

const userAuth = async (props: Props) => {
  const arrg = [
    {
      $match: {
        email: props.email,
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
    await client.close();
  }
};

export { userAuth };
