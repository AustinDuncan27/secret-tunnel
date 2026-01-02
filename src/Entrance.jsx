import { useState,  useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Entrance() {
  const [name, setName] = useState('');
  const {signUp}=useContext(AuthContext)
  const handleSubmitForm= (event) => {
    event.preventDefault();
    signUp(name);
  }
  const handleChangeName = (event) => {
    setName(event.target.value)
  }
  return (
    <>
      <h1>Cave Entrance</h1>
      <p>Your journey has brought you to the base of a rocky mountain.</p>
      <p>
        The quickest path forward is through the mountain winding tunnels, but
        a sturdy metal gate sits closed before you.
      </p>
      <p>
        Two giant badgers stand guard on either side of the gate, their eyes
        fixed on you. The one on the left opens its mouth, and with a deep,
        rumbling voice, it asks, Who approaches? Speak your name.
      </p>
      <form onSubmit= {handleSubmitForm}>
        <label>
          Name
          <input 
          value= {name}
          onChange= {handleChangeName}
          name="name" />
        </label>
        <button>Respond</button>
      </form>
    </>
  );
}
