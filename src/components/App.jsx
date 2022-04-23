import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Bucket from "./Bucket";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [buckets, setBuckets] = useState([]);
  function addBucket(newBucket) {
    setBuckets(prevBuckets => {
      return [...prevBuckets, newBucket];
    });
  }
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header onAddBucket={addBucket}/>
      {buckets.map((bucketItem,index)=>{
        return(
          <Bucket name={bucketItem}/>
        )
      })}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
