import { useState, useContext } from "react";
import {
  CommentsContext,
  CommentsContextProvider
} from "../contexts/CommentsContext";
function Editing() {
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const { Edit, setEdit, EditAsync } = useContext(CommentsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const createComment = {
      Name,
      Message,
    };
    EditAsync(createComment)
    setName("");
    setMessage("");
  };
  if (Edit === "true") {
    return (
      <CommentsContextProvider>
        <div className="fixed z-10 box-content inset-1 p-4 bg-[#2f387c5d] ease-in">
        <form className="inset-1/4 fixed" onSubmit={handleSubmit}>
        <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Nombre"
            value={Name}
            className="w-full rounded-full text-center m-auto justify-center"
            required
            minLength={4}
            maxLength={16}
          ></input>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensaje"
            value={Message}
            className=" resize-none w-full rounded-full text-center m-auto h-auto overflow-clip text-black border-r-4"
            required
            minLength={4}
            maxLength={50}
          ></textarea>
          <button onClick={() => setEdit("false")} className="bg-[#2F387C] w-2/4 hover:bg-[#3A4383] text-slate-200 m-auto">
            Enviar
          </button>
        </form></div>
      </CommentsContextProvider>
    );
  } else {
    return console.log("gasjdajs");
  }
}
export default Editing;
