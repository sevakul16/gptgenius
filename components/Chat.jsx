"use client";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { generateChatResponse } from "../utils/action";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { mutate } = useMutation({
    mutationFn: (message) => generateChatResponse(message),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);

    // setMessages([...messages, text]);
    // setText("");
  };
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">messages </h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            ASK QUESTION
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
