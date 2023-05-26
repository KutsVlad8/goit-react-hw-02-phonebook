import { Component } from 'react';
import {
  Container,
  Title,
  FormContainer,
  Form,
  Label,
  Input,
  Button,
} from './App.styled';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  nameInputNameId = nanoid(2);
  nameInputNumberId = nanoid(2);

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.setState({
      [event.currentTarget.number]: event.currentTarget.value,
    });

    this.setState({
      [event.currentTarget.filter]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    const contact = {
      id: nanoid(2),
      name: this.state.name,
      number: this.state.number,
    };

    event.preventDefault();
    this.state.contacts.push(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container>
        <Title>PhoneBook</Title>

        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <Label htmlFor={this.nameInputNameId}>Name</Label>
            <Input
              id={this.nameInputNameId}
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <Label htmlFor={this.nameInputNumberId}>Number</Label>
            <Input
              id={this.nameInputNumberId}
              onChange={this.handleChange}
              type="text"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <Button type="submit">add contact</Button>
          </Form>
        </FormContainer>

        <Title>Contacts</Title>

        <p>Find contacts by name</p>

        <Input
          onChange={this.handleChange}
          type="text"
          name="filter"
          value={this.state.filter}
        />

        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default App;
