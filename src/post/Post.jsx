
import "./post.css";

export default function Post({}) {
  return (
    <div className="post">
      <img className="postImg"
        src="https://images.unsplash.com/photo-1619721380157-a254f669f825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9zJTIwYW5nZWxlcyUyMHN1bnNldHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="skies"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              Music
            
          </span>
          <span className="postCat">
              Life
          </span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}