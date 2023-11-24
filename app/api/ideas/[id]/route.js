import clientPromise from "@/library/mongo";
import { ObjectId } from "mongodb";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const IDEAS = db.collection("ideas");
  return IDEAS;
};

export async function GET(request, context) {
  const ideasCollection = await connectToDb();
  const {
    params: { id },
  } = context;
  const ideaId = new ObjectId(id);
  console.log(ideaId);

  try {
    const ideas = await ideasCollection.findOne({ _id: ideaId });
    return Response.json({ ideas, status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// export async function DELETE(request, context) {
//   const userCollection = await connectToDb();
//   const {
//     params: { id },
//   } = context;
//   const userId = new ObjectId(id);
//   console.log(userId);

//   try {
//     const user = await userCollection.deleteOne({ _id: userId });
//     return Response.json({ user, status: 200 });
//   } catch (error) {
//     console.log(error);
//   }

//   return Response.json({ message: "Deleted", status: 200 });
// }

// export async function PATCH(request, context) {
//   const userCollection = await connectToDb();
//   const body = await request.json();
//   const { userName } = body;
//   const { params: { id } } = context;
//   const userId = new ObjectId(id);
//   console.log(userId);

//   try {
//     const { _id } = await userCollection.findOneAndUpdate(
//       { _id: userId },
//       { $set: { userName, updatedAt: new Date() } }
//     );
//     return Response.json({
//       message: `User with ID:${_id} has been updated successfully.`,
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
