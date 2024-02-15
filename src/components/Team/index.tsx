import { IEmployee } from '../../shared/interfaces/IEmployee';
import Employee from '../Employee';
import './Team.css';

interface TeamProps {
  primaryColor: string
  secondaryColor: string
  name: string
  employees: IEmployee[]
}

const Team = (props: TeamProps) => {
  const cssStyle = { backgroundColor: props.secondaryColor };

  return (
    // If props.employees.length > 0 then return section tag.
    // (props.employees.length > 0) ? <section className="team" style={ cssStyle }> // Conditional (ternary) operator
    // Other way:
    (props.employees.length > 0) && <section className="team" style={ cssStyle }>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="employees">
        {
          props.employees.map( employee => (
            <Employee 
              key={employee.name}
              employee={employee}
              backgroundColor={props.primaryColor}
            />
          ))
        }
      </div>
    </section>
    // : <></> // Conditional (ternary) operator
  )
}

export default Team;