import { HashedPassword } from "@/library/encryption";
import clientPromise from "@/library/mongo";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const USERS = db.collection("user");
  return USERS;
};

export async function GET(request) {
  const userCollection = await connectToDb();
  const insertedUser = await userCollection.find().toArray();
  return Response.json({ insertedUser });
}

export async function PATCH(request, context) {
  const { newPassword } = req.body;
  const { params: { id } } = context;
  const userId = new ObjectId(id);

  try {

    const result = await userCollection.findOneAndUpdate(
      { _id: userId },
      { $set: { password: newPassword } }
    );

    if (result.value) {
      Response.json(200).send("Password Changed Successfully.");
      return Response.json({ insertedUser });

    } else {
      Response.status(404).send("User not found.");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
  return Response.json({ message: "Password Changed", status: 200 });
}

// export async function PATCH(request, context) {
//   const data = await request.json();
//   const allUsers = await connectToDb();
//   const updatePassword = db.changeUserPassword(_id, passwordPrompt());
//   const {
//     params: { id },
//   } = context;

//   try {
//     const hashedPassword = await HashedPassword(data.password);
//     const body = await allUsers.findOneAndUpdate(...body, {password: hashedPassword},
//       { _id: new ObjectId(id) },
//       { password: passwordPrompt() }
//     );

//     return Response.json({ message: "Password Changed!" }, { status: 201 });
//   } catch (error) {
//     console.log(error);
//   }
// }
