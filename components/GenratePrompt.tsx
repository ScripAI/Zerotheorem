interface PromptData {
  title: string;
  description?: string;
  language: string;
  keywords?: string;
  tone: string;
  time?: string;
  platform?: string;
}

const GenratePrompt = (prompt: PromptData, slug: string): string | undefined => {
  const { title, description, language, keywords, tone, time, platform } =
    prompt;

  let userPrompt;
  switch (slug) {
    case 'ig-reel-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Instagrm Reel on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'tiktok-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Tiktok on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'yt-shorts-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Youtube Shorts on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'app':
      userPrompt = `Assume you are a content creator. Write content in ${language} for a Tiktok on following. Topic: ${title}, description: ${description}, keywords: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'paragraph-writer':
      userPrompt = `Write 5-6 line paragraph in ${language} for following. Topic: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'sentence-expander':
      userPrompt = `Continue writing following Sentence in ${language}. Sentence: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'content-rewriter':
    case 'sentence-rewriter':
      userPrompt = `Rewrite following content in ${language}. Content: ${title}, Tone: ${tone}`;
      break;
    case 'sales-copy':
      userPrompt = `Write Sales Copy in ${language} for a landing page based on following. Product/Service Name: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the copy with 1 sentence hook, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'social-post-idea':
      userPrompt = `Write 3 Social Media Post ideas in one line for ${platform} in ${language} based on following. Topic: ${title}, keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-video-idea':
      userPrompt = `Write 3 Youtube Video Ideas for Youtube in ${language} based on following. Topic: ${title}, keywords: ${keywords} Tone: ${tone}`;
      break;
    case 'content-idea':
      userPrompt = `Write 3 content ideas in ${language} for following. Topic: ${title}, Tone: ${tone}`;
      break;
    case 'twitter-bio':
      userPrompt = `Write 3 one line Twitter Bio in ${language} for me based on following. About Me: ${title}, Interests: ${keywords}, Tone: ${tone}, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'social-media-post':
      userPrompt = `Assume you are a social media expert. Write content in ${language} for a ${platform} post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'instagram-caption':
      userPrompt = `Assume you are Instagram content creator. Write Instagram Caption in ${language} on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the Caption with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-post':
      userPrompt = `Assume you are linkedin content creator. Write content in ${language} for a linkedin post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-story-post':
      userPrompt = `Assume you are linkedin content creator. Write linkedin Story post in ${language} on following. Story Topic: ${title}, Story description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-post-hook':
      userPrompt = `Assume you are linkedin content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a linkedin post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'tiktok-hook':
      userPrompt = `Assume you are Tiktok content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a Tiktok video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-hook':
      userPrompt = `Assume you are youtube content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'facebook-post':
      userPrompt = `Assume you are facebook content creator.Write content in ${language} for a facebook post on following.Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'twitter-tweet':
      userPrompt = `Assume you are Twitter content creator.Write Tweet in ${language} for a Twitter post on following.Tweet Topic: ${title}, keyword: ${keywords}, Tone: ${tone}, Start the tweet with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'twitter-thread':
      userPrompt = `Assume you are Twitter content creator.Write Twitter Thread in ${language} for a Twitter on following.Thread Topic: ${title}, keyword: ${keywords}, Tone: ${tone}, Start the tweet with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'definition':
      userPrompt = `Write definition in ${language} for following.Topic: ${title}, Tone: ${tone}`;
      break;
    case 'hashtag-generator':
      userPrompt = `Write 30 hashtag all lowercase with "#" sign and without bullet point in ${language} for ${platform} post on following.Topic: ${title}, description: ${description}. note: don't add serial number count till 30`;
      break;
    case 'twitter-hashtag':
      userPrompt = `Write 5 hashtag all lowercase with "#" sign and without bullet point in ${language} for Twitter post on following.Tweet Topic: ${title}`;
      break;
    case 'linkedin-hashtag':
      userPrompt = `Write 5 hashtag all lowercase with "#" sign and without bullet point in ${language} for linkedin post on following. Topic: ${title}`;
      break;
    case 'tiktok-hashtag':
      userPrompt = `Write 5 hashtag all lowercase with "#" sign and without bullet point in ${language} for tiktok video on following. video: ${title}`;
      break;
    case 'youtube-hashtag':
      userPrompt = `Write 10 hashtag all lowercase with "#" sign and without bullet point in ${language} for youtube video on following. video: ${title}`;
      break;
    case 'youtube-tag':
      userPrompt = `Write 5  youtube video tags in ${language} for following. video: ${title}`;
      break;
    case 'facebook-hashtag':
      userPrompt = `Write 20 hashtag all lowercase with "#" sign and without bullet point in ${language} for facebook post on following. Topic: ${title}`;
      break;
    case 'instagram-hashtag':
      userPrompt = `Write 30 hashtag all lowercase with "#" sign and without bullet point in ${language} for instagram post on following. Topic: ${title},`;
      break;
    case 'youtube-intro':
      userPrompt = `Assume you are youtube content creator. Write 2 sentence hook intro so that people will want to stop scrolling. Write in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-video-outline':
      userPrompt = `Assume you are youtube content creator. Write Youtube Video Outline in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-seo-title':
      userPrompt = `Assume you are SEO expert. Write 3 Youtube SEO Title in ${language} for a Youtube video on following. Video title: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-seo-description':
      userPrompt = `Assume you are SEO expert. Write 3 Youtube SEO description in ${language} for a Youtube video on following. Video title: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'email-subject':
      userPrompt = `Write 3 Email Subject lines in ${language} for following. Email Topic/description: ${title}, Tone: ${tone},`;
      break;
    case 'blog-post-idea':
      userPrompt = `Write 3 Blog Post Ideas for online blog in ${language} based on following.Blog Topic: ${title}, keywords: ${keywords}, Tone: ${tone}. make the ideas clickbaity.`;
      break;
    case 'blog-post-title':
      userPrompt = `Write 3 Blog Post Titles for online blog in ${language} based on following.Blog Topic: ${title}, keywords: ${keywords}, Tone: ${tone}. make the Title clickbaity.`;
      break;
    case 'blog-post-outline':
      userPrompt = `Assume you are SEO expert.Write Blog Post Outline in ${language} for an online blog on following.Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone};`;
      break;
    case 'blog-post-hook':
      userPrompt = `Assume you are blog content creator. Write 1 sentence hook so that people will want to read the full blog. Write in ${language} for a online blog on following. Blog Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'article-rewriter':
      userPrompt = `Rewrite following article in ${language}. article Title: ${description} Content: ${title}, Tone: ${tone};`;
      break;
    case 'blog-rewriter':
      userPrompt = `Rewrite following Blog post Paragraph in ${language}. Blog Post Title: ${description} Content: ${title}, Tone: ${tone};`;
      break;
    case 'blog-paragraph-writer':
      userPrompt = `Write 5-6 line blog paragraph in ${language} for Online blog on following. blog title/topic: ${title}, description: ${description} keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'company-name-generator':
      userPrompt = `Write 3 company name for a business-based on following. company description: ${title}, keyword: ${keywords},`;
      break;
    case 'blog-name-generator':
      userPrompt = `Write 3 blog name for a blog-based on following. blog description: ${title}, keyword: ${keywords},`;
      break;
    case 'buisness-name-generator':
      userPrompt = `Write 3 buisness name for a business-based on following. buisness description: ${title}, keyword: ${keywords},`;
      break;
    case 'domain-name-generator':
      userPrompt = `Write 5 domain name without domain extension for a business-based on following. buisness description: ${title}, keyword: ${keywords},`;
      break;
    case 'cold-email':
      userPrompt = `Write a Cold Email in ${language} for following. Email Topic/description: ${title}, Tone: ${tone},`;
      break;
    case 'rewrite-email':
      userPrompt = `reWrite a following Email in ${language}. Email Topic/description: ${title}, Tone: ${tone},`;
      break;
    case 'email-rewriter':
      userPrompt = `reWrite a following Email in ${language}. Email Topic/description: ${title}, Tone: ${tone},`;
      break;
    case 'seo-keyword-generator':
      userPrompt = `Write 6 SEO Keyword Generator in ${language} for following seed keyword: ${title}`;
      break;
    case 'seo-title-generator':
      userPrompt = `Assume you are SEO expert. Write 3 SEO blog Title in ${language} for blog based on following. blog title: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'seo-description-generator':
      userPrompt = `Assume you are SEO expert. Write 3 SEO blog description in ${language} for blog based on following. blog description: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'book-name-generator':
      userPrompt = `Generate 3 book name for a book-based on following. book description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'play-name-generator':
      userPrompt = `Generate 3 Play name for a Play-based on following. Play description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'project-name-generator':
      userPrompt = `Generate 3 Project name for a Project-based on following. Project description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'username-generator':
      userPrompt = `Generate 3 Username on following. Username description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'youtube-name-generator':
      userPrompt = `Generate 3 youtube channel name on following. youtube channel description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'youtube-channel-name-generator':
      userPrompt = `Generate 3 youtube channel name on following. youtube channel description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'app-name-generator':
      userPrompt = `Generate 3 App name for a App-based on following. App description/topic: ${title}, keyword: ${keywords},`;
      break;
    case 'baby-boy-name-generator':
      userPrompt = `Generate 3 baby boy names based on the following preferences. Preferences: ${title}, Keywords: ${keywords},`;
      break;
    case 'baby-girl-name-generator':
      userPrompt = `Generate 3 baby girl names based on the following preferences. Preferences: ${title}, Keywords: ${keywords},`;
      break;
    case 'cafe-name-generator':
      userPrompt = `Generate 3 cafe names based on the following description. Cafe description: ${title}, Keywords: ${keywords},`;
      break;
    case 'random-name-generator':
      userPrompt = `Generate 3 random names based on the following criteria. Random Name Criteria: ${title}, Keywords: ${keywords},`;
      break;

    case 'homepage-headline-generator':
      userPrompt = `Generate 3 engaging homepage headline using these details. Homepage Headline: ${title}, Keywords: ${keywords},`;
      break;
    case 'call-to-action-generator':
      userPrompt = `Generate 3 call-to-action. Seed CTA : ${title}, Keywords: ${keywords},`;
      break;
    case 'about-us-generator':
      userPrompt = `Generate 3 informative About Us copies. About Company: ${title}, Keywords: ${keywords},`;
      break;
    case 'product-features-generator':
      userPrompt = `Generate 3 Lists of size 3 of key features of given product. Product: ${title}, Keywords: ${keywords},`;
      break;
    case 'product-benefits-generator':
      userPrompt = `Generate 3 benefits of a product each benefit should be one line long. Product/features: ${title}, Keywords: ${keywords},`;
      break;
    case 'product-review-generator':
      userPrompt = `Write 5 comprehensive product review. Product: ${title}, Keywords: ${keywords},`;
      break;
    case 'linkedin-cold-reachout':
      userPrompt = `Generate 3 LinkedIn cold reachout message. ${title}, Keywords: ${keywords}, tone: ${tone}`;
      break;
    case 'about-me-generator':
      userPrompt = `Generate 3 engaging 'About Me' section. ${title}, Keywords: ${keywords}, tone: ${tone}`;
      break;
    case 'resume-hook-generator':
      userPrompt = `Generate 3 attention-grabbing resume Hook. ${title}, Keywords: ${keywords},`;
      break;
    case 'resume-intro-generator':
      userPrompt = `Generate 3 attention-grabbing resume intro. ${title}, Keywords: ${keywords},`;
      break;
    case 'job-skills-generator':
      userPrompt = ` List 10-15 essential skills for a specific job role. Job Title ${title}, Keywords: ${keywords},`;
      break;
    case 'job-description-generator':
      userPrompt = `Draft a 2 detailed job description. Job Title ${title}, Keywords: ${keywords},`;
      break;

    case 'facebook-ad-hook':
      userPrompt = `Assume you are a Facebook ad creator. Write a compelling hook for a Facebook ad in ${language}. Topic: ${title}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'instagram-ad-caption':
      userPrompt = `Assume you are an Instagram ad creator. Write an engaging caption for an Instagram ad in ${language}. Topic: ${title}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'linkedin-ad-title':
      userPrompt = `Assume you are a Linkedin ad creator. Write an attention-grabbing title for a Linkedin ad in ${language}. Topic: ${title}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'google-ad-title':
      userPrompt = `Assume you are a Google ad creator. Write a catchy title for a Google ad in ${language}. Topic: ${title}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'facebook-ad-copy':
      userPrompt = `Assume you are a Facebook ad creator. Write an ad copy that will make people want to stop scrolling. Write in ${language} for a Facebook ad on the following. Topic: ${title}, Description: ${description}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'instagram-ad-copy':
      userPrompt = `Assume you are an Instagram ad creator. Write an ad copy that will captivate your audience. Write in ${language} for an Instagram ad on the following. Topic: ${title}, Description: ${description}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'linkedin-ad-copy':
      userPrompt = `Assume you are a LinkedIn ad creator. Write a professional ad copy to engage your network. Write in ${language} for a LinkedIn ad on the following. Topic: ${title}, Description: ${description}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'linkedin-ad-description':
      userPrompt = `Assume you are a LinkedIn ad creator. Write a detailed description for a LinkedIn ad. Write in ${language} on the following. Topic: ${title}, Ad Copy: ${description}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'google-ad-copy':
      userPrompt = `Assume you are a Google ad creator. Write an ad copy that will stand out in search results. Write in ${language} for a Google ad on the following. Topic: ${title}, Description: ${description}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'google-ad-description':
      userPrompt = `Assume you are a Google ad creator. Write a compelling description for a Google ad. Write in ${language} on the following. Topic: ${title}, Ad Copy: ${description}, Keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'song-writer':
      userPrompt = `Assume you are a song writer. Write a song in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'poem-writer':
      userPrompt = `Assume you are a poet. Write a poem in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'bullet-point-summary':
      userPrompt = `Summarize the following content into bullet points. Write in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'bullet-point-answer':
      userPrompt = `Provide a bullet point answer to the following question. Write in ${language}. Question: ${title}, Tone: ${tone}`;
      break;

    case 'question-generator':
      userPrompt = `Generate a question based on the following topic. Write in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'question-answer-generator':
      userPrompt = `Generate an answer for the following question. Write in ${language}. Question: ${title}, Tone: ${tone}`;
      break;

    case 'fact-generator':
      userPrompt = `Generate a fact about the following topic. Write in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'quiz-generator':
      userPrompt = `Create a quiz question and answer based on the following topic. Write in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'topic-example-generator':
      userPrompt = `Give an example for the following topic. Write in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'customer-service-response':
      userPrompt = `Draft a customer service response. Write in ${language}. Issue: ${title}, Tone: ${tone}`;
      break;

    case 'pros-and-cons':
      userPrompt = `List the pros and cons of the following topic. Write in ${language}. Topic: ${title}, Tone: ${tone}`;
      break;

    case 'slogan-generator':
      userPrompt = `Create a slogan for the following. Write in ${language}. Brand/Topic: ${title}, Tone: ${tone}`;
      break;

    case 'webinar-title-generator':
      userPrompt = `Generate a title for a webinar. Write in ${language}. Subject: ${title}, Tone: ${tone}`;
      break;

    case 'acronym-generator':
      userPrompt = `Create an acronym for the following terms. Write in ${language}. Terms: ${title}, Tone: ${tone}`;
      break;

    case 'ai-language-translator':
      userPrompt = `Translate the following text. Original Language: ${language}, Text: ${title}, Target Language: [Specify Target Language]`;
      break;
    default:
      break;
  }
  return userPrompt;
};

export default GenratePrompt;
