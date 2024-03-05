import OpenAI from "openai";
import { useState, useEffect, useRef } from "react";
import { useUserContext } from "../../context/UserContext";

function ChatComponent(props) {
  const [response, setResponse] = useState("");
  const firstTime = useRef(true);
  const { user } = useUserContext();

  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
      return;
    }

    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    async function getOpenAIResponse() {
      const prompt =
        "What are the itinerary of things related to" +
        props.interested +
        "that I must see in " +
        props.where +
        " on " +
        props.when +
        'in a very summarised way no longer than 130 tokens using bullet points style "->"';
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
        max_tokens: 130,
      });
      const completion_text = chatCompletion.choices[0].message.content;
      const output = completion_text
        .split("->")
        .map((v, i) => (i > 0 ? <p key={"A" + i} className="text-muted-purple my-1">- {v}</p> : null));

      setResponse(output);
    }

    if (!response) {
      getOpenAIResponse();
    }
  }, [props.where, props.when, props.interested]);

  const personalizedTitle = `${user?.name}'s Personalized Itinerary`;

  return (
    <div className="p-4 my-4 bg-creamy-yellow rounded-lg shadow-lg">
      <div className="font-semibold mb-2 text-muted-purple">{personalizedTitle}</div>
      <div>{response}</div>
    </div>
  );
}

export default ChatComponent;
