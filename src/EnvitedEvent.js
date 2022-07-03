import CoverPhotoImg from './envited/cover-photo.png'
import './EnvitedEvent.css';

function EnvitedEvent() {
    return (
      <div className="EnvitedEvent">
        <CoverPhoto />
        <EventHeader />
        <EventActions />
        <EventInformation />
        <EventDetails />
      </div>
    );
  }

function CoverPhoto() {
    return (
        <div className="CoverPhoto">
            <img src={CoverPhotoImg} className="CoverPhotoImage" alt="Event" />
        </div>
    )
}

function EventHeader() {
    return (
        <div className="EventTitle">
            <h2 className="EventEmoji">🎉</h2>
            <h2 className="EventTitleText">Anica’s 22nd Birthday</h2>
            <h3 className="EventHost">Hosted by Anica</h3>
        </div>
    )
}

function EventActions() {
    return (
        <div className="EventActions">
            <div className="EventActionsButtons">
                <div className="EventButton Going">
                    <div className="GoingButtonText">
                        <div className="TickStem"/>
                        <div className="TickKick"/>
                    </div>
                </div>
                <div className="EventButton Maybe">
                    <a className="MaybeButtonText">?</a>
                </div>
                <div className="EventButton NotGoing">
                    <a className="NotGoingButtonText"></a>
                </div>
            </div>
            <div className="EventInviteActions">
                <div className="InviteButton">
                    <div className="InviteButtonText">✉️ Invite a friend</div>
                </div>
                <div className="OtherButton">
                    <div className="OtherButtonText">...</div>
                </div>
            </div>
        </div>
    )
}

function EventInformation() {
    return (
        <div className="EventInfo">
            <div className="EventTimeEmoji">🗓</div>
                <h3 className="EventStartTimeText">Sat 16 Oct 2022 6:00PM</h3>
                <h3 className="EventEndTimeText">to Sat 16 Oct 2022 11:00PM</h3>
                <p className="EventTimeBodyText">Add to calender</p>
            <div className="EventLocationEmoji">📍</div>
            <div className="EventLocationText">
                <h3 className="EventLocationTitleText">84 Davy Street</h3>
                <p className="EventLocationBodyText">Open in maps</p>
            </div>
        </div>
    )
}

function EventDetails() {
    return (
        <>
            <div className="DetailsButton Active">
                <a className="DetailsButtonText">Details</a>
            </div>
            <div className="PostsButton Inactive">
                <a className="PostsButtonText">Posts</a>
            </div>
            <p className="DetailsText">Just a lowkey dinner to celebrate my 22nd. Would love to see you</p>
        </>
    )
}

export default EnvitedEvent;