import React from 'react';
import Main from '../../components/Main/main';
import Videoplayer from '../../components/Videoplayer/VideoPlayer';
import './Movies.scss'
const Movies = () => {

    return (
        <div>
           <Videoplayer controls={true} src="/sample-vid.mp4" className='player'/>
           <Main className ='movies'/>
        </div>
    );
}

export default Movies;
