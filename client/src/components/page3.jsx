import React from 'react'

import styles from '../App.module.scss'

const page3 = () => {
  return (
    <div>
      <header className={styles.App}>Books Delivery Vote</header>
      <section>
        <article>
          Books delivered: <div className="ui red circular label">2</div>
        </article>
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
                <label>Yes</label>
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
              <label>No</label>
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

export default page3
