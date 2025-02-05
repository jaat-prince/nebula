import Image from "next/image";
import React from "react";

function Euthho() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[89px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full absolute bottom-0 left-[0px]">
          <Image
            src={"/assets/png/wave-5.png"}
            width={1440}
            height={455}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full relative z-10">
          <div>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal">
              Euthanasia Service
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Saying goodbye to a beloved pet is a deeply emotional and
              challenging experience. At Nebula Vets, we understand the profound
              bond between you and your pet, and we are here to support you
              during this difficult time. Our compassionate team
              providesend-of-life care and guiding you through the process with
              empathy and understanding. Here's how we can assist you:
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Compassionate Support
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              We recognize that the decision to say goodbye to your pet is a
              personal and heartfelt one. Our team is here to listen to your
              concerns, answer any questions you may have, and provide emotional
              support throughout the entire process. We understand the grief and
              sadness that comes with this decision, and we aim to create a
              compassionate and comforting environment for both you and your
              pet.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Open Communication
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              We believe in open and honest communication when it comes to
              end-of-life care. Our veterinarians will take the time to discuss
              your pet's condition, prognosis, and quality of life to help you
              make an informed decision. We will guide you through the available
              options and ensure that you have all the information you need to
              make the best decision for your pet and your family.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Tailored End-of-Life Services
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              We offer a range of end-of-life services to accommodate your
              wishes and provide a peaceful transition for your pet. This
              includes euthanasia services, which can be performed at our
              veterinary hospital. Our experienced veterinarians prioritize your
              pet's comfort, dignity, and pain-free experience during this time.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Supportive Environment
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              We strive to create a calm and supportive environment during the
              end-of-life process. Our facility is designed to offer a peaceful
              setting where you and your pet can be together during these final
              moments. We provide a private space where you can say your
              goodbyes and spend quality time with your pet, offering comfort
              and reassurance throughout the process.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Aftercare Options
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              We understand that the loss of a pet is a deeply personal
              experience, and we offer various aftercare options to honor your
              pet's memory. This may include individual cremation with the
              return of ashes, communal cremation, or burial services. We can
              discuss these options with you and provide guidance on how to
              memorialize your beloved pet in a meaningful way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Euthho;
