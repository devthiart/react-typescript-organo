import './DropdownList.css';

interface DropdownListProps {
  onChange: (value: string) => void
  label: string
  isRequired: boolean
  value: string
  items: string[]
}

const DropdownList = (props: DropdownListProps) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select 
        onChange={ event => props.onChange(event.target.value) } 
        name={props.label} 
        required={props.isRequired} 
        value={props.value}
      >
        <option value=""></option>
        {props.items.map((item) => {
          return (<option key={item}>{item}</option>)
        })}
      </select>
    </div>
  )
}

export default DropdownList;
