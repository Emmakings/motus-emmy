import clientPromise from "@/library/mongo"

const ConnectToDatabase = async () => {
    const client = await clientPromise()
    const db = client.db('motus')
    const userColletion = db.userColletion('user')
    return userColletion
}

export async function GET(request) {
    const userCollection = await ConnectToDatabase();
    const users = await userColletion.find();
    return Response.json({ users })
}

export async function POST(request) {
    const data = await request.json()
    // console.log(data)
    return Response.json({data})
}
