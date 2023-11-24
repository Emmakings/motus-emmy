import clientPromise from "@/library/mongo";
import { ObjectId } from "mongodb";

const connectToDb = async () => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const IDEAS_COLLECTION = db.collection("ideas");
  // db.IDEAS_COLLECTION.aggregate([{ $sort: { comments: -1 } }]);  
  return IDEAS_COLLECTION;
};

export async function PATCH(request, context) {
  const ideasCollection = await connectToDb();
  const body = await request.json();
  const {
    params: { id },
  } = context;
  // db.ideas.comments.find().sort({commentedDate: -1}) 
  // ideas.comments.find().sort ( { commentedDate: -1 } )
  // comments.find().sort({commentedDate: -1})
  // { $sort: { comments: -1 } }
  
  try {
    const data = await ideasCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $push: { comments: { ...body, commentedDate: new Date() } } },
      ) ;
      
      return Response.json({ message: "Commented!" }, { status: 201 });
    } catch (error) {
      console.log(error);
    }
}
// return Response.json({ message: "Commented!" }, { status: 201 });
