import Link from "next/link";
import React, { FC } from "react";

import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";

import TagCard from "./TagCard";
import Metric from "../Metric";

interface Props {
  question: Question;
}

const QuestionCard: FC<Props> = ({
  question: {
    answers,
    author,
    createdAt,
    descriptions,
    id,
    tags,
    title,
    upvotes,
    views,
  },
}) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>

          <Link href={ROUTES.QUESTION(id)}>
            <h3
              className="sm:h3-semibold base-semibold text-dark200_light900
          line-clamp-1 flex-1"
            >
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <TagCard key={tag.id} id={tag.id} name={tag.name} compact />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.image || ""}
          altTag={author.name}
          value={author.name}
          title={`• asked ${getTimeStamp(createdAt)}`}
          href={ROUTES.PROFILE(author.id)}
          textStyles="body-medium text-dark400_light700"
          isAuthor
        />

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            altTag="Like"
            value={String(upvotes)}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />

          <Metric
            imgUrl="/icons/message.svg"
            altTag="Answers"
            value={String(answers)}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />

          <Metric
            imgUrl="/icons/eye.svg"
            altTag="Views"
            value={String(views)}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
