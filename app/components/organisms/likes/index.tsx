import { FaceSmileIcon } from "@heroicons/react/24/outline";

const Likes = () => {
  return (
    <div className="w-full flex bg-white items-center flex-col relative z-[70]">
      <div className="w-1/2 mt-40">
        <div className="flex items-center  bg-gray-400 p-10 rounded-2xl">
          <div className="flex-shrink">
            <FaceSmileIcon className="w-[300px] opacity-25" />
          </div>
          <div>
            <ul className="cloud" tw="items-center">
              <li>
                <p data-weight="15">Music</p>
              </li>
              <li>
                <p data-weight="90">Cold Beer</p>
              </li>
              <li>
                <p data-weight="4">Vape (but I used to hate it)</p>
              </li>
              <li>
                <p data-weight="10">Guitars</p>
              </li>
              <li>
                <p data-weight="3">Piña colada</p>
              </li>
              <li>
                <p data-weight="7">Getting caught in the rain</p>
              </li>
              <li>
                <p data-weight="2">A good, handmade pork pie</p>
              </li>
              <li>
                <p data-weight="9">Comma&#39;s and long, drawn out sentences</p>
              </li>
              <li>
                <p data-weight="8">Start Trek</p>
              </li>
              <li>
                <p data-weight="2">Low budget SciFi/Horror movies</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Likes;
