import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';
import { IEmployee } from '../../shared/interfaces/IEmployee';

interface FormProps {
  onRegisteredEmployee: (employee: IEmployee) => void
  teamsName: string[]
}

const Form = (props: FormProps) => {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [team, setTeam] = useState(props.teamsName[0]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onRegisteredEmployee({
      name, 
      role, 
      imageUrl, 
      team
    });
    clearForm();
  }

  const clearForm = () => {
    setName('');
    setImageUrl('');
    setRole('');
    setTeam('');
  }

  return (
    <section className="container-form">
      <form onSubmit={event => submitForm(event)}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          label="Nome" 
          placeholder="Digite seu nome"
          value={name}
          onChange={value => setName(value)}
          isRequired={true}
        />
        <TextField 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          value={role}
          onChange={value => setRole(value)}
          isRequired={true} 
        />
        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          value={imageUrl}
          onChange={value => setImageUrl(value)}
        />
        <DropdownList 
          label="Time" 
          items={props.teamsName} 
          value={team}
          onChange={value => setTeam(value)}
          isRequired={true}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form;
