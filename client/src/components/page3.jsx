import React from 'react'

const page3 = () => {
  return (
    <div>
      <header>
        <h3>Books Delivery Vote</h3>
      </header>
      <section>
        <article>
          Books delivered: <div className="page3-label">2</div>
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
          Days Left: <div className="page3-label">2</div>
        </article>
      </section>
    </div>
  )
}

export default page3
