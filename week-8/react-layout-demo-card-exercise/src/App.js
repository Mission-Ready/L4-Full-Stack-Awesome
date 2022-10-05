import './App.css';
import StudentCard from './components/StudentCard';

function App() {
  const studentDatabase = [
    {
      profileImage: 'https://i.pravatar.cc/150?img=5',
      name: 'Jane Doe',
      role: 'Architect',
    },
    {
      profileImage: 'https://i.pravatar.cc/150?img=2',
      name: 'John Doe',
      role: 'UX Designer',
    },
    {
      profileImage: 'https://i.pravatar.cc/150?img=2',
      name: 'John Doe',
      role: 'UX Designer',
    },
    {
      profileImage: 'https://i.pravatar.cc/150?img=2',
      name: 'John Doe',
      role: 'UX Designer',
    },
    {
      profileImage: 'https://i.pravatar.cc/150?img=2',
      name: 'John Doe',
      role: 'UX Designer',
    },
  ];

  return (
    <div className="cardLayout">
      {studentDatabase.map((student) => (
        <StudentCard
          profileImage={student.profileImage}
          name={student.name}
          role={student.role}
        ></StudentCard>
      ))}
    </div>
  );
}

export default App;
