import mongoose, { InferSchemaType } from 'mongoose';

const { Schema } = mongoose;

const catSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    bufferCommands: false,
  }
);

const CatModel = mongoose.model('Cat', catSchema);
export type Cat = InferSchemaType<typeof catSchema>;

export { CatModel };
