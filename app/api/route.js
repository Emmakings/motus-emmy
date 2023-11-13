import clientPromise from "@/library/mongo"

const ConnectToDb = async () => {
    const client = await clientPromise()
    const db = client.db('motus')
    const userCollection = db.userCollection('user')
    return userCollection
}

export async function GET(request) {
    const userCollection = await ConnectToDb();
    const users = await userCollection.find();
    return Response.json({ users })
}

export async function POST(request) {
    const data = await request.json()
    // console.log(data)
    return Response.json({data})
}