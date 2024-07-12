import React from 'react';

function RegNow() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article>
      <div className="wrapper">
        <div className="regnow">
          <h1>Get 20% Off on First Purchase</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='regnow_email'
              type="email"
              placeholder='Enter Your Email Address'
              autoComplete='new data'
            />
            <input
              className='regnow_pass'
              type="password"
              placeholder='Create A Password'
              autoComplete='new data'
            />
            <input
              className='regnow_passRep'
              type="password"
              placeholder='Repeat Password'
              autoComplete='new data'
            />
            <button type="submit">REGISTER IT NOW</button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default RegNow;
