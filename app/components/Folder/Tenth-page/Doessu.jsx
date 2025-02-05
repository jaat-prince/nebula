import Image from "next/image";
import React from "react";

function Doessu() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[148px] relative">
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
              Does my pet need a pre-consultation?
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Yes, by conducting a pre-operative consultation, performing a
              physical examination, and considering bloodwork results, we can
              minimize the risks associated with surgery and optimize the
              outcome for your beloved pet. Your pet's safety and well-being are
              our top priorities throughout the entire surgical process.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              How much will it cost?
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Surgery costs can vary based on several factors, including the
              specific procedure your pet requires, their weight, any necessary
              medications, and additional considerations. To provide you with an
              accurate estimate for your pet's surgery, we recommend booking a
              pre-surgical consultation with our experienced veterinarians.
            </p>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              If you prefer, you can also reach out to us via email at
              nebulavets@gmail.comto request an estimate. Please provide us with
              as much information as possible about your pet's condition and the
              specific procedure they may need. Our team will review your
              request and respond promptly with an estimate based on the
              information provided.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Do you accept insurance?
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Yes, at Nebula Vets, we accept all forms of pet insurance. We
              understand the importance of financial support when it comes to
              your pet's healthcare needs. By accepting various pet insurance
              providers, we aim to make the reimbursement process as seamless as
              possible for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doessu;
