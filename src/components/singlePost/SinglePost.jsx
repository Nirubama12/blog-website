import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1619721380157-a254f669f825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9zJTIwYW5nZWxlcyUyMHN1bnNldHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="" className="singlePostImg"/>

            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit .
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div> 
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Niru</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel laboriosam facere corporis. Dolores fugiat consectetur dolore modi. Ratione ipsa ad, totam, consequuntur sit molestias dolorum et omnis quisquam, deserunt numquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores quis autem et nulla saepe incidunt repellat, dolorum velit quos iste excepturi earum, dolore provident. Animi maxime ipsam nostrum itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolorem. Culpa dicta aperiam doloribus alias possimus veniam saepe distinctio perferendis quia laborum, corporis quaerat deleniti id voluptas sit sint consequatur?
                <br>
                </br>
                <br>
                </br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel laboriosam facere corporis. Dolores fugiat consectetur dolore modi. Ratione ipsa ad, totam, consequuntur sit molestias dolorum et omnis quisquam, deserunt numquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores quis autem et nulla saepe incidunt repellat, dolorum velit quos iste excepturi earum, dolore provident. Animi maxime ipsam nostrum itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolorem. Culpa dicta aperiam doloribus alias possimus veniam saepe distinctio perferendis quia laborum, corporis quaerat deleniti id voluptas sit sint consequatur?
            </p>
        </div>
    </div>
  );
}
