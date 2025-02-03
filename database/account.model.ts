import { model, Schema, models, Types } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId;
  providerAccountId: Types.ObjectId;
  name: string;
  provider: string;
  password?: string;
  image?: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
    },
    provider: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    providerAccountId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
