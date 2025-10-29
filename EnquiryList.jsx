import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function EnquiryList(){
  const [items,setItems]=useState([])
  const [q,setQ]=useState('')
  const [page,setPage]=useState(1)
  const [next,setNext]=useState(null)

  const fetch = async () => {
    const params = {search: q, page}
    const res = await axios.get('http://127.0.0.1:8000/api/enquiries/', {params})
    setItems(res.data.results || res.data)
    setNext(res.data.next)
  }

  useEffect(()=>{fetch()},[q,page])

  const handleDelete = async (id)=>{
    if(!confirm('Delete this enquiry?')) return
    await axios.delete(`http://127.0.0.1:8000/api/enquiries/${id}/`)
    fetch()
  }

  return (
    <div>
      <h2>All Enquiries</h2>
      <div className="search">
        <input placeholder="Search name or email" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {items.map(it=> (
            <tr key={it.id}>
              <td>{it.name}</td>
              <td>{it.email}</td>
              <td>{it.phone}</td>
              <td>{it.message}</td>
              <td>{new Date(it.created_at).toLocaleString()}</td>
              <td><button onClick={()=>handleDelete(it.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop:10}}>
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <span style={{margin:'0 8px'}}>Page {page}</span>
        <button onClick={()=>setPage(p=>p+1)} disabled={!next}>Next</button>
      </div>
    </div>
  )
}
