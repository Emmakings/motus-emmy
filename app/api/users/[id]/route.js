import clientPromise from "@/library/mongo";
import { ObjectId } from "mongodb";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const USERS = db.collection("user");
  return USERS;
};

export async function GET(request, context) {
  const userCollection = await connectToDb();
  const { params: { id } } = context;
  const userId = new ObjectId(id);
  console.log(userId);

  try {
    const user = await userCollection.findOne({ _id: userId });
    return Response.json({ user, status: 200 });
  } catch (error) {
    console.log(error);
  }

}

export async function DELETE(request, context) {
  const userCollection = await connectToDb();
  const { params: { id } } = context;
  const userId = new ObjectId(id);
  console.log(userId);

  try {
    const user = await userCollection.deleteOne({ _id: userId });
    return Response.json({ user, status: 200 });
  } catch (error) {
    console.log(error);
  }

  return Response.json({ message: "Deleted", status: 200 })
}

