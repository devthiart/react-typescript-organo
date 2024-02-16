import { IEmployee } from '../../shared/interfaces/IEmployee';
import './Employee.css';

interface EmployeeProps {
  employee: IEmployee
  backgroundColor: string
}

const Employee = ({ employee, backgroundColor }: EmployeeProps) => {
  return (
    <div className='employee'>
      <div className='header' style={{backgroundColor: backgroundColor}}>
        <img src={employee.imageUrl} alt={`Foto de ${employee.name}`} />
      </div>
      <div className='footer'>
        <h4>{employee.name}</h4>
        <h5>{employee.role}</h5>
        <h6>{ new Date(employee.date).toLocaleDateString() }</h6>
      </div>
    </div>
  )
}

export default Employee;
