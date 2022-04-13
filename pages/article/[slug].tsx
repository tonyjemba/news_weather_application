import * as React from "react";
import Image from "next/image";

interface ArticleProps {
  name?: string;
}

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-96"
        style={{
          backgroundImage:
            "url(https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/410ba6b536e971e9273ab95ddd8c2de2.png)",
        }}
      />
      <div>
        <div className="w-full mt-4 md:w-3/5 mb-12 mx-auto">
          <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none">
            Kemp and Bottoms hurl insults at each other in Georgia mask feud
          </div>

          <div className="w-full text-gray-600 font-thin italic px-5 pt-3">
            By <strong className="text-gray-700">Quint Forgey</strong>
            <br />
            07/17/2020 09:57 AM EDT
            <br />
            Updated: 07/17/2020 10:33 AM EDT
          </div>
          <div className="px-5 w-full mx-auto">
            <p className="my-5">
              Georgia Gov. Brian Kemp and Atlanta Mayor Keisha Lance Bottoms
              hurled insults at one another Friday, as their legal battle over
              whether to mandate masks in the state’s capital city entered its
              second day.
            </p>
            <p className="my-5">
              During dueling appearances at a Capitol news briefing and in an
              interview with CNN, the Republican governor and the Democratic
              mayor both accused the other’s office of playing politics amid a
              pandemic that continues to ravage communities across Georgia.
            </p>
            <p className="my-5">
              Updating members of the media on the state’s coronavirus response,
              Kemp defended his decision to sue Atlanta’s mayor and city council
              in an effort to block local officials there from enforcing an
              order requiring residents to wear a mask in public.
            </p>
            <p className="my-5">
              “Mayor Bottoms’ mask mandate cannot be enforced, but her decision
              to shutter businesses and undermine economic growth is
              devastating,” Kemp told reporters in Atlanta, likening his
              administration’s legal action to “sending in the National Guard.”
            </p>
            <p className="my-5">
              “I refuse to sit back and watch as disastrous policies threaten
              the lives and livelihoods of our citizens,” he said. “We will
              fight to stop reckless actions and put people over pandemic
              politics.”
            </p>
            <p className="my-5">
              Meanwhile, on CNN, Bottoms dismissed Kemp’s unfolding criticism as
              “propaganda” and “completely inaccurate,” and called the
              escalating controversy over face coverings “very bizarre, quite
              frankly.”
            </p>
            <p className="my-5">
              Bottoms also charged that the governor’s lawsuit was politically
              motivated, remarking that she did not “think it was happenstance”
              that Kemp pursued litigation one day after President Donald Trump
              visited Atlanta.
            </p>
            <p className="my-5">
              Furthermore, Bottoms alleged the lawsuit represented an act of
              “personal retaliation.” She noted that other Georgia cities had
              imposed similar mask orders, and said the governor “sued us
              personally. He did not sue the city of Atlanta. He filed suit
              against myself and our city council personally.”
            </p>
            <p className="my-5">
              The high-profile clash between two of Georgia’s top leaders came
              after Kemp issued a statewide order Wednesday banning local mask
              mandates. But Bottoms said her city’s order requiring face
              coverings would continue to apply, provoking Kemp to file his
              lawsuit in state court Thursday.
            </p>
            <p className="my-5">
              The feud has served to further elevate the national profile of
              Bottoms, who revealed this month that she had tested positive for
              Covid-19 and has attained greater public prominence due to reports
              that she is being vetted for the role of running mate to
              presumptive Democratic presidential nominee Joe Biden.
            </p>
            <p className="my-5">
              As for Kemp, the rift with Bottoms has dredged up earlier
              criticisms of his management of Georgia’s coronavirus outbreak.
            </p>
            <p className="my-5">
              The governor lifted his stay-at-home order at the end of April
              after memorably admitting earlier in the month that he had just
              learned asymptomatic infected people could spread the disease, and
              state officials were caught misrepresenting Covid-19 reporting
              data in May.
            </p>
            <p className="my-5">
              Kemp’s latest opposition to Bottoms’ order, at a time when even
              the Trump administration is encouraging deference to local
              coronavirus directives, has drawn significant criticism. It also
              diverges from the approaches of Republican governors in Southern
              states including Alabama, Arkansas and Texas, who have issued
              statewide mask mandates in recent days.
            </p>
            <p className="my-5">
              Kemp’s own lieutenant governor, Republican Geoff Duncan, appeared
              reluctant to offer a full-throated defense of the governor’s
              lawsuit Friday, instead repeatedly emphasizing the importance of
              mask-wearing.
            </p>
            <p className="my-5">
              “I hope we move past it,” Duncan told CNN of the ongoing
              controversy, adding that the “whole conversation around the
              mandate doesn’t help us get through this. It becomes a distraction
              [from] the health and well-being of 11 million Georgians.”
            </p>
            <p className="my-5">
              Although elected officials averse to mask mandates argue Americans
              should be able to make their own assessments regarding their
              safety, public health experts have warned that Covid-19 remains a
              highly contagious disease — and that those not wearing masks risk
              infecting other, potentially more vulnerable, people.
            </p>
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
