import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface ArticleProps {
  name?: string;
}

const Article: React.FC<ArticleProps> = (props) => {
  const router = useRouter();
  const query = router.query;
  const image = query.urlToImage;
  console.log(query);
  return (
    <div className="flex flex-column">
      <div className="pb-12-6">
        <Image
          className=" relative h-full w-full"
          unoptimized
          src={`${query.urlToImage}`}
          alt="Loading"
          layout="fill"
        />
      </div>
     
      
      <div className="z-10">
      <div className="mt-40">z</div>
        <div className="w-full mt-64 md:w-3/5 mb-12 mx-auto">
          <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none">
            {query.title}
          </div>

          <div className="w-full text-gray-600 font-thin italic px-5 pt-3">
            By <strong className="text-gray-700">Quint Forgey</strong>
            <br />
            {query.publishedAt}
          </div>
          <div className="px-5 w-full mx-auto">
            <div>Description</div>
            <p className="my-5">{query.description}</p>
            <div>Content</div>
            <p className="my-5">
              {query.content}
              <a href={`${query.url}`}>Read More</a>
            </p>
          </div>
          <div className="mt-4">
            <Link href={"/"}>
              <a>Back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Temeperature: 30</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Prediction
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Get your
              </p>
            </div> */
}
export default Article;
