export default function Icon(props) {

return (<>
     <img
            className="nav-img"
            src={props.src}
            alt="icon"
            width="30"
            height="30"
            onClick={props.onIconClick}
          ></img>
    </>)
}