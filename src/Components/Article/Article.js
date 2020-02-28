import React ,{Component}from 'react';
import './Article.scss'
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Article_main from '../Article_main/Article_main.js'


class Article extends Component {
    constructor()
    {
    super();
    this.state=
        {

        }
    }

  render(){
  


      return (
          <div className="Article_page_container">
            
          
              <div className="ggf">
              {/* <Header /> 
              <Sidebar/> */}
              <Article_main/>
            
              </div> 

          </div>
         
      )
  }
}

export default Article;