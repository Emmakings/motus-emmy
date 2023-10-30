import clientPromise from "@/library/mongo";

/*----------------------------START----------------------------*/
const connectToDb = async () => {
  // Get the instance of the connected mongoDB host
  const client = await clientPromise;
  // Get the mongoDB name for the environment variable
  const MONGO_DB = process.env.MONGO_DB;
  // Get the mongoDB name from the environment variable
  const db = client.db(MONGO_DB);
  // Specify the collection you want to use
  const IDEAS_COLLECTION = db.collection("ideas");
  // Make available the collection collected
  return IDEAS_COLLECTION;
};
/*----------------------------END----------------------------*/

export async function GET(request) {
  // Retrieving the connected collection
  const ideasCollection = await connectToDb();

  try {
    const ideas = await ideasCollection.find().toArray();
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

// A route to add a new idea
export async function POST(request) {
  const body = await request.json();
  // Retrieving the connected collection
  const ideasCollection = await connectToDb();

  try {
    const insertedIdea = await ideasCollection.insertOne({ ...body });
    return Response.json({ insertedIdea }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
