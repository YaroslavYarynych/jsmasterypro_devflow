import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  imgUrl: string;
  altTag: string;
  value: string;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
  imgStyles?: string;
}

const Metric: FC<Props> = ({
  altTag,
  imgUrl,
  title,
  value,
  isAuthor = false,
  href = "",
  textStyles = "",
  imgStyles = "",
}) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={altTag}
        width={16}
        height={16}
        className={`rounded-full object-contain ${imgStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>

      <span
        className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {title}
      </span>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
