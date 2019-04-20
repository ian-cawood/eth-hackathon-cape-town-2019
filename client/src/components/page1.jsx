import React from 'react'

import styles from '../App.module.scss'

const page1 = ({ suppliers }) => {
  return (
    <div>
      <header className={styles.App}>Voting for Supplier</header>
      <section>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Number of Votes</th>
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
        <article>
          <form className="ui form">
            <div className="field">
              Selected value: <b />
            </div>
            {suppliers.map(supplier =>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    type="checkbox"
                    className="hidden"
                    name="checkboxRadioGroup"
                    readonly=""
                    tabindex="0"
                    value="this"
                  />
                  <label>{supplier.name}</label>
                </div>
              </div>
            )}
          </form>
        </article>
        <button className="ui button">Submit</button>
        <article>
          Days Left: <div className="ui red circular label">2</div>
        </article>
      </section>
    </div>
  )
}

export default page1
