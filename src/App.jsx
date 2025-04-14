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
    ...formData, [e.target.name] : value
    }));

    }
    console.log(formData)

    function sendForm(e){
      e.preventDefault()
    }



    

  return (
    <>

    <form onSubmit={sendForm}>
    <input type="text" 
    name="author"
    value={formData.name}
    onChange={handleFormdData}/>


    {/* <input type="text" />
    <input type="text" /> */}
    <input type="checkbox" 
    name="public"
    checked={formData.public}
    onChange={handleFormdData}/>
    <button>invio</button>

    </form>
    </>
  )
}

export default App
