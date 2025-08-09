import React from "react";
import { domainUrl } from "./domainUrl";
import { Sparkle } from "lucide-react";

const Card = ({ pageObj }: { pageObj: any }) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:py-10">
      {pageObj?.map((el: any, index: number) => {
        return (
          <a
            key={el.url}
            href={`${domainUrl}/${el.url}`}
            className="flex flex-col items-start justify-between gap-3  border border-black p-5 text-left hover:translate-y-0.5 transition-transform h-full"
          >
            <div className="flex flex-col gap-3 flex-grow">
              <div>
                <Sparkle
                  strokeWidth={1}
                  color="white"
                  fill="white"
                  className="w-9 h-9 rounded-full bg-black p-2 animate-wiggle"
                />
              </div>
              <div className="text-sm font-extrabold text-black">{el.name}</div>
              <div className="text-left text-xs font-normal">
                {el.seoData.description}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Card;
