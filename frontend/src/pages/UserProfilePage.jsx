import React from "react"
import "./UserProfilePage.css"

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="group-wrapper">
        <div className="group">
          <div className="section">
            <div className="container">
              <div className="title">This is Email Account</div>
            </div>
            <img className="vector" alt="Vector" src="vector-200.svg" />
          </div>
          <div className="div">
            <div className="overlap">
              <div className="title-wrapper">
                <div className="text-wrapper">Recently Saved Shows</div>
              </div>
            </div>
            <div className="overlap-group">
              <div className="list">
                <div className="item">
                  <img className="image" alt="Image" src="image-9-4.png" />
                  <div className="frame">
                    <div className="title-2">Musuh tensi</div>
                    <p className="subtitle">Next Episode: Monday at 8 PM</p>
                  </div>
                </div>
                <div className="item-2">
                  <img className="img" alt="Image" src="image-9-5.png" />
                  <div className="frame-2">
                    <div className="title-2">Demon King</div>
                    <p className="subtitle">Next Episode: Wednesday at 7 PM</p>
                  </div>
                </div>
                <div className="item-3">
                  <img className="img" alt="Image" src="image-9.png" />
                  <div className="frame-2">
                    <div className="title-2">Demon King</div>
                    <p className="subtitle">Next Episode: Wednesday at 7 PM</p>
                  </div>
                </div>
                <div className="item-4">
                  <img className="img" alt="Image" src="image-9-2.png" />
                  <div className="frame-2">
                    <div className="title-2">Demon King</div>
                    <p className="subtitle">Next Episode: Wednesday at 7 PM</p>
                  </div>
                </div>
              </div>
              <img className="vector-2" alt="Vector" src="image.svg" />
            </div>
          </div>
          <div className="section-2">
            <div className="overlap-2">
              <div className="overlap-3">
                <div className="rectangle" />
                <div className="div-wrapper">
                  <div className="text-wrapper">Show Reminders</div>
                </div>
                <div className="list-2">
                  <div className="item-5">
                    <img className="image-2" alt="Image" src="image-6-2.png" />
                    <div className="frame">
                      <div className="title-2">
                        My Hero Academia
                        <br />
                        Monday
                      </div>
                      <p className="subtitle">Show 1 airs at 8 PM</p>
                    </div>
                  </div>
                  <div className="item-6">
                    <img className="image" alt="Image" src="image-9-3.png" />
                    <div className="frame">
                      <div className="title-2">
                        Kaiju 8<br />
                        Wednesday
                      </div>
                      <p className="subtitle">Show 2 airs at 7 PM</p>
                    </div>
                  </div>
                </div>
                <div className="item-7">
                  <img className="image-2" alt="Image" src="image-6.png" />
                  <div className="frame">
                    <div className="title-2">
                      My Hero Academia
                      <br />
                      Monday
                    </div>
                    <p className="subtitle">Show 1 airs at 8 PM</p>
                  </div>
                </div>
              </div>
              <div className="item-8">
                <img className="image-2" alt="Image" src="image.png" />
                <div className="frame">
                  <div className="title-2">
                    My Hero Academia
                    <br />
                    Monday
                  </div>
                  <p className="subtitle">Show 1 airs at 8 PM</p>
                </div>
              </div>
            </div>
            <img className="vector-3" alt="Vector" src="vector-200-2.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage