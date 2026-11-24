'use client';
import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'aw041175@gmail.com';

export function ContactForm() {
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [message,setMessage]=useState('');
  function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault(); const subject=encodeURIComponent(`Portfolio enquiry from ${name}`); const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`; }
  return <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>01 — SEND A MESSAGE</span><ArrowUpRight size={19}/></div><label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name"/></label><label>Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>How can I help?<textarea required rows={4} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell me a little about your project..."/></label><button className="btn btn-primary form-submit" type="submit">Prepare email <Send size={16}/></button><p className="form-hint">Your message will open in your email app addressed to Abdul Wahab.</p></form>;
}
