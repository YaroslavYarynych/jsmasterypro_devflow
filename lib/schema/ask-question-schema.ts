import { z } from "zod";

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title cannot exceed 100 characters." }),

  description: z.string().min(1, { message: "Description is required" }),

  tags: z
    .array(
      z
        .string()
        .min(1, {
          message: "Tag is required.",
        })
        .max(30, {
          message: "Tag cannon exceed 30 characters.",
        })
    )
    .min(1, { message: "At least one tag is required" })
    .max(5, { message: "Cannot add more that 5 tags" }),
});

export type IAskQuestion = z.infer<typeof AskQuestionSchema>;
