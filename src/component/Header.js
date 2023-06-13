import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { BiFilter } from "react-icons/bi";
import Button from "react-bootstrap/Button";
const Header = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  return (
    <div className="container">
      <div className="mt-4 d-flex flex-row">
        <input type="text" className="py-1" value={"Netify"} />
        <input type="text" className="ms-2 py-1" value={" 18 May 2023"} />

        <span className="ms-3">
          <span className="text-secondary">Spot</span>
          <h6 className="text-dark">
            180000.0 <span className="text-success ms-2">0.36%</span>
          </h6>
        </span>
        <span className="ms-3">
          <span className="text-secondary">Fut</span>
          <h6 className="text-dark">
            180000.0 <span className="text-success ms-2">0.36%</span>
          </h6>
        </span>
        <span className="ms-5">
          <span className="text-secondary">Max pain</span>
          <h6 className="text-dark">180000</h6>
        </span>
        <span className="ms-3">
          <span className="text-secondary">PCR</span>
          <h6 className="text-dark">0.92</h6>
        </span>
        <span className="ms-3">
          <span className="text-secondary">Support </span>
          <h6 className="text-dark">1810</h6>
        </span>
        <span className="ms-3">
          <span className="text-secondary">Support </span>
          <h6 className="text-dark">0.92</h6>
        </span>

        <span className="ms-5 mt-2">
          <span className="text-dark ms-4" onClick={toggleShowA}>
            <BiFilter className="me-1 fs-4" />
            Filters{" "}
          </span>
        </span>

        <span className="ms-5">
          <button
            type="button"
            className="btn btn-primary position-relative px-4"
          >
            Basket{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
              3 <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </span>
      </div>
      <div className="float-end me-5 filter">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto text-dark">Filters</strong>
          </Toast.Header>
          <Toast.Body>
            <span>LPT range</span>
            <div className="row">
              <div className="col-6">
                <p className="border p-2">Maximum LPT</p>
                <p className="mt-4">LPT charge By</p>
                <p className="mt-5">Specific stike</p>
                <p className="">Display</p>
              </div>
              <div className="col-6">
                <p className="border p-2">Maximum LPT</p>
                <select className="p-2 px-4 mt-2 bg-light border ">
                  <option selected>Today Open</option>
                </select>
                <p className="border py-3 mt-4"></p>
                <div className="row">
                  <div className="col-6">
                    <label className="d-flex flex-row">
                      <input
                        className="form-check-input me-1 p-2 px-2"
                        type="checkbox"
                        checked
                      />
                      call
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="d-flex flex-row">
                      <input
                        className="form-check-input me-1 p-2 px-2"
                        type="checkbox"
                        checked
                      />
                      puts
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <Button
                as="input"
                type="reset"
                value="Reset"
                onClick={toggleShowA}
              />
              <Button
                as="input"
                type="reset"
                value="Apply"
                onClick={toggleShowA}
                className="ms-2"
              />
            </div>
          </Toast.Body>
        </Toast>
      </div>

      <div className="mt-4 float-end">
        <Button as="input" type="reset" value="LTP" />{" "}
        <Button as="input" type="reset" value="Greeks" variant="secondary" />
      </div>
    </div>
  );
};

export default Header;
