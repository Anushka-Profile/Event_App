import React from 'react';
import EventListItem from './EventListItem';

const EventListGroup=(props)=>{
    const { eventList} =props;
    return(
        <div className="row mt-3 ml-0">
            {
                // Ternary operator syntax: 
		        // condition? true-block: false-block
                eventList===0?(
                    <div className="card">
                        <div className="card-header bg bg-danger text-white">
                             No event found.
                        </div>
                        <div className="card-header bg bg-danger text-white">
                            <span>Please click "Create Event" button above to add event</span>
                        </div> 
                    </div>   
                ):(
                    eventList.map((event, index)=>(
                        <div key={ index } className="col-md-4 mt-5">
                            <EventListItem 
				        			key = { index }
				        			eventList = { event } 
				        		/>
                        </div>
                    )
                    )
                )
            }
        </div>
    )
}

export default EventListGroup;