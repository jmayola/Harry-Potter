import { useContext, useState } from "react";
import {
  CommentsContextProvider,
  CommentsContext,
} from "../contexts/CommentsContext";

function WriteMail() {
  const { AddMessage } = useContext(CommentsContext);
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const createComment = {
      Name,
      Message,
    };
    AddMessage(createComment);
    setName("");
    setMessage("");
  };
  return (
    <CommentsContextProvider>
      <form
        onSubmit={handleSubmit}
        className="text-lg w-3/4 justify-center m-auto mb-5"
      >
        <div className="flex flex-col gap-8 p-5 rounded-xl bg-slate-900">
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
          <button className="bg-[#2F387C] w-2/4 hover:bg-[#3A4383] text-slate-200 m-auto">
            Enviar
          </button>
        </div>
      </form>
    </CommentsContextProvider>
  );
}

export default WriteMail;
