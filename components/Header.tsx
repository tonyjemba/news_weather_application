import * as React from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";

interface WelcomeProps {
  name: string;
}

const navigation = [
  { name: "Local News", href: "#" },
  { name: "Global News", href: "#" },
  { name: "Breaking News", href: "#" },
];
async function getWeather(){
  
  const requestUrl="https://api.weatherapi.com/v1/current.json?key=68e7919db5944badb83114030221304&q=kampala&aqi=no"
  const res = await fetch(requestUrl);
  const data = await res.json();

  return data;
}
const Header: React.FC<WelcomeProps> = (props) => {
  const [temeperature, setTemperature] = React.useState(0);
  const [prediction, setPrediction] = React.useState("");
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    getWeather().then(
      (res)=>{
        setPrediction(res.current.condition.text);
        setTemperature(res.current.temp_c);
        setLocation(res.location.name);
      }
    )
  }, []);
  return(
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div>Group 27</div>
            </nav>
          </div>

          <Transition
            as={React.Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Temeperature: {temeperature}{'\u00b0'}C</span>{" "}
              <br/>
              
              <br/>

            </h2>
            <span className="block text-indigo-600 xl:inline" style={{ fontSize:"25px", fontWeight:"bold" }}>
                Weather Prediction: {prediction}
              </span>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Location: {location}
            </p>
          </div>
        </main>
      </div>
      <div className="grid place-items-center w-screen ">
        <div className=" md:ml-10 mt-16   md:pr-4  md:space-x-8 ">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium  ms:pr-8  text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>

  </div>
)};

export default Header;
