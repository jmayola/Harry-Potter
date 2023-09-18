import { useContext } from "react";
import {
  CommentsContextProvider,
  CommentsContext,
} from "../contexts/CommentsContext";

function ShowComments() {
  const { Comments, DeleteComment, EditComment } = useContext(CommentsContext);
  if (Comments.length == 0) {
    return (
      <div className="bg-[#030525] text-center p-4 m-5 hover:border-[#0D113C] border-[#1B285E] border-4 rounded-3xl box-border  text-slate-100 text-xl col-span-full">
        <h1 className="text-center animate-pulse">No Hay Commentarios</h1>
      </div>
    );
  }

  return (
    <CommentsContextProvider>
      {Comments.map((Comments) => (
        <div key={Comments.id}>
          <div className="bg-[#030525] p-4 m-5 hover:border-[#0D113C] border-[#1B285E] border-4 rounded-3xl box-border text-slate-100">
            <h1 className=" text-lg text-left">{Comments.name}</h1>
            <p className="p-2 overflow-visible">{Comments.message}</p>
            <div className="p-3 justify-between flex">
              <button
                className="bg-red-400 rounded-full p-2"
                onClick={() => DeleteComment(Comments.id)}
              >
                Eliminar
              </button>
              <button
                className="bg-slate-400 rounded-full p-2"
                onClick={() => EditComment(Comments.id)}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      ))}
    </CommentsContextProvider>
  );
}

export default ShowComments;
