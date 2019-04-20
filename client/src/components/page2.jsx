import React from 'react'
import './page2.css'

const page2 = () => {
  return (
    <section>
      <header>
        <h2 class="ui header">
          <i aria-hidden="true" class="graduation cap mini icon" />
          <div class="content">Learn More</div>
        </h2>
      </header>
      <main>
        <p>Winning Supplier: SUPPLIER X</p>
        <p>Deadline to complete</p>
        <div className="ui red circular label">2</div>
        <p>Days to completion</p>
        <div className="ui red circular label">2</div>
      </main>
    </section>
  )
}

export default page2
