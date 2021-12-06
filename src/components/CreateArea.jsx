import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [onclick,setonClick]= useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleClick(){
   return  setonClick(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          onClick={handleClick}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder={onclick && "Take a note..."}
          rows={onclick?"3":"1"}
        />
        <Zoom in={onclick}>
         <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
       
      </form>
    </div>
  );
}

export default CreateArea;
