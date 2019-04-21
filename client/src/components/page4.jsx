import React from 'react'

import './page4.css'

const page4 = ({ outcome }) => {
  if (outcome === 'success') {
    return (
      <section>
        <header className="page1-header">
          <h1 class="ui header">
            <i aria-hidden="true" class="graduation cap mini icon" />
            <div class="content">STEP 4</div>
          </h1>
        </header>
        <main className="page4-main">
          <div className="success">
            <div className="ui card">
              <img
                src="https://banner2.kisspng.com/20180413/tiq/kisspng-computer-icons-smiley-emoticon-youtube-wink-smiley-face-5ad0d08f792110.5673384415236343194962.jpg"
                className="ui image"
                alt="smiley face"
              />
              <div className="content">
                <div className="header">
                  <h3>SUCCESS</h3>
                </div>
                <div className="description">
                  Money has been paid to the supplier and books have been
                  received by the schools.
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    )
  } else {
    return (
      <section>
        <header className="page1-header">
          <h1 class="ui header">
            <i aria-hidden="true" class="graduation cap mini icon" />
            <div class="content">STEP 4</div>
          </h1>
        </header>
        <main className="page4-main">
          <div className="failure">
            <div className="ui card">
              <img
                src="https://img.clipartimage.com/extraordinary-design-angry-face-clipart-smiley-big-sad-face-big-smile-emoji-clipart-black-and-white-no-background-840_880.png"
                className="ui image"
                alt="sad face"
              />
              <div className="content">
                <div className="header">
                  <h3>FAILURE</h3>
                </div>
                <div className="description">
                  Supplier did not supply enough books and will not receive
                  payment
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    )
  }
}

export default page4
