import "./write.css"

export default function Write (){
return(
    <div className="write">
       <form className="writeForm">
            <img className="writeImg" src="https://images.unsplash.com/photo-1619721380157-a254f669f825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9zJTIwYW5nZWxlcyUyMHN1bnNldHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="sample" />
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
                  <i class="writeIcon fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>

          <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text"
            className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
       </form>
    </div>
  )
}
