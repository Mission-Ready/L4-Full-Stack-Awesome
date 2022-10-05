import './StudentCard.css';

function StudentCard({profileImage, name, role }) {
  return (
    <div className="studentCard">
      <img src={profileImage} alt="profile pic of a student" />
      <h2>{name}</h2>
      <h4>{role}</h4>
    </div>
  );
}

export default StudentCard;
