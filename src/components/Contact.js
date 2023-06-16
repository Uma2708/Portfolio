import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="contact" id="contact">
      <div className="contact-form">
        <div className="contact-header">
          <h2
            style={{
              margin: '30px',
              color: 'var(--red)',
              fontWeight: 'bold',
              fontSize: '34px',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3)',
              textAlign: 'center',
            }}
          >
            Contact Me
          </h2>
        </div>
        <form
          action={`mailto:bhardwajuma001@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`}
          method="post"
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
