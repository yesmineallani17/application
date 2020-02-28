import React ,{Component}from 'react';
import './AddButton.scss'
import Modal from 'react-modal';
import {callApi} from '../../../Helpers'

 
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
   

class AddButton extends Component {
    constructor()
    {
    super();
    this.state=
        {
            modalIsOpen: false,
            etat: false    ,
            data: {
              parent_id: 28,
              type: 1,
              categories: "['Extra Post']",
              content_manager: 1,
              state:1,
              // title:'guide',
            },

            
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.send = this.send.bind(this);
        this.setData=this.setData.bind(this)
        // this.dis=this.dis.bind(this);

    }
    openModal() {
        this.setState({modalIsOpen: true});
      }
      async send() {
        let x = await callApi('extra_post', this.state.data, 'POST')
        // // this.setState({redirect:true})
        // if(this.state.data.title_fr){
        //   let translate_data = {post_id: x.id}
        //   translate_data.title=this.state.data.title_fr
        //   translate_data.description = this.state.data.description_fr || ''
        //   translate_data.lang_iso = 'fr'
        //   translate_data.summery = this.state.data.summery_fr || ''
        //   let translate = await callApi('extra_posts_translate', translate_data, 'POST')
        // }
        // window.location.href=new URLSearchParams(window.location.search).get('return')
      }
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

      setData(data) {
        this.setState({ data: { ...this.state.data, ...data } })
      }
    
  render(){


      return (
          <div className="AddButton_page_container">
            <div > 
        <div className="titre">City Guide</div> 
        <div className="rectangle">
            <img className="add" src="img/plus_btn.png" onClick={this.openModal} />
            <div className="add_categorie">ADD CATEGORIE</div>
            <Modal id="Modal_popup"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >       
       
       
            <div className="part1">
                <div className="title_Modal">Title</div>
               <input type="text" className="input_modal" placeholder="Title" value={this.state.data.title || ''} onChange={(e) => this.setData({ title: e.target.value })}/>
               <div className="modal_url">Url Image</div>
                <input type="text" className="img_url" placeholder="put the url here" onChange={(e)=>{this.setData({image:e.target.value})}}/> 
                <div className="title_descr">Description</div>
                <textarea className="descr_modal" onChange={(e) => this.setData({ location: e.target.value })} value={this.state.data.location}/>
               </div>
               
              

            
           
            <div className="can_app">
          <img className="cancel" src="img/cancel.png" onClick={this.closeModal}/>
          <img className="approve" src="img/approve.png" onClick={this.send}/>
          </div>
       
        
        </Modal>
            </div>
        </div>
          </div>
         
      )
  }
}

export default AddButton;