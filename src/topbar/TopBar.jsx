import "./topbar.css"

export default function topbar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>

      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage"
          src="https://s.yimg.com/ny/api/res/1.2/abREBlNVvB4RF7wbQcke_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/shefinds_255/2c971f7e4f6a87086852621c22e3d021"
          alt="profile pic"
          ></img>
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

          
        
      
    </div>
  )
}
