import OpenAI from "openai";
import { useState, useEffect, useRef } from "react";
import { useUserContext } from "../../context/UserContext";
import { addToLocalStorage } from "../../assets/js/add_return_ItemToLocalStorage.js";
import { getToken } from "../../assets/js/get_token.js"

function ChatComponent(props) {
  const [response, setResponse] = useState("");
  const firstTime = useRef(true);
  const { user } = useUserContext();

  useEffect(() => {

    async function getOpenAIResponse() {

      const tk = await getToken();
      const openai = new OpenAI({
        apiKey: tk, //import.meta.env.VITE_APP_GREETING,
        dangerouslyAllowBrowser: true
      });

      const prompt =
        "What are the itinerary of things related to" +
        props.interested +
        " on " +
        props.when +
        "that I must see in " +
        props.where +
        'in a very summarised way no longer than 130 tokens using bullet points style "->"';
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
        max_tokens: 130,
      });
      const completion_text = chatCompletion.choices[0].message.content;
      const output = completion_text
        .split("->")
        .map((v, i) => (i > 0 ? <p key={"A" + i} className="text-tekhelet my-1">- {v}</p> : null));

      setResponse(output);

      // save information to the local storage
      const Obj = {
        user: user.name,
        email: user.email,
        place: props.where,
        period: props.when,
        interest: props.interest,
        response: output
      }
      addToLocalStorage("search", Obj)
    }

    // Prevent the API to be call on the first rennder of the component
    if (!response) {
      getOpenAIResponse();
    }
  }, [props.where, props.when, props.interested]);

  const personalizedTitle = `${user?.name}'s Personalized Itinerary`;

  return (
    <div className="p-4 my-4 bg-french-gray rounded-lg">
      <div className="font-semibold mb-2 text-tekhelet">{personalizedTitle}</div>
      <div>{response}</div>
    </div>
  );
}

export default ChatComponent;
