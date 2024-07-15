import React from 'react';
import './calculator.css';

const Calculator = () => {
  return (
    <div className="whiteebox">
      <div>
      <h2>Body Type Calculator</h2>
      <form>
        <div className="input-group">
          <label htmlFor="bust">Bust Size</label>
          <div className="input-with-unit">
            <input type="number" id="bust" name="bust" />
            <select>
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="waist">Waist Size</label>
          <div className="input-with-unit">
            <input type="number" id="waist" name="waist" />
            <select>
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="high-hip">High Hip Size</label>
          <div className="input-with-unit">
            <input type="number" id="high-hip" name="high-hip" />
            <select>
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="hip">Hip Size</label>
          <div className="input-with-unit">
            <input type="number" id="hip" name="hip" />
            <select>
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>
        <button type="submit" className="calculate-button">CALCULATE</button>
      </form>
      <button className="continuee-button">CONTINUE</button>
      </div>
    </div>
  );
};

export default Calculator;
