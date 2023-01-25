// import {useState} from 'react'



function CreateInput(props) {
    // const [formData, setFormData] =  useState({})

    // const onSubmit =data =>{setFormData(data)}

  return (
    <div className='input-container'>
        <input type={props.type}></input>
    </div>
  )
}

export default CreateInput;