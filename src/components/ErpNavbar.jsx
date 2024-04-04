import React from 'react'

const ErpNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><b>Toc H </b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Perfomance">My Perfomance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Docs">Documents</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn position-relative">
                  Notifications
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    12+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ErpNavbar