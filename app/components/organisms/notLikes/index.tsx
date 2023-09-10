import { FaceFrownIcon } from "@heroicons/react/24/outline";

const NotLikes = () => {
  return (
    <div className="w-full flex bg-white items-center flex-col relative z-[70]">
      <div className="w-1/2 mt-40">
        <div className="flex items-center">
          <div>
            <ul className="cloud" tw="items-center">
              <li>
                <p data-weight="8">Chart (schitt) Music</p>
              </li>
              <li>
                <p data-weight="15">Warm Beer</p>
              </li>
              <li>
                <p data-weight="4">Smoking (but I used to love it)</p>
              </li>
              <li>
                <p data-weight="5">
                  The fact that, in this day and age, when we have AI running
                  everything, self driving cars and all those other mircals of
                  the modern world, do we, as coders still rely on command line
                  interfaces for the most mission critical aspects of a project!
                  Someone please put a GUI on it! GRRRR!
                </p>
              </li>
              <li>
                <p data-weight="7">Barry Manalow</p>
              </li>
              <li>
                <p data-weight="11">Start Trek - Deep Space 9</p>
              </li>
              <li>
                <p data-weight="2">
                  Boy Bands, all of them! And Girl Bands, musn&#39;t leave out
                  the Girl Bands - Spice what now?
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-shrink">
            <FaceFrownIcon className="w-[300px] opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotLikes;
