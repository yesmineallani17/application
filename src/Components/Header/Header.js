import React ,{Component}from 'react';
import './Header.scss';


class Header extends Component {
    constructor()
    {
    super();
    this.state=
        {

        }
    }

  render(){

      return (
          <div className="Header_container"> 
<div className="header">
<div className="search">
    <img className="pic" src="img/search.png" />
    <div className="search_input">Search</div>
    </div>

<div className="notif"><img src="img/notif.png" /></div>
<div className="slach">|</div>
<div className="msg"><img src="img/msg.png" /></div>
<div className="profil">
   <div className="photo"> <img className="log" src="img/log.png" style={{width:"45px", height:"45px"}}/></div> 
    <div className="foulen">Foulen ben foulen</div>
     <div className="hello">Hello Dati</div>

</div>
</div>
{/* <div className="logout">Logout</div> */}
</div>

      )
    }
    }

export default Header;