import { model, Schema, models, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  actionId: Types.ObjectId; // AnswerId, or QuestionId or UserId
  action: string;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    action: {
      type: String,
      required: true,
    },

    actionType: {
      type: String,
      required: true,
      enum: ["question", "answer"],
    },
  },
  {
    timestamps: true,
  }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
