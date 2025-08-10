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
            className="flex flex-col items-start justify-between gap-3 border border-[hsl(var(--border))] p-5 text-left hover:translate-y-0.5 transition-all duration-200 h-full bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] "
          >
            <div className="flex flex-col gap-3 flex-grow">
              <div>
                <Sparkle
                  strokeWidth={1}
                  className="w-9 h-9 rounded-full bg-[hsl(var(--primary))] p-2 animate-wiggle text-[hsl(var(--primary-foreground))] fill-[hsl(var(--primary-foreground))]"
                />
              </div>
              <div className="text-sm font-extrabold text-[hsl(var(--text-primary))] transition-colors duration-200">{el.name}</div>
              <div className="text-left text-xs font-normal text-[hsl(var(--text-secondary))] transition-colors duration-200">
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
