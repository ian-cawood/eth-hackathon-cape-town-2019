import React from 'react'

import styles from '../App.module.scss'

const page1 = () => {
  return (
    <div>
      <header className={styles.App}>Voting for Supplier</header>
      <section>
        <table class="ui celled table">
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
          <form class="ui form">
            <div class="field">
              Selected value: <b />
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="checkbox"
                  class="hidden"
                  name="checkboxRadioGroup"
                  readonly=""
                  tabindex="0"
                  value="this"
                />
                <label>Bic</label>
              </div>
            </div>
            <div class="field" />
            <div class="ui radio checkbox">
              <input
                type="checkbox"
                class="hidden"
                name="checkboxRadioGroup"
                readonly=""
                tabindex="0"
                value="that"
              />
              <label>Waltons</label>
            </div>
            <div class="field" />
            <div class="ui radio checkbox">
              <input
                type="checkbox"
                class="hidden"
                name="checkboxRadioGroup"
                readonly=""
                tabindex="0"
                value="that"
              />
              <label>Protea Books</label>
            </div>
          </form>
        </article>
        <button class="ui button">Submit</button>
      </section>
    </div>
  )
}

export default page1
