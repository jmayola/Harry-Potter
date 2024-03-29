import { useContext } from "react";
import {
  CommentsContextProvider,
  CommentsContext,
} from "../contexts/CommentsContext";

function ShowComments() {
  const { Comments, DeleteComment, EditComment } = useContext(CommentsContext);
  if (Comments.length == 0) {
    return (
      <div className="bg-[#030525] text-center p-4 hover:border-[#0D113C] border-[#1B285E] border-4 rounded-3xl box-border  text-slate-100 text-xl col-span-full">
        <h1 className="text-center animate-pulse">No Hay Commentarios</h1>
      </div>
    );
  }

  return (
    <CommentsContextProvider>
      {Comments.map((Comments) => (
        <div key={Comments.id} onClick={() => EditComment(Comments.id)}>
          <div className=" m-auto  bg-[#d3cece] p-10  hover:border-[#975a2e] border-4 flex rounded-3xl box-border text-slate-100 w-full justify-center align-middle">
            <img
              src={Comments.image}
              alt=""
              className="m-auto justify-center align-middle hover:drop-shadow-sm"
            />
          </div>
        </div>
      ))}
    </CommentsContextProvider>
  );
}
export default ShowComments;
