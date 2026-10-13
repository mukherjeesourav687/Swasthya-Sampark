import Navbar from '../Navbar/NavBar.tsx';
import Copyright from '../Copyright/Copyright';
import './doctor.css';

function Room() {
    return (
        <div className="doctor-wrapper">
            <Navbar isPatient={true} isDoctor={true} isLogout={true} />
            <div className="consultation-room">
                <h1 className="consultation-room__title">Consultation Room</h1>
                <p>Video consultation is not configured. A backend-issued video token is required to enable calls.</p>
            </div>
            <Copyright />
        </div>
    );
}
export default Room;
