import React ,{Component}from 'react';
import './Categories.scss'
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Guide from './Guide/Guide';
import AddButton from './AddButton/AddButton'
import {callApi} from '../../Helpers'

class Categories extends Component {
    constructor()
    {
    super();
    this.state=
        {
            extrat :[],

        }
        this.updateTheState = this.updateTheState.bind(this);
    }
    async updateTheState(id, hotelId) {
       await callApi('room/' + id, {}, 'DELETE');
        let rooms = await callApi('rooms', { hotel_id: hotelId });
        this.setState({ rooms: rooms.data });
    }
    
    async componentDidMount() {
        await callApi("extra_posts",{parent_id:28}).then(res=>{
            this.setState({extrat:res.data});
            console.log(res,"res")
        })
      

    
      }
  render(){
  

      return (
          <div className="Categories_page_container">
            
          
              <div className="all-categories" >
           
                <AddButton/>
                {this.state.extrat.map(x=>{
                return (
                <Guide post={x} onDelete={this.updateTheState}/>
                )
            })}
              </div> 

        </div>
         
      )
  }
}

export default Categories;