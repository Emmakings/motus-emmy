import clientPromise from "@/library/mongo";
import { ObjectId } from "mongodb";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const IDEAS_COLLECTION = db.collection("ideas");
  return IDEAS_COLLECTION;
};

export async function GET(request, context) {
  const ideasCollection = await connectToDb();
  const body = await request.json();
  const {
    params: { id },
  } = context;

  try {
    const data = await ideasCollection.findOne(
      { _id: new ObjectId(id) },
      // { $substr: { content: { ...body } } }
      { content: { ...body } }
    );

    return Response.json({ message: "Content Found!" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request, context) {
  const body = await request.json();
  const ideasCollection = await connectToDb();
  const {
    params: { id }
  } = context;

  try {
    const data = await ideasCollection.insertOne(
      { _id: new ObjectId(id) }, 
      { $substr: { content: { ...body } }}
    );

    return Response.json({ message: "Content Added!" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
