import React, { useEffect } from 'react'
import * as yup from 'yup'
import {Formik, Form, Field} from 'formik'

const uf = ['RS','RJ','SC']

// remermber i am create object with type of shape to validation my form
const schema = yup.object().shape({
 name: yup.string().required('Por favor preencha o campo'),
 email: yup.string().required('Por favor preencha o campo').email("Isso não é email!")
})

const from = () => {

    return(<>
    <h1>Practice about formik render!!!</h1>
    <Formik initialValues={{name:'',
     email:''
     , uf:''
     , subcribe: false}
     } 
     onSubmit={async (values) => {
        console.log(values)
     }} validationSchema={schema} 
     
     > 
    {({values, errors, touched}) => (
         
         <Form>
         <label> Name:
           <Field type='name'  name='name' />
           {errors.name && <p> {errors.name} </p> }
        </label>
   
        <label> Email:
           <Field type='email' name='email' />
        </label>
    
           <Field component='select' name='uf' >
              <option> {uf.map(uf => <option key={uf} value={uf} > {uf} </option>  )} </option>
           </Field> 
           <Field type='checkbox' name='subscribe'/>

         <button>get Form</button> 
            {JSON.stringify(values, null, 2)}

       </Form>
    )}
                      
     
    </Formik>
    </>)
}


export default from