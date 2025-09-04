export const runtime = 'nodejs'

const DRIVE_FILE_ID = '1ibGrzWo_yEriXEZRt5JZUiDEhEyw3ahY'
const DRIVE_DIRECT_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`

export async function GET() {
  try {
    const upstream = await fetch(DRIVE_DIRECT_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
        'Cache-Control': 'no-cache',
      },
    })

    if (!upstream.ok || !upstream.body) {
      return new Response('Failed to fetch brochure', { status: 502 })
    }

    // Stream the PDF back to the client
    return new Response(upstream.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="brochure.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (err) {
    return new Response('Unexpected error', { status: 500 })
  }
}


