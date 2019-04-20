import React from 'react'

import './page3.css'

const page3 = () => {
  return (
    <div>
      <section>
        <header className="page3-header">
          <h1 class="ui header">
            <i aria-hidden="true" class="graduation cap mini icon" />
            <div class="content">STEP 3</div>
          </h1>
        </header>
        <main className="page3-wrapper">
          <article className="page3-container">
            <h3>Have you received your books?</h3>
            <div className="page3-checkboxes">
              <div class="ui radio checkbox">
                <input
                  type="checkbox"
                  class="hidden"
                  readonly=""
                  tabindex="0"
                />
                <label>Yes</label>
              </div>
              <div class="ui radio checkbox">
                <input
                  type="checkbox"
                  class="hidden"
                  readonly=""
                  tabindex="0"
                />
                <label>No</label>
              </div>
            </div>
            <button className="btn">Submit</button>
          </article>
          <article className="page3-container">
            <h3>Books delivered: </h3>
            <div className="page3-label">2</div>
            <h3>Days Left:</h3>
            <div className="page3-label">2</div>
          </article>
        </main>
      </section>
    </div>
  )
}

export default page3
