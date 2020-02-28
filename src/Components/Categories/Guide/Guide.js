import React ,{Component}from 'react';
import './Guide.scss';
import Modal from 'react-modal';
import {callApi} from '../../../Helpers'
import { Link } from 'react-router-dom'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Guide extends Component {
    constructor()
    {
    super();
    this.state=
        {
            modalIsOpen: false,
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    
    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    onDelete =() =>{
         callApi('extra_posts/'+this.props.post.id, {}, 'DELETE').then(res=>{console.log(res,"ressst")});
    }

  render(){
  


      return (
          <div className="Guide_Page_Container">
              <div className="rectangle2">
              <img className="culture_img" src={this.props.post.image}></img> 
              <div className="titre4">{this.props.post.title}</div>
              <Link to={'/sorting'}>
          <button className="ed">Edit</button>
        </Link>
              {/* <div className="boutton"><div className="add_edit">Add / Edit</div>  </div> */}
              <div className="on_off"><div className="circle"></div> <div className="titre5">OFF</div> </div>
              <div className="pbl" ><img  className="poubelle" src="img/poubelle.png"  onClick={this.openModal}/></div>
              <Modal id="poub"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >  
        <div className="sure">Are you sure to delete this categorie?</div>
        <img className="supr" src="img/cancel.png" onClick={this.closeModal}/>
          <img className="val" src="img/approve.png" />
      </Modal>
              </div>
          </div> 
         
      )
  }
}

export default Guide;