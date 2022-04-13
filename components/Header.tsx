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
async function getWeather() {
  //const requestUrl="https://api.weatherapi.com/v1/current.json?key=68e7919db5944badb83114030221304&q=kampala&aqi=no"
  const requestUrl =
    "http://api.weatherstack.com/current?access_key=22f7db8a8955f684cc7375819e522b7c&query=kampala";
  const res = await fetch(requestUrl);
  const data = await res.json();

  return data;
}
const Header: React.FC<WelcomeProps> = (props) => {
  const [temeperature, setTemperature] = React.useState(0);
  const [prediction, setPrediction] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [icon, setIcon] = React.useState("");

  React.useEffect(() => {
    getWeather().then((res) => {
      console.log(res);
      setPrediction(res.current.weather_descriptions[0]);
      setTemperature(res.current.temperature);
      setLocation(res.location.name);
      setIcon(res.current.weather_icons[0]);
    });
  }, []);
  return (
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


          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Temeperature: {temeperature}
                  {"\u00b0"}C
                </span>{" "}
                <br />
                <br />
              </h2>
              <span
                className="block text-indigo-600 xl:inline"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                Weather Condition: {prediction}
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
  );
};

export default Header;
