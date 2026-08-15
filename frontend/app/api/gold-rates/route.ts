import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import GoldRate from '@/lib/models/GoldRate';

// In-memory fallback state if MongoDB is not configured
let inMemoryRates = {
  gold18k: 5500,
  gold24k: 7450,
  silver: 88.50,
  updatedAt: new Date().toISOString(),
};

export async function GET() {
  try {
    const db = await connectToDatabase();
    if (db) {
      const rates = await GoldRate.findOne().sort({ createdAt: -1 });
      if (rates) {
        return NextResponse.json({
          gold18k: rates.gold18k,
          gold24k: rates.gold24k,
          silver: rates.silver,
          updatedAt: rates.updatedAt || new Date().toISOString(),
        });
      }
    }
  } catch (error) {
    console.error('Database query error, returning fallback rates:', error);
  }

  // Fallback to in-memory rates
  return NextResponse.json(inMemoryRates);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { gold18k, gold24k, silver } = body;

    const num18k = Number(gold18k);
    const num24k = Number(gold24k);
    const numSilver = Number(silver);

    if (isNaN(num18k) || isNaN(num24k) || isNaN(numSilver)) {
      return NextResponse.json(
        { message: 'Invalid values provided for rates' },
        { status: 400 }
      );
    }

    // Always update in-memory state
    inMemoryRates = {
      gold18k: num18k,
      gold24k: num24k,
      silver: numSilver,
      updatedAt: new Date().toISOString(),
    };

    // Save to DB if configured
    try {
      const db = await connectToDatabase();
      if (db) {
        const newRate = new GoldRate({
          gold18k: num18k,
          gold24k: num24k,
          silver: numSilver,
        });
        await newRate.save();
      }
    } catch (dbErr) {
      console.warn('Could not save to MongoDB (running in fallback mode):', dbErr);
    }

    return NextResponse.json({
      message: 'Rates updated successfully',
      rates: inMemoryRates,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Failed to update rates' },
      { status: 500 }
    );
  }
}
