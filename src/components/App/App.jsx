import css from "./App.module.css";
import ContactForm from "../companents/ContactForm/ContactForm.jsx";
import ContactList from "../companents/ContactList/ContactList.jsx";
import SearchBox from "../companents/SearchBox/SearchBox.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  addContact,
  deleteContact,
} from "../../redux/contactsSlice.js";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice.js";

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
