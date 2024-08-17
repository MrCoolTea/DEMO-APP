import React from 'react'
import { Link } from 'react-router-dom'
import { deleteContact } from '../api/ContactService';

const Contact = ({ contact, onDelete }) => {
   
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                await deleteContact(contact.id);
                alert('Contact deleted successfully!');
                if (onDelete) onDelete(contact.id);
            } catch (error) {
                alert('Failed to delete contact.');
            }
        }
    };
   
    return (
        <Link to={`/contacts/${contact.id}`} className="contact__item">
                <div className="contact__header">
                    <div className="contact__image">
                        <img src={contact.photoUrl} alt={contact.name}/>
                    </div>
                    <div className="contact__details">
                        <p className="contact_name">{contact.name.substring(0, 25)}</p>
                        <p className="contact_title">{contact.title}</p>
                    </div>
                </div>
                <div className="contact__body">
                    <p><i className="bi bi-envelope"></i>{contact.email.substring(0, 20)}</p>
                    <p><i className="bi bi-geo"></i>{contact.address}</p>
                    <p><i className="bi bi-telephone"></i>{contact.phone}</p>
                    <p>{contact.status === 'Active' ? <i className='bi bi-check-circle'></i> : 
                        <i className='bi bi-x-circle'></i>} {contact.status}</p>
                </div>
                <div>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </Link>
  )
}

export default Contact