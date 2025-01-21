"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  AskQuestionSchema,
  IAskQuestion,
} from "@/lib/schema/ask-question-schema";

const QuestionForm = () => {
  const form = useForm<IAskQuestion>({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      description: "",
      tags: [],
      title: "",
    },
  });

  const onSubmit = (data: IAskQuestion) => console.log(data);

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light900">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>

              <FormControl>
                <Input
                  className="paragraph-regular background-light900_dark300
                    light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>

              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you are asking a question to another
                person.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light900">
                Detailed explanation of your problem?
                <span className="text-primary-500">*</span>
              </FormLabel>

              <FormControl>
                <Input
                  className="paragraph-regular background-light900_dark300
                    light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>

              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light900">
                Tags
                <span className="text-primary-500">*</span>
              </FormLabel>

              <FormControl>
                <div>
                  <Input
                    className="paragraph-regular background-light900_dark300
                    light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Add tags"
                  />
                </div>
              </FormControl>

              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-16 flex justify-end">
          <Button
            type="submit"
            className="primary-gradient w-fit !text-light-900"
          >
            Ask A Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
