import React ,{Component}from 'react';
import './Article_main.scss'
import ImageUploader from 'react-images-upload'
import { callApi ,callApiWithBody} from '../../Helpers';
import {Link,Route,Switch} from "react-router-dom"

class Article_main extends Component {
    constructor(props)
    {
    super(props);
    this.state=
        {
            data:{ 
            title:"",
            Description:"",
            adresse:"",
            image:""}
          
        };
       
this.setData=this.setData.bind(this);
this.upload=this.upload.bind(this)
    }
    
setData(data){
    console.log(data,"data")
    this.setState({data:{...this.state.data, ...data}})
    console.log(this.state.data,"data")

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
    async upload(e) {
        let data = new FormData()
        data.append('image', document.getElementsByName('image')[0].files[0])
        let image = await callApiWithBody('upload', data, 'POST')
        this.setState({ image: image.image })
        this.setData({ image: image.image, imagePreviewUrl: image.image })
        // document.querySelector('.fileContainer').style.backgroundImage = `url(${image.image})`
      }
    
  render(){


      return (
          <div className="Article_mp_container">
            <div className="sorting_m"> 
        <div className="Sorting_titre">City Guide > Restaurant Sorting</div> 
        <div className="sorting_rectangle1">
            <div className="icona">
            <img className="icona1" src="img/restaurant.png"/>
            </div>
            <div className="titre_icona1">Restaurant:</div>
            <Link to="/sorting">   <button id="sorting_b"  onClick={this.changeColor}>Sorting</button></Link>
            </div>
            <div className="sep">|</div>
        <div className="sorting_rectangle2">
        <button id="sorting_add"  onClick={this.addChange}>Add</button>
        <div className="rec" >
            <div className="titre_r" >Titre</div>
            <input type="text" className="rec_titre" onChange={(e)=>this.setData({title:e.target.value})}></input>
            <div className="titre_desc" >Description</div>
            <textarea className="desc_t" onChange={(e)=>this.setData({Description:e.target.value})}/>
            {/* <img className="arrondi1" src="img/Rectangle arrondi.png"/>
            <img className="arrondi2" src="img/sympa.png"/>
            <img className="arrondi3" src="img/Rectangle_p.png"/>
            <img className="arrondi4" src="img/Forma 1.png"/> */}
            {/* <div className="image_upload"> */}
            
            <ImageUploader className="img_upl"
fileContainerStyle={{ height: '250px',width: '250px',    backgroundColor:"#d2d2d2" }}
onChange={this.upload}
label={'Max file size: 2MB | Allowed formats: jpg, png'}
maxFileSize="2097152"
name="image"
                />
                {/* </div> */}
            <div className="upload">Upload Image </div>
            <div className="adresse_titre" >Adresse</div>
            <input type="text" className="adre_rec" onChange={(e)=>this.setData({adresse:e.target.value})}/>
            <img className="layer" src="img/Layer.png"/>
            <img className="calque" src="img/Calque.png"/>


        </div>  
        </div>
        </div>
        </div>
         
      )
  }
}

export default Article_main;