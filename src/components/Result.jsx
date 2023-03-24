import React from "react";
import "./Result.css";

const result = () => {
  return (
    <div className="result">
      <div className="result_container">
        <table className="result_container_table">
          <tr>
            <th> UserName</th>
            <th> Physics test</th>
            <th> Chemistry test</th>
          </tr>
          <tr>
            <td>sumit</td>
            <td>upcoming</td>
            <td>10</td>
          </tr>
          <tr>
            <td> Shivam</td>
            <td> Not attended</td>
            <td> 8</td>
          </tr>
          <tr>
            <td>abhishek</td>
            <td>10</td>
            <td>12</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default result;
xx 