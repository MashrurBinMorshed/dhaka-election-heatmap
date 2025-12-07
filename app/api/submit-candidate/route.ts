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
    const formData = await request.formData()

    const candidateName = formData.get("candidateName") as string
    const partyName = formData.get("partyName") as string
    const seatNumber = formData.get("seatNumber") as string
    const file = formData.get("file") as File | null

    // Validate input
    if (!candidateName || !partyName || !seatNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    let fileUrl: string | null = null

    // Upload file if provided
    if (file && file.size > 0) {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("candidate-files")
        .upload(fileName, file, {
          contentType: file.type,
          upsert: false,
        })

      if (uploadError) {
        console.error("Storage upload error:", uploadError)
        return NextResponse.json({ error: "File upload failed" }, { status: 500 })
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("candidate-files")
        .getPublicUrl(fileName)

      fileUrl = urlData.publicUrl
    }

    // Insert into Supabase table
    const { data, error } = await supabase.from("candidate_submissions").insert([
      {
        candidate_name: candidateName,
        party_name: partyName,
        seat_number: parseInt(seatNumber),
        file_url: fileUrl,
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
