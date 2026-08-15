import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGoldRate extends Document {
  gold18k: number;
  gold24k: number;
  silver: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const GoldRateSchema: Schema = new Schema(
  {
    gold18k: { type: Number, required: true },
    gold24k: { type: Number, required: true },
    silver: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const GoldRate: Model<IGoldRate> =
  mongoose.models.GoldRate || mongoose.model<IGoldRate>('GoldRate', GoldRateSchema);

export default GoldRate;
