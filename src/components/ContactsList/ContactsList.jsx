const ContactsList = ({ visibleContacts }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
