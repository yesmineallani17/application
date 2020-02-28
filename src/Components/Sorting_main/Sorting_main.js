import React ,{Component}from 'react';
import './Sorting_main.scss'
import Modal from 'react-modal';
import {Link,Route,Switch} from "react-router-dom"


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
   
 
class Sorting_main extends Component {
    constructor(props)
    {
    super(props);
    this.state=
        {
            modalIsOpen: false,
        };
       
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeColor=this.changeColor.bind(this);         
        this.addChange=this.addChange.bind(this);         
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

    changeColor(){
            document.getElementById('sorting_b').style.color='#ffffff';
            document.getElementById('sorting_b').style.backgroundColor='#133069';
            document.getElementById('sorting_b').style.backgroundImage="url(/img/sort2.png)";
         document.getElementById('sorting_add').style.color='#2b2b2b';
            document.getElementById('sorting_add').style.backgroundColor='#f6f8fc';
            document.getElementById('sorting_add').style.backgroundImage="url(/img/add1.png)";
    }

    addChange(){
         document.getElementById('sorting_add').style.color='#ffffff';
            document.getElementById('sorting_add').style.backgroundColor='#133069';
            document.getElementById('sorting_add').style.backgroundImage="url(/img/add2.png)";
            document.getElementById('sorting_b').style.color='#2b2b2b';
            document.getElementById('sorting_b').style.backgroundColor='#f6f8fc';
            document.getElementById('sorting_b').style.backgroundImage="url(/img/sort1.png)";
    }
    
    
  render(){


      return (
          <div className="Sorting_main_container">
            <div className="sorting_me"> 
        <div className="Sorting_titre">City Guide > Restaurant Sorting</div> 
        <div className="sorting_rectangle1">
            <div className="icona">
            <img className="icona1" src="img/restaurant.png"/>
            </div>
            <div className="titre_icona1">Restaurant:</div>
            <Link to="/sorting">  <button id="sorting_b"  onClick={this.changeColor}>Sorting</button> </Link>
            </div>
            <div className="sep">|</div>
        <div className="sorting_rectangle2">
        <Link to="/article">  <button id="sorting_add"  onClick={this.addChange}>Add</button></Link> 
        </div>
           
        <div className="box">
            <div className="box_title">TAJ MAHAL</div>
            <div className="box_specific">Spécialités Italiennes</div>
            <img className="edit" src="img/edit.png"/>
            <img className="del" src="img/del.png" onClick={this.openModal}/>
            <Modal id="delete"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >  
        <div className="sure">Are you sure to deletethis item?</div>
        <img className="supr" src="img/cancel.png" onClick={this.closeModal}/>
          <img className="val" src="img/approve.png" />
      </Modal>

        </div>
        </div>
        </div>
         
      )
  }
}

export default Sorting_main;