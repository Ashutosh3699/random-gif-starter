// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

import Random from "./components/Random";
import Tag from "./components/Tag";
import "./index.css";

export default function App() {

  return  (
  <div  className="w-screen h-screen overflow-x-hidden overflow-y-auto  background">

       <div className="bg-white text-center mt-12 mx-8  rounded-lg py-3 mb-5">
             <h1 className="font-bold text-2xl text-blue-500">A Random GIF  Generator</h1>
        </div>

         <div>

            <Random/>

            <Tag/>
        </div>

  </div>);

}
