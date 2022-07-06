import React from "react"
import * as yup from 'yup'
import { useFormik } from "formik"


const uf =['RS','SP', 'SC','RJ']

const schema = yup.object().shape({
    name: yup.string().required("Field fill Please") ,
    email: yup.string().required("Field fill Please").email('This not is email')
})

// make form another way with react hook form!!
const StructurForm = () => {
  //create manage process with hook useformik!!
  const form = useFormik({
    initialValues:{
        name:'',
        email:'',
        uf:'',
        subscribe: false

    },
    onSubmit: async(values) => {
     console.log(values)
    },
    
   validationSchema: schema
  })
   
  const getAllform = () => {
    console.log(form)
  }







  return(<>
        <h1>Practice little bit about form hook</h1>

        <form  onSubmit={form.handleSubmit} >
            
            <label> Name:
                <input name='name' type='name' value={form.values.name}  onChange={form.handleChange} onBlur={form.handleBlur} />
                {form.errors.name && form.touched.name ? form.errors.name : ""}
            </label>
           
           <label> Email:
                <input name='email' type='email'  value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                {form.errors.email && form.touched.email ? form.erros.email : '' }
           </label>
                  

            <select name='uf'  value={form.values.uf} onChange={form.handleChange}  onBlur={form.handleBlur} >
                 {uf.map(uf => <option key={uf} value={uf} > {uf} </option>)}
            </select>

            <input type='checkbox' name='subscribe' value={form.values.subscribe} onChange={form.handleChange} onBlur={form.handleBlur} /> 

             <button onClick={getAllform} >Get form!</button>


             <pre> {JSON.stringify(form.values, null, 2)} </pre>
            <pre> {JSON.stringify(form.touched, null,2)} </pre>
                
        </form>
  
  
  
  
  </>
  )
}




export default StructurForm