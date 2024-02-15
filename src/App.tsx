import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { IEmployee } from './shared/interfaces/IEmployee';

function App() {

  const teams = [
    {
      id: 1,
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      id: 2,
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      id: 3,
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      id: 4,
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      id: 5,
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      id: 6,
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      id: 7,
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ]

  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const onNewEmployeeAdded = (employee: IEmployee) => {
    // debugger // Stop execution in the Google Chrome.
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner 
        imageAddress="/images/banner.png"
        altText="Banner com o texto: Pessoas e times em um só lugar!"
      />
      <Form 
        onRegisteredEmployee={employee => onNewEmployeeAdded(employee)}
        teamsName={teams.map(team => team.name)} 
      />
      {
        teams.map(
          team => (
            <Team 
              key={team.id} 
              name={team.name} 
              primaryColor={team.primaryColor}
              secondaryColor={team.secondaryColor}
              employees={employees.filter( employee => employee.team === team.name )}
            />
          )
        )
      }
      <Footer />
    </div>
  );
}

export default App;
