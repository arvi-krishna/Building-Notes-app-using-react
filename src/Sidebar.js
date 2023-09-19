function Sidebar({notes, onAddNote , onDeleteNote, activeNote, setActiveNote}) {

    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);

    return (
    
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>+</button>
        </div>

      <div className="app-notes"  > 
        {sortedNotes.map((note) => ( 
        
        <div 
        className={`app-note ${note.id === activeNote && "active"}`} 
        onClick={() => setActiveNote(note.id)}
        >
        
        <div className="sidebar-title">
          <strong>{note.title ? note.title : "Untitled"}</strong>

        </div> 
        <span>{note.body && ((new DOMParser().parseFromString(note.body, 'text/html').body.textContent.substring(0, 100).trim() + (note.body.length > 100 ? "..." : "")) || "...")}...</span>

            <little className="meta"> {new Date(note.lastModified).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            } )}</little>
        </div>
        ))}
      </div>        
    </div>
  );
}
export default Sidebar;