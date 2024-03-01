import OpenAI from "openai";
import { useState } from "react";


function ChatComponent() {

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
    dangerouslyAllowBrowser: true
  });

  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('What are the itinerary of things related to music that I must see in China on Summer in a very summarised way no longer than 130 tokens using bullet points style "->"');
  const output = [];

  const getOpenAIResponse = async (e) => {
    e.preventDefault();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      max_tokens: 130
    });
    const completion_text = chatCompletion.choices[0].message.content;
    console.log(completion_text);
    completion_text.split("->").forEach((v, i) => i>0?output.push(<p key={"A"+i}>- {v}</p>):null)
    setResponse(output);
    
  }

  return (
    <>
      <div>
        <form onSubmit={getOpenAIResponse}>
          <input style={{width: "300px"}}
            id="chat-input"
            type="text"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{response}</div>
      </div>
    </>
  )
};


export default ChatComponent;