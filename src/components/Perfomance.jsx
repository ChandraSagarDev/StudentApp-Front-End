import React from 'react'
import ErpNavbar from './ErpNavbar'

const Perfomance = () => {
    return (
        <div>
<ErpNavbar/>
<br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Current Semester</option>
                                    <option value="1">Semester 1</option>
                                    <option value="2">Semester 2</option>
                                    <option value="3">Semester 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <br />
                                <p><b>IA 1</b></p>
                            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Marks Obtained</th>
      <th scope="col">Percentage</th>
      <th scope="col">Max Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">COA</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">DBMS</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">OS</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">GT</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">PE</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
<br />
<br />
                                <p><b>IA 2</b></p>
                            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Marks Obtained</th>
      <th scope="col">Percentage</th>
      <th scope="col">Max Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">COA</th>
      <td>21</td>
      <td>85%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">DBMS</th>
      <td>19</td>
      <td>80%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">OS</th>
      <td>13</td>
      <td>55%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">GT</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">PE</th>
      <td>17</td>
      <td>70%</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Perfomance