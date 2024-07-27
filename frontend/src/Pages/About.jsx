import { Link } from 'react-router-dom'
import '../CSS/About.css'

export default function About () {
    return (
        <>
            <div className="profiles__container">
                <div className="profile-container">
                    <div className="white-overlay">
                        <img src="https://media.licdn.com/dms/image/D4E03AQH4uaRl2RmXmw/profile-displayphoto-shrink_400_400/0/1718230176970?e=1727308800&v=beta&t=GZlUqQsOlRgNFC4xUJ-Sw-OIynIOpL4kwvQpxnDCWf0" alt="abraham's profile picture" className="profile-pic" />
                    </div>
                    <h2 className="dev-name">Abraham Zambrano T. </h2>
                    <div className="bio-container">
                        <p className="profile-bio">
                        In my academic pursuits in Informatic Engineering, I'm fueled by an insatiable curiosity for technology. Thriving in the realm of algorithms, coding challenges, and problem-solving, I've gained proficiency in software development, database management, and system analysis.
                        </p>
                    </div>
                    <div className="links__container">
                        <Link to='https://github.com/AbrahamZambranoTablante'><i class="fa-brands fa-github"></i></Link> <Link to='https://www.linkedin.com/in/abrahamzambranotablante/'><i class="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
                <div className="profile-container">
                    <div className="white-overlay">
                        <img src="https://avatars.githubusercontent.com/u/151119924?v=4" alt="ray's profile picture" className="profile-pic" />
                    </div>
                    <h2 className="dev-name">Runquan (Ray) Zhou</h2>
                    <div className="bio-container">
                        <p className="profile-bio">
                        I am a full-stack software engineer looking to break into the tech industry. Currently, I am learning new skills and abilities so I can be a part of the new era in technology such as AI, Web3, Blockchain Technology, Cryptocurrency, VR, Autopilot, and Robotics.
                        </p>
                    </div>
                    <div className="links__container">
                        <Link to='https://github.com/runquan-ray-zhou'><i class="fa-brands fa-github"></i></Link> <Link to='https://www.linkedin.com/in/runquanrayzhou/'><i class="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}