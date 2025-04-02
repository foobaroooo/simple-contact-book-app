import './App.css'
import { useState} from 'react'; 



function App() {
  type Contact = { name: string; city: string };

  const [contact, setContact] = useState<Contact>( { name: '', city: '' } );

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newContact = {
      name: formData.get('name') as string,
      city: formData.get('city') as string,
    };

    setContact(newContact);
  }

  const handleEditContact = (e) => {

  }

  return (
    <>
      <header>
        <h1 className="text-2xl">Contact Book</h1>
        <div>Keep track of where your friends live</div>
      </header>
      
      <section>
        <form  onSubmit={handleAddContact} className="mt-5 p-5">
          <label htmlFor="name">
            Name
            <input type="text" id="name" name="name" className="input mr-2 w-50" defaultValue={ contact.name } />
          </label>
          <label htmlFor="city">
            City
            <input type="text" id="city" name="city" className="input mr-2 w-50" defaultValue={ contact.city } />
          </label>

          <button type="submit" id="btnSubmit" className="btn btn-primary">Add contact</button>
        </form>
      </section>

      <section>
        <div className="w-100 border-1 p-5">
          <div id="cardName" className="font-bold">{ contact.name }</div>
          <div id="cardCity">{ contact.city }</div>
          <div className="flex justify-end mt-10">
            <button className="btn">Edit</button>
          </div>
        </div>
      </section>

      <section>
        <form onSubmit={handleEditContact} className="mt-5 p-5 w-100 border-1">
          <div className="m-3">
            <label htmlFor="name">
              Name
              <input type="text" id="name" name="name" className="input mr-3 w-50 ml-3" defaultValue={ contact.name } />
            </label>
          </div>
          
          <div>
            <label htmlFor="city">
              City
              <input type="text" id="city" name="city" className="input mr-3 ml-3 w-50" defaultValue={ contact.city } />
            </label>
          </div>

          <div className="flex justify-between m-5">
            <button type="button" id="btnDelete" className="btn btn-alert">Delete</button>
            <div className="flex gap-2 ml-auto">
              <button type="button" id="btnCancel" className="btn btn-default">Cancel</button>
              <button type="button" id="btnEdit" className="btn btn-primary">Edit</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default App
