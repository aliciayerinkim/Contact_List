import React from "react"; 
import { useState } from 'react'
import {useEffect} from 'react'

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        }

        fetchContact();
    }, [selectedContactId]);

    useEffect(() => {
        console.log(contact);
    }, [contact]);

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail">
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
        </div>
    );
}
