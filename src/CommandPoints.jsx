
import { useState } from 'react';

export const CommandPoints = (props) => {

    const [commandPoints, setCommandPoints] = useState(12);

    return  (
        <div>
            <div>{props.playerName}</div>
            <input 
                value={commandPoints} 
                onChange={e => setCommandPoints(e.target.value)} 
                type="number"
            />
        </div>
    );
}