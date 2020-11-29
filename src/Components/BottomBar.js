import '../App.css'
import React from 'react';
import { useTransition, animated } from 'react-spring'
import { CornerDownLeft, ShoppingBag, Grid, Thermometer, Music, Volume2, Sun, CornerDownRight, ChevronLeft, ChevronRight } from 'react-feather'
class BottomBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            temp: 22
        }
    }

    increaseTemp() {
        console.log("Increase Temp")
        var newTemp = this.state.temp + 1
        if (newTemp > 85) {
            this.setState({
                temp: 88
            });
        } else {
            this.setState({
                temp: newTemp
            });
        }
    }

    decreaseTemp() {
       console.log("Decrease Temp")
        var newTemp = this.state.temp -1
        if (newTemp <= 15) {
            this.setState({
                temp: 15
            });
        } else {
            this.setState({
                temp: newTemp
            });
        }
    }


    render() {

        return (
            <div className="bottombar-grid">
                <CornerDownLeft className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></CornerDownLeft>
                <ShoppingBag className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></ShoppingBag>
                <Grid className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Grid>
                <Thermometer className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Thermometer>
                <div className="bottombar-grid-center">
                    <ChevronLeft className="verticalIcon horizontalIcon" color="white" strokeWidth="1.0" onClick={this.decreaseTemp.bind(this)}></ChevronLeft>
                    <h1 className="verticalIcon horizontalIcon text-3" color="white" strokeWidth="2.0">{this.state.temp}</h1>
                    <ChevronRight className="verticalIcon horizontalIcon" color="white" strokeWidth="1.0" onClick={this.increaseTemp.bind(this)}></ChevronRight>
                </div>
                <Music className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Music>
                <Volume2 className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Volume2>
                <Sun className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Sun>
                <CornerDownRight className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></CornerDownRight>
            </div>
        )
    }

}
export default BottomBar;