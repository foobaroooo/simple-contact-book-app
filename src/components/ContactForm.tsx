import { Contact } from '../types';
import { FormEvent } from 'react';

interface ContactFormProps {
    contact: Contact;
    onSave: (updatedContact: Contact) => void;
    onCancel: () => void;
    onDelete: () => void;
}
 

export default function ContactForm({ contact, onSave, onCancel, onDelete } : ContactFormProps) {
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedContact = {
            ...contact,
            name: formData.get('name') as string || '',
            city: formData.get('city') as string || '',
          };
      
          onSave(updatedContact);

          e.target.reset();
    }

    return (
      <form onSubmit={handleSubmit} className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <div>
            <label htmlFor="name" className="input">
              <span className="label">Name</span>
              <input type="text" id="name" name="name" className="input mr-3 ml-3 w-50" defaultValue={ contact.name } />
            </label>
          </div>
          
          <div>
            <label htmlFor="city" className="input">
              <span className="label">City</span>
              <input type="text" id="city" name="city" className="input mr-3 ml-3 w-50" defaultValue={ contact.city } />
            </label>
          </div>

          <div className="flex justify-between">
            <button type="button" id="btnDelete" className="btn btn-secondary">Delete</button>
            <div className="flex gap-2 ml-auto">
              <button type="button" id="btnCancel" className="btn btn-default" onClick={onCancel}>Cancel</button>
              <button type="submit" id="btnSave" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    )
}