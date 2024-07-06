import { client } from "../db";

const closeConection = async () => {
  await client.close();
};

export default closeConection;
