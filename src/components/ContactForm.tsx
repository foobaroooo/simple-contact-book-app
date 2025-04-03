import { Contact } from '../types';

interface ContactFormProps {
    contact: Contact;
    onSave: () => void;
    onDelete: () => void;
}

export default function ContactForm({ contact, onSave, onDelete } : ContactFormProps) {
    return (
        <form className="card w-96 bg-base-100 card-md shadow-sm mt-5">
        <div className="card-body">
          <div className="m-2">
            <label htmlFor="name">
              <span>Name</span>
              <input type="text" id="name" name="name" className="input mr-3 ml-3 w-50" defaultValue={ contact.name } />
            </label>
          </div>
          
          <div className="m-2">
            <label htmlFor="city">
              <span>City</span>
              <input type="text" id="city" name="city" className="input mr-3 ml-3 w-50" defaultValue={ contact.city } />
            </label>
          </div>

          <div className="flex justify-between m-5">
            <button type="button" id="btnDelete" className="btn btn-secondary" onClick={onDelete}>Delete</button>
            <div className="flex gap-2 ml-auto">
              <button type="button" id="btnCancel" className="btn btn-default">Cancel</button>
              <button type="button" id="btnSave" className="btn btn-primary" onClick={onSave}>Save</button>
            </div>
          </div>
        </div>
      </form>
    )
}