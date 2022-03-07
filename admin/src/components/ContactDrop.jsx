import React from 'react'

 const ContactDrop = () => {
  return (
    <div>
      <div>
        <div className="text-gray-300 text-xs pl-2 ">Status</div>
        <div className="pl-2 mt-2 mb-1  pr-2">
        <select className="bg-leadsearch text-white border-hidden">
          <option value="all">All</option>
          <option value="contacted">Contacted</option>
          <option value="not_contacted">Not_Contacted</option>
        </select>
        </div>
      </div>
    </div>
  )
}

export default ContactDrop;
