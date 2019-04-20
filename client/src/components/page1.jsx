import React from 'react'

import styles from '../App.module.scss'

const page1 = () => {
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
            <tr>
              <td data-label="Name">Bic</td>
              <td data-label="NumberOfVotes">24</td>
            </tr>
            <tr>
              <td data-label="Name">Waltons</td>
              <td data-label="NumberOfVotes">26</td>
            </tr>
            <tr>
              <td data-label="Name">Protea Books</td>
              <td data-label="NumberOfVotes">24</td>
            </tr>
          </tbody>
        </table>
        <article>
          <form className="ui form">
            <div className="field">
              Selected value: <b />
            </div>
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
                <label>Bic</label>
              </div>
            </div>
            <div className="field" />
            <div className="ui radio checkbox">
              <input
                type="checkbox"
                className="hidden"
                name="checkboxRadioGroup"
                readonly=""
                tabindex="0"
                value="that"
              />
              <label>Waltons</label>
            </div>
            <div className="field" />
            <div className="ui radio checkbox">
              <input
                type="checkbox"
                className="hidden"
                name="checkboxRadioGroup"
                readonly=""
                tabindex="0"
                value="that"
              />
              <label>Protea Books</label>
            </div>
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
