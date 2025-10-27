import React, { useContext } from "react";
import BoxContext from "../state/BoxContext";
import './BoxList.css'

const multipliers = {
  Sweden: Number(process.env.REACT_APP_SWEDEN_MULTIPLIER) || 7.35,
  China: Number(process.env.REACT_APP_CHINA_MULTIPLIER) || 11.53,
  Brazil: Number(process.env.REACT_APP_BRAZIL_MULTIPLIER) || 15.63,
  Australia: Number(process.env.REACT_APP_AUSTRALIA_MULTIPLIER) || 50.09,
};


export default function BoxList() {
  const { boxes, loading, error } = useContext(BoxContext);

  if (loading) return <div className="card">Loading…</div>;
  if (error) return <div className="card error">{error}</div>;

  const inr = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Receiver</th>
            <th>Weight (kg)</th>
            <th>Box colour</th>
            <th>Destination</th>
            <th>Shipping cost</th>
          </tr>
        </thead>
        <tbody>
          {boxes.length === 0 ? (
            <tr>
              <td colSpan="5">No boxes</td>
            </tr>
          ) : (
            boxes.map((b) => (
              <tr key={b.id}>
                <td data-label="Receiver">{b.receiverName}</td>
                <td data-label="Weight (kg)">{b.weight}</td>
                <td data-label="Box colour">
                  <span
                    className="color-box"
                    style={{
                      background: `rgb${b.colorRgb.replace(/\s/g, "")}`,
                    }}
                  ></span>
                  <span className="color-text">{b.colorRgb}</span>
                </td>
                <td data-label="Destination">{b.destination}</td>
                <td data-label="Shipping cost">
                  {inr.format(
                    Number(b.weight) * (multipliers[b.destination] || 0)
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
