// import React from 'react'; // Fix error: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.ts(2686)
import './TextField.css';

interface TextFieldProps {
  onChange: (value: string) => void
  placeholder: string
  label: string
  value: string
  isRequired: boolean
}

const TextField = (props: TextFieldProps) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const onTyped = (event: React.ChangeEvent<HTMLInputElement>) => { // https://legacy.reactjs.org/docs/events.html
    props.onChange(event.target.value);
  }

  return (
    <div className='text-field'>
      <label>{props.label}</label>
      <input 
        value={props.value} 
        onChange={onTyped} 
        placeholder={modifiedPlaceholder} 
        required={props.isRequired} 
      />
    </div>
  )
}

export default TextField;
