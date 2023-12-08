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

export async function POST(request) {
  const data = await request.json();
  const allUsers = await connectToDb();
  const hashedPassword = await HashedPassword(data.password);

  try {
    const body = { ...data, password: hashedPassword, createdAt: new Date() };

    const insertedUser = await allUsers.insertOne({ ...body });

    if (insertedUser) {
      return Response.json({ insertedUser }, { status: 201 });
    }

    return Response.json({ insertedUser }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
  return Response.json({ message: "Users API" });
}

export async function DELETE(request) {
  const userCollection = await connectToDb();

  try {
    const data = await userCollection.deleteMany({});
    console.log(data);
    return Response.json({ message: "User(s) deleted", status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// export async function PATCH(request) {
//   const userCollection = await connectToDb();

//   try {
//     const data = await userCollection.findOneAndUpdate({});
//     console.log(data);
//     return Response.json({ message: "User(s) Updated", status: 200 });
//   } catch (error) {
//     console.log(error);
//   }
// }
