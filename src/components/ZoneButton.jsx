
import React from 'react';


class ZoneButton extends React.Component {


    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {zone : ""}

    }


    handleClick(){
        var zones = ["Arsenal","Docks", "Runway", "Ruins", "Mines", "Peak", "Beachhead", "Village", "Beachhead","Lagoon","Airfield","Fields","Sub pen","Power Plant", "Capital", "Resort"]
        var myZone = zones[Math.floor(Math.random()*zones.length)]
        console.log("hello")
        this.setState({zone: myZone})

    }



    render() { 
    

        return <div>
    
            <button type="button" className ="btn btn-secondary btn-lg" onClick={this.handleClick.bind(this)}>Where We Dropping?</button>
           
            <p className="font-zone">{this.state.zone}</p>
        
        
        </div>;
    }
}
 
export default ZoneButton;