import React from 'react'
import "./Track.css"

function Track({track, trackActionCharacter, handleTrackAction}) {
  return (
    <React.Fragment>
    <div class="Track">
      <div className="trackinfo">
      <img src={track.image} alt="album-art"/>
        <div class="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
        </div>
      </div>
        <button className="Track-action" onClick={() => handleTrackAction(track)}>
                {trackActionCharacter}
        </button>
    </div>
    </React.Fragment>
  )
}

export default Track