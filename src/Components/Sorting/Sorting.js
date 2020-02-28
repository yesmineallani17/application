import React ,{Component}from 'react';
import './Sorting.scss'
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Sorting_main from '../Sorting_main/Sorting_main.js'

class Sorting extends Component {
    constructor()
    {
    super();
    this.state=
        {

        }
    }

  render(){
  


      return (
          <div className="Sorting_page_container">
            
          
              <div className="main_sorting">
              {/* <Header /> 
              <Sidebar/> */}
              <Sorting_main/>
              </div> 

          </div>
         
      )
  }
}

export default Sorting;