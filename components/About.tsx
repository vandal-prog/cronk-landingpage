import Image from "next/image";
import React, { useRef } from "react";
import AboutImage from "../public/image12.jpeg";
import { Button } from "./Button";
import { toast } from "react-toastify";

export const About = () => {
  const addressRef = useRef(null);

  function copyToClipboard2(event: any, textAreaRef: any) {
    textAreaRef?.current?.select();
    document.execCommand("copy");
    event.target.focus();
    toast.success("Copied to clipboard");
  }
  return (
    <div className="w-full pt-[6rem] pb-[7rem] px-5 bg-black">
      <div className="max-w-7xl mx-auto w-full flex items-center flex-col md:flex-row gap-8">
        <div className="flex items-start flex-col w-[100%] md:w-[50%] gap-5">
          <h2 className="text-[28px] leading-[110%] md:text-[48px] md:leading-[65px] font-bold">
            About Cronkcro
          </h2>
          <p className="text-[14px] leading-[24px] text-[#E5E6ED] md:text-[20px] lg:leading-[36px]">
            $CROnk is a meme-packed, fun-loving project on the Cronos chain.
            With community at its heart, it offers cool NFT mint and innovative
            crypto experiences, all wrapped up in a dank meme culture that
            everyone can enjoy. $CROnk is not just a token, it's a lifestyle.
          </p>
          <div className="px-8 py-4 flex flex-col bg-blackTert/50 rounded-[10px] backdrop-blur-[2px] md:flex-row md:items-center md:justify-between gap-8 w-full">
            <div className="flex flex-col gap-1 md:text-left w-full">
              <h4 className="text-[20px] leading-[27px]">Contract:</h4>
              <textarea
                value="0xC4a174cCb5fb54a6721e11e0Ca961e42715023F9"
                ref={addressRef}
                className="w-full text-[14px] h-[48px] pt-[10px] pr-4 bg-transparent resize-none"
                readOnly
              />
            </div>
            <div
              className="flex justify-center bg-blackTert p-3 rounded-lg cursor-pointer"
              onClick={(e) => {
                copyToClipboard2(e, addressRef);
              }}
            >
              <Image
                src="https://crogecoin.com/_next/static/media/copy.c3e43f3d.svg"
                alt="copy icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* <Button
            text="Buy CROnk OG NFT on secondary on CROnk's Markets"
            onClick={() => {}}
            bg={false}
            color="#fff"
          /> */}
          <div className="rounded-full border-[2px] w-full md:w-auto md:rounded-[8px]  px-11 py-3 flex items-center justify-center whitespace-nowrap text-[12px] md:text-[16px]">
            <span>Buy CROnk OG NFT on secondary on CROnk's Markets</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full flex flex-row gap-4">
              <div className="flex items-center justify-center w-[72px] min-w-[72px] h-[72px] bg-blackTert/50 rounded-[12px]">
                <Image
                  src="https://crogecoin.com/icons/people.svg"
                  alt="people icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col justify-center gap-2 w-full">
                <h4 className="font-bold text-[18px] leading-[26px] md:text-[20px] md:leading-[36px]">
                  Cronk cro: Empowering community building in web3
                </h4>
                <p className="text-[14px] leading-[24px] text-instrument-card-text md:text-[20px] md:leading-[36px]">
                  We strive to assemble users from across all networks to
                  experience the originality of what CROnk is and what utilities
                  CROnk has to offer!
                </p>
              </div>
            </div>

            {/* <div className="w-full flex flex-row gap-4">
              <div className="flex items-center justify-center w-[72px] min-w-[72px] h-[72px] bg-blackTert/50 rounded-[12px]">
                <Image
                  src="https://crogecoin.com/icons/bridge.svg"
                  alt="people icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-bold text-[18px] leading-[26px] md:text-[20px] md:leading-[36px]">
                  What's with crogecoin and the croge?
                </h4>
                <p className="text-[14px] leading-[24px] text-instrument-card-text md:text-[20px] md:leading-[36px]">
                  “Croge” is our fun, friendly mascot! Crogecoin is the Dogecoin
                  of the Cronos Blockchain.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <Image src={AboutImage} alt="about-image" />
        </div>
      </div>
    </div>
  );
};
