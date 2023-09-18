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
        <div className="fixed z-10 box-content m-auto inset-1 p-4 bg-[#2f387c5d] ease-in">
          {
              <div key={Comments.id}>
                  <img className="w-11"src={Comments[Id].image} alt="" />
                  <button onClick={()=>setEdit("false")}>
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
