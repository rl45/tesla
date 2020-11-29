import '../App.css'
import React from 'react';
import { Airplay, Lock, Sun, Bluetooth, Radio, Wifi, AlertTriangle, BatteryCharging, Codepen } from 'react-feather';
class TopBar extends React.Component {


    constructor(props) {
        super(props)

        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state = {
            currentDateTime: time
        }
    }

    render() {
        return (
            <div className="topbar-grid">
                <div className="topbar-grid-left">
                    {/*Render icons */}
                    <Codepen className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0" />
                    <div className="verticalIcon horizontalIcon text-2">{this.state.currentDateTime}</div>
                    <Lock className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Lock>
                    <Lock className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Lock>
                </div>
                <div className="topbar-grid-center">
                    {/*Render icons */}
                    <div className="topbar-grid-center-left verticalIcon">
                        <div className="horizontalIcon text">TESLEIH One</div>
                        <div className="horizontalIcon text button-1">OPEN GLOVEBOX</div>
                        <div></div>
                    </div>
                    <div className="topbar-grid-center-center"></div>
                    <div className="topbar-grid-center-right verticalIcon">
                        <div className="horizontalIcon text">8.8 mil</div>
                        <div className="horizontalIcon text">10 min</div>
                        <div className="horizontalIcon text">{this.state.currentDateTime}</div>
                        <BatteryCharging className="horizontalIcon"></BatteryCharging>
                    </div>
                </div>
                <div className="topbar-grid-right">
                    {/*Middle buttons */}
                    <Sun className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Sun>
                    <Radio className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Radio>
                    <Wifi className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Wifi>
                    <Bluetooth className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></Bluetooth>
                    <AlertTriangle className="verticalIcon horizontalIcon" color="white" strokeWidth="2.0"></AlertTriangle>
                </div>
            </div>
        )
    }

}
export default TopBar;