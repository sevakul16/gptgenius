import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">GPTGenius</h1>
          <p className="py-6 text-lg leading-loose">
            GPT, or Generative Pre-trained Transformer, is an advanced AI
            language model developed by OpenAI. It processes and generates
            human-like text based on input prompts, making it a powerful tool
            for tasks like answering questions, creating content, translating
            languages, and simulating conversations.
          </p>
          <Link href="/chat" className="btn btn-primary">
            Start Chatting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
