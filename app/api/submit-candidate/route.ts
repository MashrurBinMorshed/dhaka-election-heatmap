import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: NextRequest) {
  try {
    const { candidateName, partyName, seatNumber } = await request.json()

    // Validate input
    if (!candidateName || !partyName || !seatNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into Supabase table
    const { data, error } = await supabase.from("candidate_submissions").insert([
      {
        candidate_name: candidateName,
        party_name: partyName,
        seat_number: seatNumber,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: "Candidate submitted successfully", data },
      { status: 201 }
    )
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
