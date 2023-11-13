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
  // Retrieving the connected collection
  const ideasCollection = await connectToDb();
  const {
    params: { id }
  } = context;

  console.log(id);

  try {
    const ideas = await ideasCollection.find(
        {"creator.userId": id}
    ).toArray();
    if (ideas.length > 0) {
      return Response.json({ ideas: ideas }, { status: 200 });
    } else {
      return Response.json({ message: "No data found!" });
    }
  } catch (error) {
    console.log("error");
  }

  return Response.json({ message: "REGISTRATION" });
}