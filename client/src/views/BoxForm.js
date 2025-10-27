import React, { useState, useContext } from "react";
import BoxContext from "../state/BoxContext";
import "./BoxForm.css";

const multipliers = {
  Sweden: Number(process.env.REACT_APP_SWEDEN_MULTIPLIER) || 7.35,
  China: Number(process.env.REACT_APP_CHINA_MULTIPLIER) || 11.53,
  Brazil: Number(process.env.REACT_APP_BRAZIL_MULTIPLIER) || 15.63,
  Australia: Number(process.env.REACT_APP_AUSTRALIA_MULTIPLIER) || 50.09,
};

export default function BoxForm() {
  const { addBox } = useContext(BoxContext);

  const [receiver, setReceiver] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [dest, setDest] = useState("Sweden");
  const [errors, setErrors] = useState({});

  const hexToRgb = (hex) => {
    const s = hex.replace("#", "");
    const r = parseInt(s.length === 3 ? s[0] + s[0] : s.slice(0, 2), 16);
    const g = parseInt(s.length === 3 ? s[1] + s[1] : s.slice(2, 4), 16);
    const b = parseInt(s.length === 3 ? s[2] + s[2] : s.slice(4, 6), 16);
    return { r, g, b };
  };


  const handleChange = (field, value) => {
    setErrors((prev) => ({ ...prev, [field]: null })); // clears that field’s error

    if (field === "receiver") setReceiver(value);
    if (field === "dest") setDest(value);

    if (field === "weight") {
      if (Number(value) < 0) {
        setWeight("0");
        setErrors((prev) => ({
          ...prev,
          weight: "Negative values are not permitted. Reset to 0.",
        }));
      } else {
        setWeight(value);
      }
    }

    if (field === "color") setColor(value);
  };

  const validate = () => {
    const newErrors = {};
    if (!receiver.trim()) newErrors.receiver = "Receiver name is required";
    if (weight === "") newErrors.weight = "Weight is required";
    if (!color) newErrors.color = "Box colour is required";
    if (!dest) newErrors.dest = "Destination is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const rgb = hexToRgb(color);
    const payload = {
      receiverName: receiver.trim(),
      weight: Number(weight),
      colorRgb: `(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      destination: dest,
    };

    try {
      await addBox(payload);
      setReceiver("");
      setWeight("");
      setColor("#ffffff");
      setDest("Sweden");
      setErrors({});
    } catch (err) {
      setErrors((prev) => ({ ...prev, form: err.message || "Save failed" }));
    }
  }

  return (
    <div className="card">
      <h2>Add Box</h2>
      <form onSubmit={onSubmit}>
        {/* Receiver Name */}
        <div className="form-row">
          <label>Receiver name</label>
          <input
            type="text"
            value={receiver}
            onChange={(e) => handleChange("receiver", e.target.value)}
            className={errors.receiver ? "error-input" : ""}
          />
          {errors.receiver && <p className="error-text">{errors.receiver}</p>}
        </div>

        {/* Weight */}
        <div className="form-row">
          <label>Weight (kg)</label>
          <input
            type="number"
            step="0.01"
            value={weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            className={errors.weight ? "error-input" : ""}
          />
          {errors.weight && <p className="error-text">{errors.weight}</p>}
        </div>

        {/* Box Colour */}
        <div className="form-row">
          <label>Box colour</label>
          <div
            className={`color-input-wrapper ${errors.color ? "has-error" : ""}`}
          >
            <input
              type="color"
              className="color-box"
              value={color}
              onChange={(e) => handleChange("color", e.target.value)}
            />
            <input
              type="text"
              className="color-text"
              value={color}
              onChange={(e) => handleChange("color", e.target.value)}
              placeholder="#FFFFFF"
            />
          </div>
          {errors.color && <p className="error-text">{errors.color}</p>}
        </div>

        {/* Destination */}
        <div className="form-row">
          <label>Destination</label>
          <select
            value={dest}
            onChange={(e) => handleChange("dest", e.target.value)}
            className={errors.dest ? "error-input" : ""}
          >
            {Object.keys(multipliers).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.dest && <p className="error-text">{errors.dest}</p>}
        </div>

        {/* Submit */}
        <button className="save" type="submit">
          Save
        </button>

        {errors.form && <div className="error-text">{errors.form}</div>}
      </form>
    </div>
  );
}
