import style from "./FriendPreview.module.scss";

const FriendPreview = (props) => {
    const data = props.data || {name: "Friend", photo: "https://elementsrl.it/wp-content/uploads/2018/01/avatar-1577909_960_720.png",};
    
    return ( <div className= {style.friend}>
                
                <img src={data.photo} alt={data.name}/>
                <p> {data.name}</p>
            </div>
      );  };

export{FriendPreview};