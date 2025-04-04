import { FormEvent } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Contact } from "../types";

interface ContactAddProps {
  onAddNew: (newContact: Contact) => void;
}

export default function ContactAdd({ onAddNew }: ContactAddProps) {

  const handleAddNewContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newContact = {
      id: uuidv4(),
      name: formData.get('name') as string,
      city: formData.get('city') as string,
    };

    onAddNew(newContact);

    e.target.reset();
  }

    return (
        <form onSubmit={handleAddNewContact} className="p-5 gap-2 flex rounded-box mb-5 bg-base-100 ">
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
    )
}