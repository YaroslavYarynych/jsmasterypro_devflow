import Image from "next/image";
import Link from "next/link";
import React from "react";

import { rightbarQuestions, rightbarTags } from "@/constants";
import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const RightSidebar = () => (
  <section
    className="background-light900_dark200 light-border custom-scrollbar sticky
    right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l
     p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden"
  >
    <div>
      <h3 className="text-dark200_light900 h3-bold">Top Questions</h3>

      <ul className="mt-7 flex w-full flex-col gap-8">
        {rightbarQuestions.map(({ id, title }) => (
          <Link
            className="flex cursor-pointer items-center justify-between gap-7"
            href={ROUTES.PROFILE(id)}
            key={id}
          >
            <p className="text-dark500_light700 body-medium">{title}</p>

            <Image
              className="invert-colors"
              src="icons/chevron-right.svg"
              alt="Chevron"
              width={20}
              height={20}
            />
          </Link>
        ))}
      </ul>
    </div>

    <div className="mt-16">
      <h3 className="text-dark200_light900 h3-bold">Popular Tags</h3>

      <ul className="mt-7 flex w-full flex-col gap-4">
        {rightbarTags.map(({ id, questions, name }) => (
          <TagCard
            id={id}
            name={name}
            questions={questions}
            key={id}
            showCount
            compact
          />
        ))}
      </ul>
    </div>
  </section>
);

export default RightSidebar;
