import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  console.log('=== Testing Supabase Connection ===')
  
  try {
    // Test environment variables
    console.log('Environment variables:', {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Present' : 'Missing',
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Present' : 'Missing'
    })

    // Test basic connection
    console.log('Testing Supabase connection...')
    const { count, error: connectionError } = await supabase
      .from('datasheet_requests')
      .select('*', { count: 'exact', head: true })

    if (connectionError) {
      console.error('Connection test failed:', connectionError)
      return NextResponse.json({
        success: false,
        error: 'Connection failed',
        details: {
          message: connectionError.message,
          details: connectionError.details,
          hint: connectionError.hint,
          code: connectionError.code
        }
      }, { status: 500 })
    }

    // Test table structure
    console.log('Testing table structure...')
    const { data: structureTest, error: structureError } = await supabase
      .from('datasheet_requests')
      .select('*')
      .limit(1)

    if (structureError) {
      console.error('Structure test failed:', structureError)
      return NextResponse.json({
        success: false,
        error: 'Table structure issue',
        details: {
          message: structureError.message,
          details: structureError.details,
          hint: structureError.hint,
          code: structureError.code
        }
      }, { status: 500 })
    }

    console.log('All tests passed!')
    return NextResponse.json({
      success: true,
      message: 'Supabase connection successful',
      tableExists: true,
      recordCount: count || 0
    })

  } catch (error) {
    console.error('Test error:', error)
    return NextResponse.json({
      success: false,
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
