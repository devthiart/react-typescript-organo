import './DropdownList.css';

const DropdownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select onChange={event => props.onChange(event.target.value)} name={props.label} required={props.isRequired} value={props.value}>
        <option value=""></option>
        {props.items.map((item) => {
          return (<option key={item}>{item}</option>)
        })}
      </select>
    </div>
  )
}

export default DropdownList;
