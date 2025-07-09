import { User } from "@/app/models/User";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



export async function GET() {
    const user  =await  User.find();
    console.log(user);
    
    // return NextResponse.json({
    //     user,
       
    // },{
    //     status:200
    // });
}