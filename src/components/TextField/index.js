import './TextField.css';

const TextField = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <div className='text-field'>
      <label>{props.label}</label>
      <input value={props.value} onChange={onTyped} placeholder={modifiedPlaceholder} required={props.isRequired} />
    </div>
  )
}

export default TextField;
