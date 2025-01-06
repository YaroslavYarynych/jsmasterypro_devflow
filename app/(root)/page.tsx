import Link from "next/link";

import LocalSearch from "@/components/navigation/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    id: "1",
    title: "How to learn React?",
    descriptions: "How ekf weof kweof kwe fkwe kfowe",
    tags: [
      {
        id: "1",
        name: "React",
      },
      {
        id: "2",
        name: "JavaScript",
      },
    ],
    author: { id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },

  {
    id: "2",
    title: "How to learn JS?",
    descriptions: "How ekf weof kweof kwe fkwe kfowe",
    tags: [
      {
        id: "1",
        name: "React",
      },
      {
        id: "2",
        name: "JavaScript",
      },
    ],
    author: { id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestion = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section
        className="flex w-full flex-col-reverse justify-between
      gap-4 sm:flex-row sm:items-center"
      >
        <h1
          className="h1-bold text-dark100_light900
        
        "
        >
          All Questions
        </h1>

        <Button
          className="primary-gradient min-h-[46px] px-4
        py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>

      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>

      {/* <section>HomeFIlter</section> */}

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestion.map((question) => (
          <h2 key={question.id}>{question.title}</h2>
        ))}
      </div>
    </>
  );
};

export default Home;
