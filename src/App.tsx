import './App.css'
import { useState} from 'react';
import { Contact } from './types';
import ContactCard from './components/ContactCard'

function App() {

  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newContact = {
      name: formData.get('name') as string,
      city: formData.get('city') as string,
    };

    setContacts([...contacts, newContact]);
  }

  const handleEditContact = (e) => {

  }

  const handleSaveContact = (e) => {

  }

  return (
    <>
      <header>
        <h1 className="text-2xl">Contact Book</h1>
        <div>Keep track of where your friends live</div>
      </header>
      

      
      <section>
        <form onSubmit={handleAddContact} className="mt-5 p-5 rounded-box mb-5 bg-base-100 ">
          <label htmlFor="name">
            Name
            <input type="text" id="name" name="name" className="input mr-3 w-50 ml-3" defaultValue="" />
          </label>
          <label htmlFor="city">
            City
            <input type="text" id="city" name="city" className="input mr-3 w-50 ml-3" defaultValue="" />
          </label>

          <button type="submit" id="btnSubmit" className="btn btn-primary">Add contact</button>
        </form>
      </section>




      <section className="flex flex-wrap gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onEdit={handleEditContact} />
        ))}
      </section>




      <section>
        <form onSubmit={handleSaveContact} className="card w-96 bg-base-100 card-md shadow-sm mt-5">
          <div className="card-body">
            <div className="m-2">
              <label htmlFor="name">
                <span>Name</span>
                <input type="text" id="name" name="name" className="input mr-3 ml-3 w-50" defaultValue="" />
              </label>
            </div>
            
            <div className="m-2">
              <label htmlFor="city">
                <span>City</span>
                <input type="text" id="city" name="city" className="input mr-3 ml-3 w-50" defaultValue="" />
              </label>
            </div>

            <div className="flex justify-between m-5">
              <button type="button" id="btnDelete" className="btn btn-secondary">Delete</button>
              <div className="flex gap-2 ml-auto">
                <button type="button" id="btnCancel" className="btn btn-default">Cancel</button>
                <button type="button" id="btnSave" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default App
