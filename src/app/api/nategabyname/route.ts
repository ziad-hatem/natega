import clientPromise from "../../lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Log the request method and URL for debugging
    console.log(`Received ${req.method} request at ${req.url}`);

    const body = await req.json();
    // Connect to the database
    const client = await clientPromise;
    const db = client.db("nategawebsite"); // Replace with your database name
    console.log("Database connection established");

    // Execute the query
    const collection = db.collection("natega"); // Replace with your collection name
    const users = await collection
      .find({
        arabic_name: { $regex: body.name, $options: "i" },
      })
      .toArray();
    console.log("Query executed successfully");

    // Send the response
    return NextResponse.json(users);
  } catch (error) {
    // Log the error for debugging
    console.error("Database query failed:", error);

    // Send the error response
    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}
