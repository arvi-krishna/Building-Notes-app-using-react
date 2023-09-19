import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./index.css";

function Main({activeNote, onUpdatedNote, onDeleteNote, notes}) {

  const onEditField = (key, value) => {
    onUpdatedNote({
    ...activeNote,
    [key]: value,
    lastModified: Date.now(),    
    });
  };

  const formatDate = (date) => {
    const options = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    const formattedTime = new Date(date).toLocaleTimeString("en-US", options);
    return formattedDate.replace(/\//g, '-') + ', ' + formattedTime;
  };
  
  const saveNote = () => {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const body = activeNote.body;
    const updatedNote = {
      ...activeNote,
      title,
      date,
      body,
      lastModified: Date.now(),
    };
    onUpdatedNote(updatedNote);
    // save updatedNote to data store here
  
    const save = document.getElementsByClassName("app-main-edit")[0];
    const edit = document.getElementsByClassName("app-main-note-preview")[0];
    save.classList.toggle("hide");
    edit.classList.add("appear");
  };
  

  

  

  if (!activeNote) 
  return <div className="no-active-note">No Note Selected</div>;

  return (
  <div className="main">
    <div className="app-main-edit">
      <input 
        type="text" 
        id = "title" 
        placeholder="Untitled"
        value={activeNote.title}
        onChange={(e) => onEditField("title" , e.target.value)} 
        autoFocus
      />

      <div className="option-buttons">
        <button onClick={()=> saveNote(activeNote.id)} className="save-note">Save</button>

        <button onClick={() => onDeleteNote(activeNote.id)} className="delete-note">Delete</button>
      </div>

      <input
        defaultValue={formatDate(new Date().toString())}
        id="calendar"
        type="datetime-local"
      />
    
      <div id="body" value={activeNote.body}>
        
        <ReactQuill
          placeholder="Your Note Here" 
          value={activeNote.body}
          onChange={(value) => onEditField("body", value)}

        />
        

      </div>
    </div>
  </div>
  );
  
}

export default Main;