import OpenAI from "openai";
import { useState, useEffect, useRef } from "react";
import { useUserContext } from "../../context/UserContext";

function ChatComponent(props) {
  // useState and useRef to manage component state and lifecycle
  const [response, setResponse] = useState("");
  // Set the firstTime variable using "useRef" to track the first render of the object
  const firstTime = useRef(true);
  const user = useUserContext();

  useEffect(() => {
    // Check if is the initial page render to avoid calling API on every re-render
    if (firstTime.current) {
      firstTime.current = false;
      return;
    }

    // Create a openai object to call the API
    const openai = new OpenAI({
      // Store the API token on the .env file to prevet exposing it in the GitHub
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      // using just in case of SSR or something else goes wrong
      dangerouslyAllowBrowser: true,
    });

    // Array to store the API's output
    const output = [];

    // Call the API and waiting for the promise to be resolved
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
      console.log(completion_text);
      completion_text
        .split("->")
        .forEach((v, i) =>
          i > 0 ? output.push(<p key={"A" + i} className="text-dark-green my-1">- {v}</p>) : null
        );
      setResponse(output);
    }

    if (!response) {
      getOpenAIResponse();
    }
  }, [props.where, props.when, props.interested]);

  const personalizedTitle = `${user?.name}'s Personalized Itinerary`;

  return (
    <>
      <div className="p-4 my-4 bg-light-blue rounded-lg shadow-lg">
        <div className="text-dark-green font-semibold mb-2">{personalizedTitle}</div>
        <div className="text-dark-yellow">{response}</div>
      </div>
    </>
  );
}

export default ChatComponent;
