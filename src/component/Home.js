import React, { Component } from 'react';
import Event from '../data/eventData.json'

class Home extends Component{
  render(){
    return(
      <div> <h4 className="center">Home
       <input type="text" placeholder="Enter item to be searched"  onChange={(e)=>this.searchSpace(e)} />
      {}</h4>
      { Event.map((event,index)=>{
        return(
          <div className="post card" key={ index }>
                        <img src={event.image_name}  width="300" height="200" alt="logo"></img>
                        <div className="card-content">
                        <span className="card-title blue-text">{ event.event_name }</span>   
                        <p>{ event.description }</p>
                        </div>
                    </div>
        )
      })
      }
      </div>

    )
  }
}
export default Home