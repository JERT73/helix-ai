import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState(""); // store input data
    const [recentPrompt, setRecentPrompt] = useState(""); // store input after sent
    const [prevPrompt, setPrevPrompt] = useState([]); // array of previous prompt in recent tab
    const [showResult, setShowResult] = useState(false); // when true display result
    const [loading, setLoading] = useState(false); // if true shows loading animation
    const [resultData, setResultData] = useState(""); // display result

    const delayPara = (index, nextWord) => {
        setTimeout(function (){
            setResultData(prev => prev+nextWord);
        }, 75*index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true); // show loading icon
        setShowResult(true); // display result

        let response;
        if (prompt !== undefined){ // if we click prompt in recent 
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else { // if we provide prompt in the input field
            setPrevPrompt(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }

        let responseArray = response.split("**");
        let newResponse = "";

        for (let i = 0; i < responseArray.length; i++){
            if(i === 0 || i%2 === 0){
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");

        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }

        setLoading(false);
        setInput("");
    }

    

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        input,
        showResult,
        loading,
        resultData,
        setInput,
        newChat,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;