import OpenAI from "openai";
import { useState } from "react";


function ChatComponent() {

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
    dangerouslyAllowBrowser: true
  });

  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('Say this is a test');

  const getOpenAIResponse = async (e) => {
    e.preventDefault();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    const completion_text = chatCompletion.choices[0].message.content;
    console.log(completion_text);
    setResponse(completion_text);
  }

  return (
    <>
      <div>
        <form onSubmit={getOpenAIResponse}>
          <input
            id="chat-input"
            type="text"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      </div>
    </>
  )
};


export default ChatComponent;