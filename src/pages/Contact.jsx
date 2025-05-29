const contacts = (
  <ul>
    <li key={1} className="contact">
      Katie
    </li>
    <li key={2} className="contact">
      Karli
    </li>
    <li key={3} className="contact">
      Jackie
    </li>
  </ul>
);

const moreContacts = [
  { name: "Dan", id: 1 },
  { name: "Tay Tay", id: 2 },
  { name: "Ryan", id: 3 },
];

export default function Contact() {
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
          <li key={contact.id} className="contact">
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
