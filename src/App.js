import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import { CommandPoints } from './CommandPoints';
import { FactionPicker } from './FactionPicker';
import { SecondaryPicker } from './SecondaryPicker';

function App() {

  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');

  const [p1Faction, setP1Faction] = useState('');
  const [p2Faction, setP2Faction] = useState('');

  const [p1Secondaries, setP1Secondaries] = useState([]);
  const [p2Secondaries, setP2Secondaries] = useState([]);

  const [p1Score, setP1Score] = useState(Array(8).fill(0));
  const [p1Total, setP1Total] = useState(0);

  const [p2Score, setP2Score] = useState(Array(8).fill(0));
  const [p2Total, setP2Total] = useState(0);

  const updateScore = (score, index, event, scoreSetter, totalSetter) => {
    score[index] = event.target.valueAsNumber;
    scoreSetter(score);
    totalSetter(score.reduce((total, value) => total + value));
  }

  const updateP1Score = (index, event) => {
    updateScore(p1Score, index, event, setP1Score, setP1Total);
  }

  const updateP2Score = (index, event) => {
    updateScore(p2Score, index, event, setP2Score, setP2Total);
  }

  return (
    <div className="App">
      <h1>Scorehammer</h1>

      <div>
        <h2>Players</h2>

        <div className="playerSetup">
          <h3>Player 1</h3>
          <div className="formGroup">
            <label>Name</label>
            <input value={p1} onChange={e => setP1(e.target.value)} />
          </div>
          <div className="formGroup">
            <label>Faction</label>
            <FactionPicker handleChange={setP1Faction} />
          </div>
          <div className="formGroup">
            <label>Secondaries (pick 3)</label>
            <SecondaryPicker handleChange={x => { console.log(x); setP1Secondaries(x);}} />
          </div>
        </div>

        <div className="playerSetup">
          <h3>Player 2</h3>
          <div className="formGroup">
            <label>Name</label>
            <input value={p2} onChange={e => setP2(e.target.value)} />
          </div>
          <div className="formGroup">
            <label>Faction</label>
            <FactionPicker handleChange={setP2Faction} />
          </div>

          <div className="formGroup">
            <label>Secondaries (pick 3)</label>
            <SecondaryPicker handleChange={setP2Secondaries} />
          </div>
        </div>
      </div>

      <div>
        <h2>Score</h2>
        
        <h3>Primary</h3>
        <table>
          <thead>
            <tr>
              <th>Turn</th>
              <th>{p1} {p1Faction}</th>
              <th>{p2} {p2Faction}</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5).keys()].map((v, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><input type="number" step="5" onChange={e => updateP1Score(i, e)} /></td>
                  <td><input type="number" step="5" onChange={e => updateP2Score(i, e)} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        <h3>Secondary</h3>
        <div className="secondary">
          <div className="secondaryList">{p1Secondaries.map((s, i) => {
            return (
              <div>
                <div>{s}</div>
                <input type="number" onChange={e => updateP1Score(5 + i, e)} />
              </div>
            );
          })}
          </div>
          <div className="secondaryList">{p2Secondaries.map((s, i) => {
            return (
              <div>
                <div>{s}</div>
                <input type="number" onChange={e => updateP2Score(5 + i, e)} />
              </div>
            );
          })}
          </div>
        </div>
        
        <h3>Total</h3>
        <div className="scoreTotal">
          <div>{p1} {p1Faction}: {p1Total}</div>
          <div>{p2} {p2Faction}: {p2Total}</div>
        </div>

      </div>

      <div>
        <h2>Command Points</h2>
        <CommandPoints playerName={p1} />
        <CommandPoints playerName={p2} />
      </div>

    </div>
  );
}

export default App;
