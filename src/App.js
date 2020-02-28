import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {callApi} from './Helpers'
import { UserContext } from './Components/Context'
import Login from './Components/Home/Login/Login'
import Categories from './Components/Categories/Categories'
import Sorting from './Components/Sorting/Sorting'
import Article from './Components/Article/Article'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Routers from './Components/Route/Routers'
import Layout from './Components/Layout/Layout'
class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      user: this.context,
      redirect: false
    }
    this.changeUser = this.changeUser.bind(this)
    this.logOut = this.logOut.bind(this)
  }
  async changeUser(user, hotel = 43) {
    console.log(user)

    this.setState({ user: { ...user } })
    localStorage.setItem('user', JSON.stringify(user))
    if (user.role == 3) {
      let hotels = await callApi('hotels')
      if (user.role == 3)
        user.hotel_id = [hotel || 44, ...hotels.data.map(x => x.id)]
      else
        user.hotel_id = [hotel || 44, ...hotels.data.map(x => x.id)]
      console.log(user)
    }
    localStorage.setItem('user', JSON.stringify(user))
    console.log(localStorage.getItem('user'), "userssss")
    this.setState({ user: { ...user } })
  }
  logOut() {
    this.setState({ user: { auth: false } })
    localStorage.setItem('user', JSON.stringify({ auth: false }))
  }
  render(){
  return (
    <div>
<UserContext.Provider value={this.state.user}>
<UserContext.Consumer>
{
                user => user.auth ?
                  <>
       {/* <Sidebar logOut={this.logOut}/>
       <Header/>
      <Routers/> */}
<Layout/>
          </>
                  :
                  <Login changeUser={this.changeUser} />
              }
 


</UserContext.Consumer>
</UserContext.Provider>
</div>
  )
}
}
export default App;
