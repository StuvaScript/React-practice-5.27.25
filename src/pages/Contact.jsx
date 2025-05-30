import { useOutletContext } from "react-router-dom";

const moreContacts = [
  { name: "Dan", id: 1 },
  { name: "Tay Tay", id: 2 },
  { name: "Ryan", id: 3 },
];

export default function Contact() {
  const { setActiveUser } = useOutletContext();

  const handleClick = (e) => setActiveUser(e.target.innerText);

  const contacts = (
    <ul>
      <li key={1} className="contact" onClick={handleClick}>
        Katie
      </li>
      <li key={2} className="contact" onClick={handleClick}>
        Karli
      </li>
      <li key={3} className="contact" onClick={handleClick}>
        Jackie
      </li>
    </ul>
  );

  const shoot = (a) => {
    alert(a);
  };

  const didYouMakeIt = () => true;

  return (
    <>
      <h1>Contact Me</h1>
      {contacts}
      <ul>
        {moreContacts.map((contact) => (
          <li key={contact.id} className="contact" onClick={handleClick}>
            {contact.name}!!!
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button
        onClick={() => (didYouMakeIt() ? shoot("Sweet!") : shoot("Bummer!"))}
      >
        {didYouMakeIt() && "This should be easy! "}
        Take the shot!
      </button>
    </>
  );
}
