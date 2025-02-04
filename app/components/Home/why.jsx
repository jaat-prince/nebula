import { whyData } from "../Helper/Helper";
import Fqaa from "../Common/Fqaa";

function why() {
  return (
    <div className="bg-[#494336] py-[60px] md:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Grey,#D7D9DD)] md:ml-[30px] ff-av">
          Why choose Nebula Vets?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[59px] gap-y-[15px] md:gap-y-5 lg:gap-y-[32px] gap-x-[70px] sm:mx-[30px]">
          {whyData.map((item, index) => (
            <Fqaa key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default why;
