import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions: Question[] = [
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
    author: {
      id: "1",
      name: "John Doe",
      image:
        "data:image/png;base64,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",
    },
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
    author: {
      id: "1",
      name: "John Doe",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABF1BMVEX7sED///8AAAD2278quNjt075Gxun7rzz7rjn/s0H/tUL7rDD7rTX//vz//Pn7qyv/+PD+69T/uUP/48b+8+X7qB79z5X92Kv7tVHAhzHkoDr8ul791qT+8N6oy8rd0b793rj8yYb8vWhXPRbr1cV5x9UAuOKCWyE8Kg9fQxj8w3X7tEn7owDuzrHt9vfyqj5Kt8dkxNZKNBPQkzVqShuOZCSldCoZEQYkGQkTEA3ZsWGetJjtr0y8zMJBu9Og1uDS6++94OMwIgwsJR5KQDWrln9gVEdzZFLdwKI4LCCKd2HGqY6ciXRaSzfNtpx1TxLBmWbUol7JxKWRtqfLvI2OxcTOtXt6trCutI9otrvhrlW2soDOsWvEaK/ZAAAPrUlEQVR4nN2d+1vaSBfHg1wSSDBAuF8qoKKCERHFqhSt96rr7rvtatX+/3/HO0kQc5kkZy7pPs9+f9m2C2Q+OTPnnLkLsf+QhH+7ADwVLUx2OYdUNGX8aTkb6eMigsnmiq28plWa5XKn3+8i9fudcrlZ0bR8q5iLiIk/TDbX0trNTr8hqKWSqqqyrJiSZfQX9C9io99ptrVWBEScYYp5xNEdKKqsSKKAlSgpsqoMuogoX+T7dJ4wxXYZ2UORFR8MBxL6mNDol9s8ebjBFCv9xkDxtQdWkqIMGv0KNx4+MLl2vyqQgXxUOqHab+e4FIMHTLFDB/LOYwD1eZiHGSarDbZlapCF5NKgzeze2GCyxcqgRG8Th8TSoFJk42GBybYQisQHxZBUGjRbLDgMMK1KVeWIYuKog0rrX4Apths8rbLAKTXoQw8lDPLFisIfxZAiU3tqOph8ZxARiokz6OR/G8xyswrJWOglKtXm8u+ByXfFCBqLU5LYpTAOOUxTZoj2BDhKOXKYXLVEWKoMUpoGp1Ql9QNkMFmNyIel08KwXttf3ahT0SiKRhZCiWByTRlewxBJfTzZWzK0MaSBEUS5SWQcEphiB86STg/fSZD262kkGpoOSQQlgMl3wdlxOlOvbXxeWmhjiCQIBdR8CHFUEq8Gh2k3wCyF+mR/ya69DaSDyaQ2rg8zBSJ/IDfa/GEqVUDTNx1XJl1zonzo897WnxuTcZ3EwynVCm+YMiRQZur7B8NC/eCzD4ulo83V/YMaMhEQRxKhEQcIUwY1/fTm0uGkvhWIMgf6vLl3MATSiDKQBgZTBjWXwgQV83wTwGJpAmNBkjv8YDrApn8O5jC1D48+MBoAzHIZFvULkyMymFombQlV0LAfV8qANDocJtuEJZbp4V54+e3anNQWGoe1H1ECdApCYZYrIizsZ2rnZDAObYRFU1GqhNKEwWTbArTzssHAsrQU6tokIXRgLQxGg8RKQ5n6KhMMoNlUNTaYVgPEggL6cHLOwnJQCH+K0ggZhgqGyULysXRBGE82tphY9kABVG4E9wiCYfpq+BMKQm1185CFBDm2OiybVvv0MBVAF7lQYyVBOtqoA6qZQROYdAbB5CF2mbCjmNoQQMZRg7o3ATC5KiTAsDlkmw7HEBoxaJTDHybbgTiyDJsTs+u8BnieoHT8o40/THsAy2Jq8DQ5RJsQGnHg3/P0hQFGGOZgadfeGOCgA6KNHww0Vc6A+mJQ7UPCjX8C7QejCbBKxpUF1l8TBb+0xgem2AUZJl33G7qg1Hkd8FSl6zOYhodZroD6lukhN8f8rgPIc2Wf3gAepjiA5f0T3ixLSxDTSAO8abAwyx1A7De6Y/xZwntphtQO1jRYmDxo2iI9PI8AZgk0ylHCZjVYGNigcuYgChZQz0aQu1CY/DaEJT2MhGXpEDQ0uI0zDQ4GFvsL3D3ZXDVIq1EaMBgN1PqjMgxyAaCujYqJnF6YbBfklgsRuGVLm6B6JnW92bMXRoMNk6UJh/zg+gybARW9pvHC9EGGyYw59TC9OqyB6pnkHQ/wwORB/UvygWUSGFAHWqx6HJoHpgxLZAr8ejEeGOC8jeSZtXHDQNNl0lFyuMZp4CSuN3l2wwA7y5nxeVQwoAzAkLcD7YLJgUYxjHGM4HlLf12EtjUgizG2kQuEyTeATYY2L7u8ug77yARqGqmRD4RpA5dgFP6kYzl60O4vQj6zB174ILaDYHLQ2UuBsrt8favFb0I+cwgZozElu+qZEyZfhdWy9JBuHOPiSotrt2GmAbsAyRVqnDBtUI5JAvPN8bfrOJJ2F/KdLSiMoLb9YXJlKAx45M9hhgtUyQyFfGcTvDxNLed8YVpAXwaHudftMHcWi3YV/KXPE6gLkJyjmw4YyBwGEcyVdmvLRy8tFkTzzf8rhmA9GkPOGQ47zHKTL8zRlabd22KkvoB5DP7iPtg5q47VAXaYXB+6ABME8+0KFdsGc/XOghTsnregS4QEpZ/zgSnC8jIgzPW9ZjSPBcxN3KZg97wK9gCiYzjQDgNuMhDXfGN6rg+Ya90OE3/gA+NsNDaYbAUMI4TBXFxZDWQBc/noYInfXgZ8ewu+3EmtZLEwy+BcBpkmOJ25eYzPvfC8zXy7j7sU4J43YV1NU7J9oNYOA40yQsig2fU7CpJuwhxeuVni+twHeLsSe5Cx83dJDTxMjmAfXADMza29zGbucuGxi2EzM9hceC10DptEn0vOYWFaoFFZS34e4I97XdOchb7640HXvDDzFO1G9wTQI3CHxtB2CwsDWY+xUMY5onF5c3P3cH+r5b3F1jQciiFU0Y4eMbnNHsli+1IFCwPNMuc0dtMcPeQ1/0L7SIvfXaJY5PVrRwcE9UwtY2HA8d9UwQ5z+EAIYjeaN+QQxBmUA2BhYPPLCxi7C7i4p4KxiB49rQaezhhzz1gYsl0+KKM535/MhwIuHulh4nFbZ21rY2t1dZ8gzqBGg4PJEjgzQ5n6uF7964gdxjbEcT4e1sdj4OKzubazGJgiIYyQyTT0R2vg6NtteJkDtMihJ0I6nSbc1LVdxMC0SDeTiVU9mbSqyKUeXuIA01zNTXP5P4oNQ6UWBkYjhZH1tWTcKsclk2Hi+tw73yX75BsNSxoHGKW/lkwmrXp2zdL+jWTAbHqXj2sVcJcqGIagA2BKRZUsOa9njDBxK6e5SybX+qQs9mWbHzDgAQBL0mDNhDHzxRtGGDNPu75FMDpZtDNgmhgYsmxGULoWjOmK7hhh4vHLQ9R9M34PNnFnhynjYMhOwrCaTNJyAVesMNrt1a3JskbsAmSOMMk4ckVMCYBFg9I0E6ZDugmcB4zUmMNoj3cPrCimTIey1iQ9aAAPQ+jNxOTcMhpTxHTDVEhh8G2G1DVXLNNwQuELQ+iaBbERCQxxm8G65jZNOsMfpkvqzUptDAxxbiZWkwYNL5a4ZWfifIZLboZo+lwtYxqmTFoIPAxxF8BYi6OjBIQTi5XqNcgTTVwXgLhzZtBUyzpPGArD4DtnpN1mU6I06FY40Rh+mTgz8+k2Ew5oLHDUMh8WZJkKwWj3QtgBjViG7jgZpc8HJplsAlchOCRmsDCwxVkeSVU+MHqfvJcpGF0RLAxpPrP4OS4uoCIC91C75DM8SzRwbpPc5AFDMNPlkM/AOcmUhl18Gg1NezHkM6WRo6xmosADhvLhgoqfbFqmfTkqh0ZD22D9pgFJJmgdkjvMLHnYMnfcs/EwJFPnDokcnDPt8W9+U+cEixpcUpgzGuIu2QLGZ1EDwXITl0Rmf0aeLM+f7LvcBL4QyK1qm42lSfsa/RcCwZdouSWyuQCNuK/8Lv8lWvSNRqwyeecyrWECFs/FWrSRhs00bcoU10hy/Zc1wpc1e3+VwaF1qM+yDFpwCl4K7BVDglahrg+BS4HBi7S9Ege0Hc42tQ8NWaRNX89QkkRZ0Tq0TwxbPg/e2ICR0qVioQ4xQtjGBvCWE5wkmmbD0GBCt5xANwPhJErk/rnN8PJCNwPFKsQTpDYR07Qpxslsch8PRLmBDi9R6eZ/H0v4Bjro1ka/BzQIUs4mSy0wTjlxl51206mfJBEcbzpsZ4tDNp0CtwP7P0OGBZxKg/GcdMh2YOhGbX+pHUAKTXAsr49AG7WBW+h9pbz+nUzqejxorkPXdRZHYwi2hR54uIGfxOH3T9aEnkGDBdL1ZHLlx5CtBsAON4jFGIIyemM/Up+SC+lJyw7xxX/m/2PlnyemegY9diKmUY7TmizTZzuMr1bWn6cs7wx8IAjwqBasxLcUECb1g8E08KNagIfo4KROR2CYl2lJpjUOwSE6wOONnBIluaT8+p4Cw6Rmz29Cier+B5LjjWJF8IGzCxJxcHyy2+ulSGASvd7uyfFAJOUhOngKeiTY4selqUmSSOySwKQSSCbPVCKKOmRHghElz6L8+vSc6BklS8yIYGbmd9BXX96OJXh2Q3hYG/gYPeM1TX+8zFEsltT6ChDmncYwz89j6DUdxMfoxXLAAw4lZWEVpFHKogHAmB/dTSyEcF5ht1soZb9zQf2PngRVNGV6Mut9lMiyDKCiWSypUcKulzeI31G6xEdPws45kV+fHcVJveuTDmGxXIDtXZwMQ2moDgWFHNequFhmC5jUl3gQzDvLotG86yQ0/aQ7rjX8IF2UIPccRdn9gEkFOIGVD+iEW08hb5DyIN3wGQ7lzcmSSKUgNDYWuwew3MBsGvwGaY84DluzIb66X+vIDjPyoVlxfMj9E72TwDdYoj58OuRYcPm5FwTjE25WnB/y1LNeUM+A5VjwwAPb5WM3i7OapVKna6EsGJhn/+ogN4JvBqA+Sl9UX8JgMOHmi4vFC5NI+JqG8Sj9gEsO5F8eFg+Mh8bDgoHxbTXMlxz4Xj+BDOMthwdm9CWEBWeZGT4t5HD9hHExCI5GPsYUw1nWGYqIM5sT0L8YJZ2FwiTecKaRRPaLQfyubCk9Y0oxcpKYr3nFwZJw8Xhcs6EX1ftAUWqG30YXDhNbxuyskabucGevZvYkZVd3sVhA80/ifiUx++V9IOjaJgBMLOYdEiid4EphpjMjZ77VezFp4l9cn525+wA2fXd7Z1HtQMoJgvHsepIGmOZv0IzcmSOiWTdgPmEMsDvCsyR23d4ZeJ0WDMZ9NZj85C20vz5hWQI0e3O8PM5XgxmXttnjjYKtZb765x+ij6N6ZreMwvvSNud1etIrvpb5yRteQ/Ty+kETwXV6KBf4yNPIahmFZm+LNyc3wuI+DUw23313ahJZLaPQyfvyc7Wbh992Cof5uBxUmnqSf87qzetZdJeDLq5tjbyWoXpmzt5EeW2rcaGuiB4i/4zYMMg0P5FlZDHKC3Vj5lXH4vR79DDPUynqq44NNdVj/rVs9uz6zdmxbTNpdDCx/A/HY19+sruD2eu2e3Tk799yPXgstnNqe42z41KJ2VK7U1cvfHa6Q1EwGphY7Gx9MX7/8iqywyReJenkA2a2fkZVLDqY2M7XebfKaKkqM0vvSVGePuYSvtKYhR7GqGsj4+m971NlytxmeieS9N5o6GoYG0wse2Y0nd5P3AAasV4k0eq7zk7PyGILH5iY6Ql6b5L8xCHsiOYoPINVmGEMnF+lEoeEoPeqKG8JNhRmmFhsWctwSAh6b9uCxojCAQZpZ50ZJvEpZOQVJB4wyDxfMSMZYM3WWevXXHxgkM5O12cUQLPR+ildhMSIG4zhq7+ekhloNjrlZBNLHGGQsjtnp6frEKIZqlunZzv0MQUnvjCGEBAyESIyQqrLz/VMDFSzvp7xBjHEH8ZUdgchISZkp/X1kSn0B/RXRHG2EwGHqYhg5soiKLuyEVHMFS3Mb9Z/Cub/SgITcNDDTzoAAAAASUVORK5CYII=",
    },
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
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestion = questions
    .filter((question) =>
      question.title.toLowerCase().includes(query?.toLowerCase())
    )
    .filter((val) =>
      val.tags.some((tag) =>
        tag.name.toLowerCase().includes(filter.toLowerCase())
      )
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

      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestion.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
