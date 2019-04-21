import React from 'react'

import './page1.css'

const page1 = ({ suppliers, handleSubmit, daysToVotingClose }) => {
  return (
    <div>
      <header className="page1-header">
        <h1 class="ui header">
          <i aria-hidden="true" class="graduation cap mini icon" />
          <div class="content">STEP 1</div>
        </h1>
      </header>
      <section>
        <article className="page1-table">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>
                  <h3>Supplier Name</h3>
                </th>
                <th>
                  <h3>Number of Votes</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map(supplier => {
                return (
                  <tr>
                    <td data-label="Name">{supplier.name}</td>
                    <td data-label="NumberOfVotes">{supplier.votes}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </article>
        <article className="page1-container">
          <h3> Vote for a supplier:</h3>
          <div className="page1-checkbox">
            {suppliers.map(supplier => (
              <div className="ui radio checkbox ">
                <input
                  type="checkbox"
                  className="hidden"
                  name="checkboxRadioGroup"
                  readonly=""
                  tabindex="0"
                  value="this"
                  id={supplier.name}
                />
                <label for={supplier.name}>{supplier.name}</label>
              </div>
            ))}
          </div>
          <button
            className="btn"
            onClick={() => handleSubmit('supplieraddress')}>
            Submit
          </button>
        </article>
        <article className="page1-container">
          <h3>Days Left:</h3>
          <div className="page1-label">{daysToVotingClose}</div>
        </article>
      </section>
    </div>
  )
}

export default page1
