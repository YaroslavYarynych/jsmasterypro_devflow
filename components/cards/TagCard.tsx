import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";

import { Badge } from "../ui/badge";

interface Props {
  id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove: VoidFunction;
}

const TagCard: FC<Props> = ({
  id,
  questions,
  showCount,
  name,
  handleRemove,
  compact = false,
  isButton = false,
  remove = false,
}) => {
  const iconClass = getDeviconClassName(name);

  const Content = (
    <>
      <Badge
        className="
          subtle-medium
          background-light800_dark300
          text-light400_light500
          flex
          flex-row
          gap-2
          rounded-md
          border-none
          px-4 py-2 uppercase"
      >
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`} />
          <span>{name}</span>
        </div>

        {remove && (
          <Image
            onClick={handleRemove}
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="Close"
          />
        )}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}+</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button
        onClick={(e) => e.preventDefault()}
        type="button"
        className="flex justify-between gap-2"
      >
        {Content}
      </button>
    ) : (
      <Link href={ROUTES.TAG(id)} className="flex justify-between gap-2">
        {Content}
      </Link>
    );
  }
};

export default TagCard;
