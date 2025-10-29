import React, {useState} from 'react'
import axios from 'axios'

export default function EnquiryForm(){
  const [form,setForm]=useState({name:'',email:'',phone:'',message:''})
  const [status,setStatus]=useState(null)

  const handleChange = e => setForm({...form,[e.target.name]: e.target.value})

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(null)
    try{
      const res = await axios.post('http://127.0.0.1:8000/api/enquiries/', form)
      setStatus({type:'success', msg:'Enquiry submitted'})
      setForm({name:'',email:'',phone:'',message:''})
    }catch(err){
      const msg = err.response?.data || err.message
      setStatus({type:'error', msg:JSON.stringify(msg)})
    }
  }

  return (
    <div>
      <h2>Submit an Enquiry</h2>
      {status && <div style={{color: status.type==='error' ? 'red':'green'}}>{status.msg}</div>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} />
        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
