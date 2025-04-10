import './App.css'
import { useState, FormEvent } from 'react';
import { Contact } from './types';
import ContactAdd from './components/ContactAdd';
import ContactCard from './components/ContactCard'
import ContactForm from './components/ContactForm';

function App() {

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editContactId, setEditContactId] = useState<string | null>(null);

  const handleAddNewContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  }

  const handleEditContact = (contactId : string) => {
    setEditContactId(contactId);
  }

  const handleContactSave = (updatedContact : Contact) => {
    const updatedContacts = contacts.map((contact) => {
      return (contact.id === updatedContact.id) ? updatedContact : contact;
    });

    setContacts(updatedContacts)
    setEditContactId(null);
  }

  const handleContactCancel = () => {
    setEditContactId(null);
  }

  const handleContactDelete = (id : string) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== id  // editContactId
    );
    setContacts(updatedContacts);
    setEditContactId(null);
  }

  return (
    <>
      <header>
        <h1 className="text-2xl">Contact Book</h1>
        <div>Keep track of where your friends live</div>
      </header>
            
      <section>
        <ContactAdd onAddNew={ (e) => handleAddNewContact(e) } />
      </section>

      <section className="flex flex-wrap gap-4">
        {contacts.map((contact) => (
          editContactId && editContactId === contact.id? (
            <ContactForm 
              key={ contact.id }
              contact={ contact }
              onSave={ handleContactSave }
              onCancel={ handleContactCancel }
              onDelete={ handleContactDelete }
            />
          ) : (
            <ContactCard 
              key={ contact.id } 
              contact={ contact } 
              onEdit={ () => handleEditContact(contact.id) } />
          )
        ))}
      </section>
    </>
  )
}

export default App
