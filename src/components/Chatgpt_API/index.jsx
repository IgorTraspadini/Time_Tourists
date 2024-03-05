import OpenAI from "openai";
import { useState, useEffect, useRef } from "react";

function ChatComponent(props) {
  // useState and useRef to manage component state and lifecycle
  const [response, setResponse] = useState("");
  // Set the firstTime variable using "useRef" to track the first render of the object
  const firstTime = useRef(true);

  useEffect(() => {
    // Check if is the initial page render to avoid calling API on every re-render
    if (firstTime.current) {
      firstTime.current = false;
      return;
    }

    // Create a openai object to call the API
    const openai = new OpenAI({
      // Store the API token on the .env file to prevet exposing it in the GitHub
      apiKey: "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",
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
          i > 0 ? output.push(<p key={"A" + i}>- {v}</p>) : null
        );
      setResponse(output);
    }

    if (!response) {
      getOpenAIResponse();
    }
  }, [props.where, props.when, props.interested]);

  return (
    <>
      <div>{response}</div>
    </>
  );
}

export default ChatComponent;
