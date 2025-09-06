import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { DatasheetRequest } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  console.log('=== Datasheet Request API Called ===')
  
  try {
    // Check if environment variables are set
    console.log('Environment variables check:', {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Present' : 'Missing',
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Present' : 'Missing'
    })

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase environment variables')
      return NextResponse.json(
        { error: 'Server configuration error: Missing database credentials' },
        { status: 500 }
      )
    }

    console.log('Parsing request body...')
    const body: Omit<DatasheetRequest, 'id' | 'created_at' | 'updated_at'> = await request.json()
    console.log('Request body received:', { ...body, email: body.email ? '[REDACTED]' : 'missing' })
    
    // Validate required fields
    const { name, email, phone, company, product } = body
    
    if (!name || !email || !phone || !company || !product) {
      console.log('Validation failed: Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format')
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('Validation passed, attempting to insert into Supabase...')

    // Insert data into Supabase
    const insertData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      company: company.trim(),
      message: body.message?.trim() || null,
      product: product.trim()
    }

    console.log('Insert data prepared:', { ...insertData, email: '[REDACTED]' })

    const { data, error } = await supabase
      .from('datasheet_requests')
      .insert([insertData])
      .select()
      .single()

    if (error) {
      console.error('Supabase error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
      return NextResponse.json(
        { 
          error: 'Failed to save request',
          details: error.message 
        },
        { status: 500 }
      )
    }

    console.log('Successfully inserted data:', data?.id)
    return NextResponse.json(
      { 
        message: 'Datasheet request submitted successfully',
        data: data
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    })
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('datasheet_requests')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch requests' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
