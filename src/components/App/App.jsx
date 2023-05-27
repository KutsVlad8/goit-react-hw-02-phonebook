import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';

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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInputNameId = nanoid(2);
  nameInputNumberId = nanoid(2);

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
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

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

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

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactsList visibleContacts={visibleContacts} />
      </Container>
    );
  }
}

export default App;
