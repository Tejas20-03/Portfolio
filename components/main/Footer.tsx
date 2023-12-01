import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { Socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://github.com/Tejas20-03">
                <RxGithubLogo />
              </a>
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://www.linkedin.com/in/tejas20/">
                <RxLinkedinLogo />
              </a>
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                tejaschhabra.official@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[10px] text-[15px] text-center flex gap-2">
          <span>&copy; Designed by Tejas Chhabra with{" "}</span>
          <span>
            <Image
              src="/red-heart-icon.png"
              alt="heart-icon"
              height="20"
              width="20"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
