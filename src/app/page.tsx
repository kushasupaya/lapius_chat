"use client";
import {
  CustomTextBox,
  LottieAnimation,
  MainDisclosure,
  MiniDisclosure,
} from "@/components";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  return (
    <div>
      <main className="relative container mx-auto  py-6 text-center z-10">
        <div className="inline-flex bg-black rounded-full px-4 py-2">
          <Image
            width={70}
            height={20}
            src="/logolapius.svg"
            alt="Logo of lapius"
          />
        </div>
        <div className="flex justify-center items-center gap-6 mt-12">
          <div className="w-[500px] h-[500px]">
            <CustomTextBox onAnalyze={handleAnalyze} />
          </div>
          <div className="border rounded-md bg-white w-[500px] h-[500px] p-6 ">
            {isLoading ? (
              <LottieAnimation
                src="/outputlot.json"
                className="w-[400px]"
                isAnimating={isLoading}
              />
            ) : (
              <MainDisclosure
                heading="H02.401"
                description="H02.401: Unspecified ptosis of right eyelid"
              >
                <MiniDisclosure
                  heading="Diagnosis text"
                  description="Except for a 33 mm thick right ptosis"
                />
                <MiniDisclosure
                  heading="Explanation"
                  description="Detailed explanation about ptosis and its causes."
                />
                <MiniDisclosure
                  heading="Other codes"
                  description="Additional codes relevant to this diagnosis."
                />
              </MainDisclosure>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
