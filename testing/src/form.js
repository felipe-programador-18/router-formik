import React from 'react'
import * as yup from 'yup'
import {Formik, Form, Field} from 'formik'

const uf = ['RS','RJ','SC']

// remermber i am create object with type of shape to validation my form
const schema = yup.object().shape({
 name: yup.string().required('Por favor Prencha o campo'),
 email: yup.string().required('Por favor preencha o campo').email("Isso não é email!")
})

const PracticMore = () => {

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
           <Field  type={'name'}  name='name' />
           {errors.name && touched.name ?  errors.name : ""}
        </label>
   
        <label> Email:
           <Field type={'email'} name='email' />
           {errors.email && <p> {errors.email} </p>  }
        </label>
    
           <Field component='select' name='uf' >
               {uf.map(uf => <option key={uf} value={uf} > {uf} </option>  )} 
           </Field> 
           <Field type='checkbox' name='subscribe'/>

         <button>get Form</button> 

         <pre> {JSON.stringify(values, null, 2)} </pre>

       </Form>
    )}
                      
     
    </Formik>
    </>)
}


export default PracticMore