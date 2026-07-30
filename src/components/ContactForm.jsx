import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch =useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    const contact = {
      id: crypto.randomUUID(), 
      name,
      number,
    };
    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
