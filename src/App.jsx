import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";
import { SearchBox } from "./components/SearchBox";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
       
      }}
    >
      <>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </>
    </div>
  );
};
