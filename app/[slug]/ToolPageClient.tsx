"use client";

import React, { useState, useEffect } from "react";
import UI2 from "../../components/UI2";

// Type definitions
interface SeoData {
  title: string;
  description: string;
  slug: string;
}

interface FieldConfig {
  name: string;
  maxLength: number;
  placeholder?: string;
  hint?: string;
  err?: string;
  showOptional?: boolean;
  rows?: number;
}

interface InitialState {
  title: string;
  description?: string;
  keywords?: string;
  language: string;
  tone?: string;
  time?: string;
  platform?: string;
}

interface PromptState {
  title: string;
  description: string;
  keywords: string;
  language?: string;
  tone?: string;
  time?: string;
  platform?: string;
}

interface PageData {
  url: string;
  name: string;
  toolName: string;
  initialState: InitialState;
  title?: FieldConfig;
  description?: FieldConfig;
  keywords?: FieldConfig;
  language?: string;
  tone?: string;
  time?: string;
  platform?: string;
  btnText: string;
  seoData: SeoData;
  related?: string[];
}

interface ToolPageClientProps {
  pageData: PageData;
  relatedArr: PageData[];
}

const ToolPageClient = ({ pageData, relatedArr }: ToolPageClientProps) => {
  // State management from [ai].js
  const [prompt, setPromptData] = useState<PromptState>({
    title: pageData?.initialState?.title || "",
    description: pageData?.initialState?.description || "",
    keywords: pageData?.initialState?.keywords || "",
    language: pageData?.initialState?.language,
    tone: pageData?.initialState?.tone,
    time: pageData?.initialState?.time,
    platform: pageData?.initialState?.platform,
  });

  const [data, setData] = useState<string[] | null>(null);
  const [err, setErr] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [textCopy, setTextCopy] = useState(false);
  const [isLoading, setLoading] = useState(false);

  let initalNumberOfWords: number;
  let initalNumberOfMoney: number;

  const [numberOfWords, setNumberOfWords] = useState(initalNumberOfWords);
  const [moneySaved, setMoneySaved] = useState(initalNumberOfMoney);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localnumber = localStorage.getItem("numberOfWords");
      initalNumberOfWords = Number(localnumber) || 0;
      setNumberOfWords(initalNumberOfWords);
      const localMoney = localStorage.getItem("moneySaved") || "30";
      initalNumberOfMoney = Number(localMoney);
      setMoneySaved(initalNumberOfMoney);
    }
  }, [numberOfWords, moneySaved, initalNumberOfWords, initalNumberOfMoney]);

  // Event handlers from [ai].js
  const handleCopyText = () => {
    let copyText = document.getElementById("copy");
    if (copyText) {
      let htmlcopydata = copyText.innerText;
      navigator.clipboard.writeText(htmlcopydata);
      setTextCopy(true);
      setTimeout(() => {
        setTextCopy(false);
      }, 3500);
    }
  };

  const handleClearText = () => {
    setData(null);
    window.location.reload();
  };

  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptData({ ...prompt, title: e.target.value });
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptData({ ...prompt, description: e.target.value });
  };

  const handleKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromptData({ ...prompt, keywords: e.target.value });
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPromptData({ ...prompt, language: e.target.value });
  };

  const handleTone = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPromptData({ ...prompt, tone: e.target.value });
  };

  const handleTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPromptData({ ...prompt, time: e.target.value });
  };

  const handlePlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPromptData({ ...prompt, platform: e.target.value });
  };

  // API call function from [ai].js
  const getData = async () => {
    const response = await fetch("/api/getGPT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt, slug: pageData.url }),
    });

    const resData = await response.json();

    console.log(resData, "resData");

    const DataArr = resData?.result?.split("\n");
    console.log(DataArr);
    setData(DataArr);
    setPromptData({
      title: pageData?.initialState?.title || "",
      description: pageData?.initialState?.description || "",
      keywords: pageData?.initialState?.keywords || "",
      language: pageData?.initialState?.language,
      tone: pageData?.initialState?.tone,
      time: pageData?.initialState?.time,
      platform: pageData?.initialState?.platform,
    });
    setLoading(false);
  };

  const RandomNumberBetween = (min: number, max: number) => {
    let delta = max - min;
    return Math.round(min + Math.random() * delta);
  };

  const handleApi = () => {
    if (!prompt.title) {
      setErr(true);
      return;
    }
    if (prompt.title) {
      setLoading(true);
      setData(null);
      getData();
      if (mobile) {
        setShow(true);
        setHide(false);
      }
    }

    let newNumber = Number(numberOfWords + RandomNumberBetween(49, 299));
    let newMoney = Number(moneySaved + RandomNumberBetween(0.1, 0.9));

    setNumberOfWords(newNumber);
    setMoneySaved(newMoney);

    if (typeof window !== "undefined") {
      localStorage.setItem("numberOfWords", newNumber.toString());
      localStorage.setItem("moneySaved", newMoney.toString());

      // Dispatch custom event to update stats in header
      const statsUpdateEvent = new CustomEvent("statsUpdated", {
        detail: {
          numberOfWords: newNumber,
          moneySaved: newMoney,
        },
      });
      window.dispatchEvent(statsUpdateEvent);
    }
  };

  const handleClearFields = () => {
    setPromptData({
      title: pageData?.initialState?.title || "",
      description: pageData?.initialState?.description || "",
      keywords: pageData?.initialState?.keywords || "",
      language: pageData?.initialState?.language,
      tone: pageData?.initialState?.tone,
      time: pageData?.initialState?.time,
      platform: pageData?.initialState?.platform,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 640) {
      let w = window.innerWidth;
      console.log(w);
      setMobile(true);
    }
  }, [mobile]);

  // Related pages are passed as prop from the server component

  return (
    <UI2
      prompt={prompt}
      handleTitle={handleTitle}
      handleDescription={handleDescription}
      handleKeywords={handleKeywords}
      handleLanguage={handleLanguage}
      handleTone={handleTone}
      handleTime={handleTime}
      handleClearText={handleClearText}
      handleCopyText={handleCopyText}
      handleApi={handleApi}
      isLoading={isLoading}
      handleClearFields={handleClearFields}
      handlePlatform={handlePlatform}
      data={data}
      err={err}
      textCopy={textCopy}
      text={pageData}
      mobile={mobile}
      show={show}
      hide={hide}
      relatedArr={relatedArr}
      numberOfWords={numberOfWords}
      moneySaved={moneySaved}
    />
  );
};

export default ToolPageClient;
