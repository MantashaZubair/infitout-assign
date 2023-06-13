import React from "react";
import { ContentData } from "./ContentData";

const Content = () => {
  return (
    <div className="container">
      <div className="row mt-5 text-center bg-light ">
        <div className="col-6 mt-5  fs-5">Call</div>
        <div className="col-6 mt-5  fs-5 ">Pull</div>
      </div>
      <div className="table-wrapper">
        <table className="table caption-top  ">
          <thead>
            <tr>
              <th scope="col" className="table-primary">
                OI Buildup
              </th>
              <th scope="col" className="table-primary">
                IV
              </th>
              <th scope="col" className="table-primary">
                OI
              </th>
              <th scope="col" className="table-primary">
                Volume
              </th>
              <th scope="col" className="table-primary">
                Chang%
              </th>
              <th scope="col" className="table-primary">
                LTP
              </th>
              <th scope="col" className="table-primary"></th>
              <th scope="col" className="table-primary"></th>
              <th scope="col" className="table-secondary">
                &nbsp;Strike
              </th>
              <th scope="col" className="table-primary"></th>
              <th scope="col" className="table-primary"></th>
              <th scope="col" className="table-primary">
                LTP
              </th>
              <th scope="col" className="table-primary">
                Chang%
              </th>
              <th scope="col" className="table-primary">
                Volume
              </th>
              <th scope="col" className="table-primary">
                OI
              </th>
              <th scope="col" className="table-primary">
                IV
              </th>
              <th scope="col" className="table-primary">
                OI Buildup
              </th>
            </tr>
          </thead>
          <tbody className="tableContainerDiv">
            {ContentData.map((item,id) => {
              return (
                <tr key={id}>
                  <td className="table-warning">{item.Buildup}</td>
                  <td className="table-warning">{item.IV}</td>
                  <td className="table-warning">{item.OI}</td>
                  <td className="table-warning">{item.Volume}</td>
                  <td className="table-warning">{item.charge}</td>
                  <td className="table-warning text-success">{item.LTP}</td>
                  <td className="table-warning border bg-light">B</td>
                  <td className="table-warning border bg-light">S</td>
                  <td className="table-secondary border">{item.strike}</td>
                  <td>S</td>
                  <td>B</td>
                  <td>{item.LTP}</td>
                  <td>{item.charge}</td>
                  <td>{item.Volume}</td>
                  <td>{item.OI}</td>
                  <td>{item.IV}</td>
                  <td>{item.Buildup}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
