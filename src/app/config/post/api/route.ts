import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../mongoose";
import Post from "@/app/config/models/post"

export async function POST(req:NextRequest){
    await connectDB()
    try {
        const {title, description} = await req.json()
        // const exited = await Post.find({title})
        // if (!exited) {
            const newPost = await Post.create({title, description})
            return NextResponse.json(
                {
                    data: newPost,
                    message: "success",
                }, {status: 201, statusText: "created"}
            )
        // } else {
        //     return NextResponse.json(
        //         {
        //             data: null,
        //             message: "title duplicate",
        //         }, {status: 400, statusText: "invalid"}
        //     )
        // }
    } catch (error) {   
        console.log(error)
    }
}


export async function GET(){
    // await connectDB()
    try {
        // const {title,des} = await req.json()
        // const exited = await Post.find({title})
        // if (!exited) {
            const allPost = await Post.find()
            return NextResponse.json(
                {
                    data: allPost,
                    message: "success",
                }, {status: 201, statusText: "created"}
            )
        // }
        // return NextResponse.json(
        //     {
        //         data: null,
        //         message: "title duplicate",
        //     }, {status: 400, statusText: "invalid"}
        // )
    } catch (error) {   
        console.log(error)
    }
}