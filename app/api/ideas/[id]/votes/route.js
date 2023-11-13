import clientPromise from "@/library/mongo";
import { ObjectId } from "mongodb";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const IDEAS_COLLECTION = db.collection("ideas");
  return IDEAS_COLLECTION;
};

export async function PATCH(request, context) {
  const ideasCollection = await connectToDb();
  // const body = await request.json();
  const {
    params: { id }
  } = context;

  console.log(id);
  try {
    await ideasCollection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { votes: 1 } }
    );

    return Response.json({ message: "Voted!" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
