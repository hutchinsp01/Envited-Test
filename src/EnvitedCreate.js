import './EnvitedCreate.css';
import CoverPhotoImg from './envited/cover-photo.png'

function EnvitedCreate() {
    return (
      <div className="EnvitedCreate">
        <CoverPhoto />
        <EventButtons/>
        <EventHeader/>
        <EventDetailsForm/>
      </div>
    );
  }

function CoverPhoto() {
    return (
        <div className="CoverPhoto">
            <img src={CoverPhotoImg} className="CoverPhotoImage" alt="Event" />
            <div className="CoverPhotoButton">
              <a className="CoverPhotoButtonText">Change Cover Photo</a>
            </div>
        </div>
    )
}

// Make into form - placeholder for now
function EventHeader() {
  return (
      <div className="EventTitle">
          <h2 className="EventEmoji">🎉</h2>
          <h2 className="EventTitleText">Enter Event Name...</h2>
          <h3 className="EventHost">Hosted by Paul</h3>
      </div>
  )
}

function EventDetailsForm() {
  return (
    <form>
      <div className="EventInfo">
            <div className="EventTimeFormEmoji">🗓</div>
              <h3 className="EventStartTimeFormText">Start Time</h3>
              <input type="datetime-local" className="EventStartTimeForm"/>
              <h3 className="EventEndTimeFormText">End Time</h3>
              <input type="datetime-local" className="EventEndTimeForm" />
              <p className="EventTimeFormBodyText">... Hours</p>
            <div className="EventLocationFormEmoji">📍</div>
            <div className="EventLocationFormText">
                <h3 className="EventLocationFormTitleText">Location</h3>
                <input type="text" className="EventLocationForm" />
                <p className="EventLocationFormBodyText">Open in maps</p>
            </div>
        </div>
    </form>
  )
}


function EventButtons() {
  return (
    <>
      <div className="PreviewEventButton">
        <a className="PreviewEventButtonText" href="/event">Preview Event</a>
      </div>
      <div className="SaveEventButton">
        <a className="SaveEventButtonText" href="/event">Save Event</a>
      </div>
      <div className="ShareEventButton">
        <a className="ShareEventButtonText">Share Event</a>
      </div>
    </>
  );
}

export default EnvitedCreate;
