import { createContext, useState, useEffect } from "react";
import { Comments as data } from "../data/Comments";
export const CommentsContext = createContext();

export function CommentsContextProvider(props) {
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
    const asd = Comments.map((id, i) => {
      if (i === find) {
        setEdit("true");
        return EditAsync()
      } else {
        return id;
      }
    });
    setComments(asd);
  }
  function EditAsync (comment) {
    let robj = {};
    robj.name = comment.Name;
    robj.message = comment.Message;
    robj.id = id.id;
    return robj; 
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
        setEdit,
        EditAsync
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
}
