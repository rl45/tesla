import '../App.css'

import React from 'react';
import { Search, LogOut } from 'react-feather'
import img1 from '../Album/1.png'
import img2 from '../Album/2.png'
import img3 from '../Album/3.png'
import img4 from '../Album/4.png'
import img5 from '../Album/5.png'
import img6 from '../Album/6.png'
import img7 from '../Album/7.png'
import img8 from '../Album/8.png'
import img9 from '../Album/9.png'
import img10 from '../Album/10.png'
import img11 from '../Album/11.png'
import img12 from '../Album/12.png'
import img13 from '../Album/13.png'
import img14 from '../Album/14.png'
import img15 from '../Album/15.png'
import spotifylogo from '../assets/spotify.png'

class MusicView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="music-view-container">
                <div className="music-view-container-left">
                    <img className="verticalIcon " src={spotifylogo} width="150px"></img>
                    <div className="search-button">
                        <Search className="search-icon verticalIcon" color="gray"></Search>
                    </div>
                    <div className="music-view-tabs verticalIcon">
                        <div className="active-tab"><h3 className="music-view-tab">Recently Played</h3></div>
                        <h3 className="music-view-tab">Liked Songs</h3>
                        <h3 className="music-view-tab">Library</h3>
                        <h3 className="music-view-tab">New Releases</h3>
                        <h3 className="music-view-tab">Genres</h3>

                    </div>
                    <div className="signout-button">
                        <div className="signout-button-grid">
                            <LogOut className="verticalIcon logout-text-left" color="rgb(189,189,189)"></LogOut>
                            <h4 className="search-text-right">SIGN OUT</h4>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="music-view-container-right">
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img1}></img>
                        <h2 className="music-title pt-2">Good Faith</h2>
                        <p className="music-tag-2">Madeon</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img2}></img>
                        <h2 className="music-title pt-2">Circles</h2>
                        <p className="music-tag-2">Mac Miller</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img3}></img>
                        <h2 className="music-title pt-2">Cold Times</h2>
                        <p className="music-tag-2">Cousin Stizz</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img4}></img>
                        <h2 className="music-title pt-2">Yeezus</h2>
                        <p className="music-tag-2">Kanye West</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img5}></img>
                        <h2 className="music-title pt-2">? (Deluxe)</h2>
                        <p className="music-tag-2">XXXTENTACION</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img6}></img>
                        <h2 className="music-title pt-2">Club Zero Vol.1</h2>
                        <p className="music-tag-2">MOTi</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img7}></img>
                        <h2 className="music-title pt-2">Laugh Now Kry Later!</h2>
                        <p className="music-tag-2">YG</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img8}></img>
                        <h2 className="music-title pt-2">Heartless</h2>
                        <p className="music-tag-2">The Weeknd</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img9}></img>
                        <h2 className="music-title pt-2">LIES</h2>
                        <p className="music-tag-2">Steve Aoki, KREAM</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img10}></img>
                        <h2 className="music-title pt-2">Shots at the Bar</h2>
                        <p className="music-tag-2">Rob $tone</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img11}></img>
                        <h2 className="music-title pt-2">Strictly Only Brothers</h2>
                        <p className="music-tag-2">SOB X RBE</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img12}></img>
                        <h2 className="music-title pt-2">Late Night Special</h2>
                        <p className="music-tag-2">Kirk Knight</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img13}></img>
                        <h2 className="music-title pt-2">High Off Life</h2>
                        <p className="music-tag-2">Future</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img14}></img>
                        <h2 className="music-title pt-2">Child of the Trenches</h2>
                        <p className="music-tag-2">MBNel</p>
                    </div>
                    <div className="album">
                        <img className="album-art-2 verticalIcon " src={img15}></img>
                        <h2 className="music-title pt-2">POPSTAR (feat. Drake)</h2>
                        <p className="music-tag-2">DJ Khaled, Drake</p>
                    </div>

                </div>

            </div>
        )
    }

}
export default MusicView;