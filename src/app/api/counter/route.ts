import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {


    //repuesta que queremos que genere 
    return NextResponse.json({count:100})

}