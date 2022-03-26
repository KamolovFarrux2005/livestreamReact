import React, { useEffect, useRef, useState } from 'react';
import PlayStopIcon from './VideoControls/PlayStopIcon';
import './VideoPlayer.css';

const Videoplayer = ({ src, ...props }) => {
    const videoRef = useRef()
    const [play, setPlay] = useState(false)
    const [currentPlay, setCurrentPlay] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        if(play) {
            videoRef.current.play()
        } else{
            videoRef.current.pause()
        }
    }, [play])
    const handleRangeChange = (e) => {
        setCurrentPlay(e.target.value)
    }

    useEffect(() => {
        videoRef.current.currentPlay = duration * currentPlay / 100
        console.log(duration*currentPlay/100)
    }, [currentPlay])

    const handleLoadMetadata = (e) => {
        console.log(e)
        setDuration(e.target.duration)
    }
    // const onSeek = (play) => {
    //     console.log(play.target.value)
    //     console.log( videoRef)
    //     videoRef.current.currentTime=duration/100*e.target.value
    // }  
    return (
        <div>
            <div className='video-wrapper'>
                <div className='video-controls' onClick={() => {setPlay(state => !state)}}>
                    <PlayStopIcon className='controls-element' play={play}/>
                    <div className='toolbar'>
                    <div className='seekbar'>
                        <input onChange={handleRangeChange} type="range" className='seekbar-input' />
                        <div className='range'>
                            <div style={{width: `${ currentPlay }%`}} className='range-inner'></div>
                        </div>
                    </div>
                    </div>
                </div>
                <video onLoadedMetadata={handleLoadMetadata} ref={videoRef} src={src} { ...props } className='video'></video>
            </div>
            <div className='video-title'>
                <h5>Her & Him</h5>
                <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
        </div>
    );
}

export default Videoplayer;
