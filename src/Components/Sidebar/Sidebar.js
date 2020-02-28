import React ,{Component}from 'react';
import './Sidebar.scss';





class Sidebar extends Component {
    constructor()
    {
    super();
    this.state=
        {

        }
    }

  render(){
  


      return (
          <div className="Sidebar_container"> 

<div className="sisou"><img className="sisou_img" src="img/heldat.png" /> 
    <div className="dashboard">
        <img src="img/actif.png" /> 
        <div className="titre2">Dashboard</div> 
        <div className="sidebar_logout"><img className="logout_img" src="img/out.png" /> 
<div className="titre3" onClick={this.props.logOut}>Logout</div> </div>
    </div>

</div>


</div>

      )
    }
    }

export default Sidebar;