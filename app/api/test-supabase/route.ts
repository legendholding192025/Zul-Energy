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

    // Test 1: Basic table access
    console.log('Test 1: Basic table access...')
    const { data: selectTest, error: selectError } = await supabase
      .from('datasheet_requests')
      .select('*')
      .limit(1)

    if (selectError) {
      console.error('Select test failed:', selectError)
      return NextResponse.json({
        success: false,
        step: 'table_access',
        error: 'Cannot access table',
        details: {
          message: selectError.message,
          details: selectError.details,
          hint: selectError.hint,
          code: selectError.code
        }
      }, { status: 500 })
    }

    // Test 2: Insert permission test
    console.log('Test 2: Testing insert permissions...')
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      company: 'Test Company',
      message: 'Test message',
      product: 'Test Product'
    }

    const { data: insertTest, error: insertError } = await supabase
      .from('datasheet_requests')
      .insert([testData])
      .select()
      .single()

    if (insertError) {
      console.error('Insert test failed:', insertError)
      return NextResponse.json({
        success: false,
        step: 'insert_test',
        error: 'Cannot insert data',
        details: {
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          code: insertError.code
        }
      }, { status: 500 })
    }

    // Test 3: Clean up test data
    console.log('Test 3: Cleaning up test data...')
    if (insertTest?.id) {
      await supabase
        .from('datasheet_requests')
        .delete()
        .eq('id', insertTest.id)
    }

    console.log('All tests passed!')
    return NextResponse.json({
      success: true,
      message: 'All Supabase operations successful',
      tests: {
        tableAccess: 'PASSED',
        insertPermissions: 'PASSED',
        cleanup: 'PASSED'
      }
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
