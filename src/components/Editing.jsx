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
        <div className="flex align-middle justify-center  inset-0 fixed p-auto bg-[#c5caf35d]">
          {
              <div key={Comments.id} className="flex align-middle justify-center flex-col h-fit w-1/2 m-auto rounded-3xl gap-5 p-3 bg-slate-100">
                  <img className="w-1/4 m-auto"src={Comments[Id].image} alt="" />
                  <p className="w-2/3 m-auto">{Comments[Id].message}</p>
                  <button onClick={()=>setEdit("false")} className="bg-white border-black border w-max m-auto px-10 py-2 rounded-xl">
                    Salir
                  </button>
              </div>
          }        
        </div>
      </CommentsContextProvider>
    );
  } else {
    return
  }
}
export default Editing;
