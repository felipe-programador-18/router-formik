import {useState, useEffect} from 'react'

const url = 'http://localhost:3000/products'

export const useFecthing = () => {
   const[data, setData] = useState(null)
   const [setting, setSetting] = useState(null)
   const[method, setMethod] = useState(null)
   const[loading, setLoading] = useState(false)
   const[error, setError] = useState(false)
   const[callfet, setCalfe] = useState(false)

   const [itemId, setItemid] = useState(null)

   
   const httpConf = (data, method) => {
       if(method === 'POST'){
        setSetting({
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setMethod('POST')
      } else if(method === 'DELETE'){
         setSetting({
            method: 'DELETE',
            headers:{
            "Content-Type": "application/json"
            }
         }) 
         setMethod("DELETE")
         setItemid(data)
      }

   }

    

    
    useEffect(() => {
      setLoading(true)
    
        const GetFetch = async () => {
        try {
          const res = await fetch(url)
          const json = await res.json()
          setData(json)
          setMethod(null)
          setError(null)
            
        } catch (error) {
         console.log(error.message)
         setError('tem error here')
        }      
         setLoading(false)
        } 
        GetFetch()
    },[url, callfet])

    useEffect(() => {
        
        const httpsMethod = async () => {
          if(method === 'POST'){
            setLoading(true)
            let optionFecthing = [url, setting]
            const res = await fetch(...optionFecthing)
            const json = await res.json()
            setCalfe(json)
          }else if(method === "DELETE"){
           const deletedUrl = `${url}/${itemId}`
           const res = await fetch(deletedUrl, setting)
           const json = await res.json()
           setCalfe(json)
          }   
        }
        httpsMethod()
    },[setting])
 
    return { data, httpConf, loading, error}
}