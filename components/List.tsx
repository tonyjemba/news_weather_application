import * as React from "react";
import NewsCard from "./NewsCard";

interface WelcomeProps {
  name?: string;
}


async function getApiData(query?:String,page?:Number) {
  const Query = query;
const Page = page;
const requestUrl =
  "https://newsapi.org/v2/everything?" +
  `q=${Query}&` +
  `page=${Page}&` +
  "apiKey=0870e65fa5674bfb9d0914b0bfd7ca77";

  const res = await fetch(requestUrl);
  const data = await res.json();

  return data;
}

const List: React.FC<WelcomeProps> = (props) => {
  const [apiData, setApiData] = React.useState([]);
  const [totalResults, setTotalResults] = React.useState(0);

  React.useEffect(() => {
    getApiData("uganda",1).then((res) =>{ setApiData(res.articles);setTotalResults(res.totalResults)});
  }, []);
  console.log(apiData);
  
  return (
    <div>
      {/* Component Start */}

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
        <span className="text-sm font-semibold">1-20 of {totalResults} results</span>
        <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
          <div className="flex  items-center justify-between w-50 h-10 px-3  rounded border-2 border-gray-300  ">
            <input
              className="bg-white    text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search News"
            />
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-6 gap-y-2 w-full mt-6">
       {
         apiData.map((article,index)=>(
          <div key={index}>
            <NewsCard
          title={article.title}
          urlToImage={article.urlToImage}
          published={article.publishedAt}
        />
          </div>
         ))
       }
       
        
      </div>
      <div className="flex justify-center mt-10 mb-10 space-x-1">
        <button className="flex items-center justify-center h-8 w-8 rounded text-gray-600 hover:bg-indigo-200">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="flex  items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          Prev
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded text-gray-600 hover:bg-indigo-200 text-sm font-medium hover:text-indigo-600">
          1
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          2
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          3
        </button>
        <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          Next
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Component End  */}
    </div>
  );
};

export default List;
