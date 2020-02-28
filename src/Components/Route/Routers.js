import React ,{Component}from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Categories from '../Categories/Categories'
import Sorting from '../Sorting/Sorting'
import Article from '../Article/Article'
import PermanentDrawerLeft from '../Layout/Layout'
class Routers extends Component{

    render(){
        return(
            <div className="main-container">
                <BrowserRouter>
                <Switch>
              
                  <Route path="/categories" exact component={Categories}/>
                  <Route path="/sorting" exact component={Sorting}/>
                  <Route path="/sorting" exact component={Article}/>
                  <Route path="/layout" exact component={PermanentDrawerLeft} />


                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routers;