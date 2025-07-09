import { connectToDatabase } from "@/app/lib/db";
import { IUser, User } from "@/app/models/User";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(request: NextApiRequest) {
  try {
    const { email, password }: IUser = await request.json();

    await connectToDatabase();
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    (await cookies()).set("authenticetAdmin", user._id, {
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    return NextResponse.json({ user: user, success: true }, { status: 200 });
  } catch (error) {
    console.log("user", error);
  }
};


export async function GET(request: NextApiRequest) {
  try {
    await connectToDatabase();
    const id = (await cookies()).get("authenticetAdmin")?.value;
   
    const user = await User.findById(id).exec();
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user: user, success: true }, { status: 200 });
    
  } catch (error) {
    console.log("user", error);
  }
};
