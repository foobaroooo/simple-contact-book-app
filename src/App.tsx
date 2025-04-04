import './App.css'
import { useState, FormEvent } from 'react';
import { Contact } from './types';
import ContactCard from './components/ContactCard'
import ContactForm from './components/ContactForm';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editContactId, setEditContactId] = useState<string | null>(null);

  const handleAddContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newContact = {
      id: uuidv4(),
      name: formData.get('name') as string,
      city: formData.get('city') as string,
    };

    setContacts([...contacts, newContact]);
  }

  const handleEditContact = (contactId : string) => {
    setEditContactId(contactId);
  }

  const handleContactFormSave = (updatedContact : Contact) => {
    setContacts([...contacts, updatedContact])
    setEditContactId(null);
  }

  const handleContactFormCancel = (e) => {
    setEditContactId(null);
  }

  const handleContactFormDelete = (e) => {

  }

  return (
    <>
      <header>
        <h1 className="text-2xl">Contact Book</h1>
        <div>Keep track of where your friends live</div>
      </header>
            
      <section>
        <form onSubmit={handleAddContact} className="mt-5 p-5 rounded-box mb-5 bg-base-100 ">
          <label htmlFor="name" className="input">
            <span className="label">Name</span>
            <input type="text" id="name" name="name" className="input mr-3 w-50 ml-3" defaultValue="" />
          </label>
          <label htmlFor="city" className="input">
            <span className="label">City</span>
            <input type="text" id="city" name="city" className="input mr-3 w-50 ml-3" defaultValue="" />
          </label>

          <button type="submit" id="btnSubmit" className="btn btn-primary">Add contact</button>
        </form>
      </section>

      <section className="flex flex-wrap gap-4">
        {contacts.map((contact) => (
          editContactId && editContactId === contact.id? (
            <ContactForm 
              key={ contact.id }
              contact={ contact }
              onSave={ handleContactFormSave }
              onCancel={ handleContactFormCancel }
              onDelete={ handleContactFormDelete }
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
