// import React from 'react'; // Fix error: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.ts(2686)
import './TextField.css';

interface TextFieldProps {
  onChange: (value: string) => void
  placeholder: string
  label: string
  value: string
  isRequired?: boolean
  type?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const TextField = ({ onChange, placeholder, label, value, isRequired = false, type = 'text' }: TextFieldProps) => {
  const modifiedPlaceholder = `${placeholder}...`;

  const onTyped = (event: React.ChangeEvent<HTMLInputElement>) => { // https://legacy.reactjs.org/docs/events.html
    onChange(event.target.value);
  }

  return (
    <div className='text-field'>
      <label>{label}</label>
      <input 
        type={type}
        value={value} 
        onChange={onTyped} 
        placeholder={modifiedPlaceholder} 
        required={isRequired} 
      />
    </div>
  )
}

export default TextField;
