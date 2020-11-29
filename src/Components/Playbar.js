import '../App.css'
import MusicView from './MusicView'
import React from 'react';
import img3 from '../Album/3.png'
import { Speaker, Smartphone, Disc, Monitor, Play, Pause, SkipBack, SkipForward } from 'react-feather'
class Playbar extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            counter: this.props.counter,
            pos: {
                x: 0,
                y: 9
            },
            dragging: false,
            rel: null // position relative to the cursor
        };
    }

    componentDidUpdate(props, state) {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    }
    // calculate relative position to the mouse and set dragging=true
    onMouseDown = (e) => {
        if (e.button !== 0) return;
        console.log("Dragging")
        let pos = { left: this.myRef.current.offsetLeft, top: this.myRef.current.offsetTop }
        this.setState({
            dragging: true,
            rel: {
                x: e.pageX - pos.left,
                y: e.pageY - pos.top
            }
        });
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseUp = (e) => {
        this.setState({ dragging: false });
        console.log("Stopped Dragging")
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseMove = (e) => {
        if (!this.state.dragging) return;
        console.log("Mouse Move")
        /*
            x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y
        */
        var musicviewheight = (((window.innerHeight - e.pageY) / 10));
        console.log(musicviewheight)
        if (((window.innerHeight - e.pageY) / 10)  > (79)) {
            musicviewheight = 79;
        }
        if (((window.innerHeight - e.pageY) / 10) < 9) {
            musicviewheight = 9;
        }
        console.log(musicviewheight)

        this.setState({
            pos: {
                x: e.pageX,
                y: musicviewheight,
            }
        });
        /* Change CSS*/
        e.stopPropagation();
        e.preventDefault();
    }


    render() {
        var bottom_position = this.state.pos.y + 'vh'
        console.log(bottom_position)
        return (
            <div className="row music-view" style={{ height: bottom_position }}>
                <div className="playbar-grid">
                    <div className="playbar-grid-left">
                        <div className="playbar-grid-left-left">
                            <img className="album-art verticalIcon" src={img3}></img>
                            <div className="music-desc">
                                <div className="row music-tag">Spotify</div>
                                <div><h3 className="row music-title">Cold Times</h3>
                                    <p className="row music-artist">Cousin Stizz</p>
                                </div>
                            </div>
                        </div>
                        <div className="playbar-grid-left-right verticalIcon">
                            <SkipBack className="verticalIcon"></SkipBack>
                            <Play color="black" size="36" strokeWidth="2"></Play>
                            <SkipForward className="verticalIcon"></SkipForward>
                        </div>
                    </div>
                    <div className="playbar-grid-center" ref={this.myRef}
                        onMouseDown={this.onMouseDown}>
                        <div
                            className="playbar-grid-center-bar"
                        >
                        </div>
                    </div>
                    <div className="playbar-grid-right">
                        <div></div> {/* 20% */}
                        <div className="playbar-grid-right-right verticalIcon">
                            <Speaker strokeWidth="1.5" size="36px" color="lightgray"></Speaker>
                            <Smartphone strokeWidth="1.5" size="36px" color="lightgray"></Smartphone>
                            <Disc strokeWidth="1.5" size="36px" color="lightgray"></Disc>
                            <Monitor strokeWidth="1.5" size="36px" color="lightgray"></Monitor>
                        </div>
                    </div>
                </div>
                <MusicView />
            </div>
        )
    }

}
export default Playbar;