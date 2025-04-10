import { Contact } from '../types';

interface ContactCardProps {
    contact: Contact;
    onEdit: (id: string) => void
}

export default function ContactCard({ contact, onEdit }: ContactCardProps) {
    return (
        <div className="card flex flex-col w-96 bg-base-100 card-md shadow-sm" key={ contact.id }>
            <div className="card-body">
                <h5 className="card-title font-bold">{ contact.name }</h5>
                <div>{ contact.city }</div>
                <div className="flex justify-end mt-10 card-action">
                    <button type="button" className="btn btn-primary" onClick={ () => onEdit(contact.id) }>Edit</button>
                </div>
            </div>
        </div>
    )
}