import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
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
              name={employee.name}
              role={employee.role}
              imageUrl={employee.imageUrl}
              backgroundColor={props.primaryColor}
            />
          ))
        }
      </div>
    </section>
    // : '' // Conditional (ternary) operator
  )
}

export default Team;