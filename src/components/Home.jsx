import React from 'react'
import ErpNavbar from './ErpNavbar'

const Home = () => {
    return (
        <div>
            <ErpNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="row">
                            <div class="card" >
                                <br />
                                <img src="https://64.media.tumblr.com/9443bd94b95ef0ecdaefacc3ee61aae2/tumblr_p7ey21Mfbt1r09d6po2_540.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">jonas kahnwald</h5>
                                    <a href="#" class="btn btn-primary">Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Calender</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Subjects</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pay Fees</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="row g-3">
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title current-month">March 2024</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="days row">
                                            <div class="col day">1</div>
                                            <div class="col day">2</div>
                                            <div class="col day">3</div>
                                            <div class="col day">4</div>
                                            <div class="col day">5</div>
                                            <div class="col day">6</div>
                                            <div class="col day">7</div>
                                        </div>
                                        <div class="days row">
                                            <div class="col day">8</div>
                                            <div class="col day">9</div>
                                            <div class="col day">10</div>
                                            <div class="col day">11</div>
                                            <div class="col day">12</div>
                                            <div class="col day">13</div>
                                            <div class="col day">14</div>
                                        </div>
                                        <div class="days row">
                                            <div class="col day">15</div>
                                            <div class="col day">16</div>
                                            <div class="col day">17</div>
                                            <div class="col day">18</div>
                                            <div class="col day">19</div>
                                            <div class="col day">20</div>
                                            <div class="col day">21</div>
                                        </div>
                                        <div class="days row">
                                            <div class="col day">22</div>
                                            <div class="col day">23</div>
                                            <div class="col day">24</div>
                                            <div class="col day">25</div>
                                            <div class="col day">26</div>
                                            <div class="col day">27</div>
                                            <div class="col day">28</div>
                                        </div>
                                        <div class="days row">
                                            <div class="col day">29</div>
                                            <div class="col day">30</div>
                                            <div class="col day"></div>
                                            <div class="col day"></div>
                                            <div class="col day"></div>
                                            <div class="col day"></div>
                                            <div class="col day"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="alert alert-success" role="alert">
                                    <h4 class="alert-heading">Upcoming events</h4>
                                    <p> ADVAY College Fest 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="alert alert-primary" role="alert">
                                    KTU D Zone Chess Competition
                                </div>
                                <div class="alert alert-secondary" role="alert">
                                    IEEE Day PES Quiz
                                </div>

                                <div class="alert alert-danger" role="alert">
                                ISRO Robotics Challenge URSC 2024
                                </div>
                            </div>
                        </div>
                       



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home