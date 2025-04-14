import axios from "axios";
import { useState } from "react";


function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: true
  });


  function handleFormdData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData, [e.target.name]: value
    }));

  }
  console.log(formData)

  function sendForm(e) {
    e.preventDefault()
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((response) => {
        console.log(response.data)
        alert("Form inserito con successo")
      })
      .catch((error) => {
        console.error(error)
        alert("Errore durante l'invio del form")
      })

  }





  return (
    <>

      <form onSubmit={sendForm}>
        <input type="text"
          name="author"
          value={formData.name}
          placeholder="Inserisci autore"
          onChange={handleFormdData} />


        <input type="text"
          name="title"
          value={formData.name}
          placeholder="Inserisci titolo"
          onChange={handleFormdData} />

        <input type="text"
          name="body"
          value={formData.name}
          placeholder="Inserisci testo"
          onChange={handleFormdData} />


        <input type="checkbox"
          name="public"
          checked={formData.public}
          onChange={handleFormdData} />
        <button>invio</button>

      </form>
    </>
  )
}

export default App
