import { useState, useContext } from "react";
import {
  CommentsContext,
  CommentsContextProvider,
} from "../contexts/CommentsContext";
function Editing() {
  const { Edit, Id, setEdit, Comments} = useContext(CommentsContext);
  if (Edit === "true") {
    return (
      <CommentsContextProvider>
        <div className="fixed z-10 box-content m-auto inset-0 p-4 bg-[#c5caf35d] ease-in">
          {
              <div key={Comments.id} className="flex justify-center align-middle flex-col gap-4 bg-slate-100">
                  <img className="w-1/4 m-auto"src={Comments[Id].image} alt="" />
                  <p className="w-2/3 m-auto">{Comments[Id].message}</p>
                  <button onClick={()=>setEdit("false")} className="bg-slate-900 w-max m-auto p-5">
                    Salir
                  </button>
              </div>
          }        
        </div>
      </CommentsContextProvider>
    );
  } else {
    return console.log("gasjdajs");
  }
}
export default Editing;
