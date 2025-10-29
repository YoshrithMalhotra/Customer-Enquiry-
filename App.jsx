import React from 'react'
import EnquiryForm from './components/EnquiryForm'
import EnquiryList from './components/EnquiryList'

export default function App(){
  return (
    <div className="container">
      <h1>Customer Enquiries</h1>
      <EnquiryForm />
      <hr />
      <EnquiryList />
    </div>
  )
}
