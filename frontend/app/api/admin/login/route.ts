import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const expectedEmail = process.env.ADMIN_EMAIL || 'bittukumar93418@gmail.com';
    const expectedPassword = process.env.ADMIN_PASSWORD || '93148@aman';

    if (email === expectedEmail && password === expectedPassword) {
      return NextResponse.json({
        _id: 'admin_1',
        name: 'Admin',
        email: expectedEmail,
        token: 'admin-session-token-jayram',
      });
    }

    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Login failed' },
      { status: 500 }
    );
  }
}
