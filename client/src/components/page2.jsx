import React from 'react'
import './page2.css'

const page2 = () => {
  return (
    <section>
      <header className="page2-header">
        <h1 class="ui header">
          <i aria-hidden="true" class="graduation cap mini icon" />
          <div class="content">STEP 2</div>
        </h1>
      </header>
      <main className="page2-wrapper">
        <header className="page2-container1">
          <h3>Winning Supplier:</h3>
          <h1 className="page2-winner"> SUPPLIER X</h1>
        </header>
        <article className="page2-container2">
          <h3>Deadline to complete:</h3>
          <p className="page2-label">2</p>
          <h3>Days to completion:</h3>
          <div className="page2-label">2</div>
        </article>
      </main>
    </section>
  )
}

export default page2
