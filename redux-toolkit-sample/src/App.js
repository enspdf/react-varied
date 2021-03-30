import ContactList from "./components/ContactList";
import ContactInput from "./components/ContactInput";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="page-title">Contacts</h1>
      <ContactInput />
      {/* <input value={site} onChange={(e) => setSite(e.target.value)} />
      <button onClick={findSite}>Find</button> */}
      <ContactList />
    </div>
  );
}

export default App;
