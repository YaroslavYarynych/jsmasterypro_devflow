import { model, Schema, models } from "mongoose";

export interface ITag {
  questions: number;
  name: string;
}

const TagSchema = new Schema<ITag>(
  {
    questions: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
