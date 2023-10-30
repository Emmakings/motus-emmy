import clientPromise from "@/library/mongo";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const COMMENTS = db.collection("comments");
  return COMMENTS;
};

export async function GET(request) {
    const commentCollection = await connectToDb();
    const comments = await commentCollection.find().toArray();
    return Response.json({ comments })
}

export async function POST(request) {
    const body = await request.json();
    const allComment = await connectToDb();

    try {
        const comments = await allComment.insertOne({ ...body });
    
        if (comments) {
          return Response.json({ comments }, { status: 201 });
        }
    
        return Response.json({ comments }, { status: 201 });
      } catch (error) {
        console.log(error);
      }
      return Response.json({ message: "Comments API" });
}