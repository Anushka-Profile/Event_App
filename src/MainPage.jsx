import React from 'react';
import Header from './Header';
import EventListGroup from './EventListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


class MainPage extends React.Component{
    constructor(){
        super();
        this.state={
            eventName:'',
            eventVenue:'',
            eventDate:'',
            eventDes:'',
            eventList:[]
        }
        this.onChange=this.onChange.bind(this);
    }
onChange(e) {
        
        const { name,value }=e.target;
        this.setState((prevState)=>({
            [name]: value
        })
        )    
}
handleSubmit=(e)=>{
    e.preventDefault();
    const { eventName,eventVenue,eventDate,eventDes}=this.state;
    const eventObj={
        eventName: eventName,
        eventVenue: eventVenue,
        eventDate: eventDate,
        eventDes: eventDes
    }
    this.setState((prevState)=>({
        eventList:[...prevState.eventList,eventObj]
    })
    )
}


deleteEvent = (eName) => {
    //console.log("deleteEvent: ", eName);
    const { eventList } = this.state;
    const newEventList = eventList.filter( event => event.eventName !== eName)
    this.setState((prevState) => ({ 
            eventList: newEventList
    }))
}

    render(){
        const { eventList }=this.state;
        return(
            <div className="container">
                <Header noOfEvents = { eventList.length }/>
                
            <button type="button" 
            className="btn btn-primary" 
            data-toggle="modal" 
            data-target="#exampleModal">
            Create Event
            </button>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Event Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                <div className="modal-body">
        <form method="post" 
			onSubmit={this.handleSubmit}
		   >
            <div className="form-group row">
                <label htmlFor="eventName" 
                className="col-sm-3 col-form-label">
                    Name:
                    </label>
                <div className="col-sm-9">
                        <input type="text" className="form-control" name="eventName" id="eventName"
                        placeholder="Enter event name"
                        onChange={this.onChange} />
                </div>
            </div>
            {/* Event Date & Time inputbox */}
            <div className="form-group row">
				        		<label 
				        			htmlFor="eventDate" 
				        			className="col-sm-3 col-form-label"
				        		> 
				        			Date & Time: 
				        		</label>
				        		<div className="col-sm-6">
			                        <input
			                          type="datetime-local"
			                          className="form-control"
			                          id="eventDate"
			                          name="eventDate"
			                          onChange={this.onChange}
			                        />
			                    </div>
				        	</div>
            {/* Event venue inputbox */}
            <div className="form-group row">
		                      <label
		                        htmlFor="eventVenue"
		                        className="col-sm-3 col-form-label"
		                      >
		                        Venue:
		                      </label>
		                      <div className="col-sm-9">
		                        <input
		                          type="text"
		                          className="form-control"
		                          id="eventVenue"
		                          name="eventVenue"
		                          placeholder="Enter event venue"
			                      onChange={this.onChange}
		                        />
		                      </div>
		                    </div>
            <div className="form-group row">
                            <label htmlFor="eventDes"
                            className="col-sm-3 col-form-label">
                                Description:
                                </label>
                                <div className="col-sm-9">
                            <textarea class="form-control" 
                                name="eventDes" 
                                id="eventDes" 
                                rows="3"
                                placeholder="Enter event description"
                                onChange={this.onChange}
                            ></textarea>
                        </div>
            </div>
            <button type="submit" 
            className="btn btn-success float-right">
                Add Event
                </button>
            
          </form>
        
      </div>
    </div>
  </div>
</div>
            <EventListGroup eventList={eventList} deleteEvent={ this.deleteEvent } />
</div>
            
        );
    }
}

export default MainPage;
