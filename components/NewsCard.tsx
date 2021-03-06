import * as React from "react";
import Image from "next/image";
import Link from 'next/link';

interface WelcomeProps {
  title: string;
  urlToImage: string;
  published: string;
  data: string;
}

const NewsCard: React.FC<WelcomeProps> = (props) => (
  <div>
    {/* Product Card Container */}
    <div className="flex flex-col items-center justify-center mt-32">
      {/* Product Card */}
      <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
        {/* Preview */}
        <div className="inline relative group h-48">
          {/* Thumbnail */}
          <Image
            className="absolute rounded-t object-cover h-full w-full"
            unoptimized
            src={props.urlToImage}
            alt={props.published}
            layout="fill"
          />
          {/* Hover Bar */}
          <div
            className="flex flex-row absolute justify-end
               h-16 w-full bottom-0 px-3 space-x-2
               bg-none opacity-0 group-hover:opacity-100
               group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
               transition-all ease-in-out duration-200 delay-100"
          >
            {/* Add to Bookmarks Button */}
            <button
              className="bg-gray-50/10 rounded-full 
                   px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                   transition-colors duration-200"
            >
              <i
                className="mdi mdi-playlist-plus text-xl text-gray-200
                       hover:text-white transition-all duration-200"
                title="Add to Bookmarks"
              />
            </button>
            {/* Add to Favorites Button */}
            <button
              className="bg-gray-50/10 rounded-full 
                   px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                   transition-colors duration-200"
            >
              <i
                className="mdi mdi-heart text-xl text-gray-200 p-1
                       hover:text-white transition-all duration-200"
                title="Add to Favorites"
              />
            </button>
          </div>
        </div>
        {/* Body */}
        <div className="flex flex-col bg-white rounded-b p-3">
          {/* Title */}
          <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
            {props.title}
          </div>
          {/* Author - Category */}
          <div className="text-xxs text-gray-400 truncate mt-1">
            Date:
            {/* Author */}
            <a className="text-xxs hover:underline"> {props.published} </a>
          </div>

          {/* Body */}
          <div className="flex flex-row mt-2">
            {/* Detail Column */}

            {/* Button Column */}
            <div className="flex flex-row flex-auto justify-end">
              <a
                className="flex text-xs border px-3 my-auto py-2 
                   border-amber-500 group hover:bg-amber-500 
                   rounded-xss
                   transition-all duration-200"
              >
                {/* Icon */}
                <i
                  className="mdi mdi-eye-outline text-amber-700
                       group-hover:text-white delay-100"
                />
                {/* Text */}

                <div
                  className="text-xxs text-amber-700 font-semibold ml-2
                       group-hover:text-white delay-100"
                >
                  <Link  href={{
            pathname: `/article/${encodeURIComponent(props.title)}`,
            query: props.data, // the data
          }}>
                    <a>Read More</a>
                  </Link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewsCard;
