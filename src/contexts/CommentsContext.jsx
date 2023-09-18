import { createContext, useState, useEffect } from "react";
import { Comments as data } from "../data/Comments";
import Editing from "../components/Editing";
export const CommentsContext = createContext();

export function CommentsContextProvider(props) {
  const [Id, setId] = useState(0)
  const [Comments, setComments] = useState([]);
  const [Edit, setEdit] = useState("false");
  useEffect(() => {
    setComments(data);
  }, []);
  function AddMessage(comment) {
    setComments([
      ...Comments,
      {
        name: comment.Name,
        message: comment.Message,
        id: Math.random(),
      },
    ]);
  }
  function DeleteComment(id) {
    setComments(Comments.filter((Comments) => Comments.id !== id));
  }
  function EditComment(id) {
    const find = Comments.findIndex((comments) => comments.id === id);
    setId(id)
    const asd = Comments.map((id, i) => {
      if (i === find) {
        setEdit("true");
      } 
    });
    setComments(asd);
  }

  return (
    <CommentsContext.Provider
      value={{
        Comments,
        setComments,
        AddMessage,
        DeleteComment,
        EditComment,
        Edit,
        Id,
        setEdit,
        EditAsync
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
}
