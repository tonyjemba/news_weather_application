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
 

  return (
    <div className="flex flex-column">
      <div className="pb-12-6">
        <Image
          className=" relative h-full w-full object-fit"
          unoptimized
          src={`${query.urlToImage}`}
          alt="Loading"
          height={100}
          width={100}
          layout="fill"
        />
      </div>
     
      
      <div className="z-10">
      <div className="mt-64 mb-64">z</div>
        <div className="w-full mt-64 md:w-3/5 mb-12 mx-auto">
          <div className="w-full text-red-800 text-4xl px-5 font-bold leading-none">
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
 
}
export default Article;
