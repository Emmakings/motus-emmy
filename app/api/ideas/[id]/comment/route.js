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
  const body = await request.json();
  const {
    params: { id },
  } = context;

  try {
    const data = await ideasCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $push: { comments: { ...body, commentedDate: new Date() } } }
    );

    return Response.json({ message: "Commented!" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
// return Response.json({ message: "Commented!" }, { status: 201 });
