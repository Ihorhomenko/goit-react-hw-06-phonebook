import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';
import './contacts.css'

const Contacts = ({ contacts }) => {
  const dispatch = useDispatch()
  return (
    <ul className='contacts-list'>
      {contacts.map(el => (
        <li className='contacts-item' key={el.id}> 
        {`${el.name}: ${el.number}`}
        <button className='contacts-btn' type='button' onClick={() => dispatch(deleteContact(el.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
// 

export default Contacts