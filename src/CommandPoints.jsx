
import { useState } from 'react';

export const CommandPoints = (props) => {

    const [commandPoints, setCommandPoints] = useState(12);

    return  (
        <div>
            <label>{props.playerName}</label>
            <div className="commandDisplay">{commandPoints}</div>
            {/* <input 
                value={commandPoints} 
                onChange={e => setCommandPoints(e.target.value)} 
                type="number"
            /> */}
            <div className="buttons">
                <button class="addBtn" onClick={e => setCommandPoints(c => c + 1)}>+</button>
                <button class="subBtn" onClick={e => setCommandPoints(c => c - 1)}>-</button>
            </div>
        </div>
    );
}