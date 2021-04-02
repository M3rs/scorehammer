import { FactionList } from './Data';

export const FactionPicker = (props) => {

    const groupedFactions = FactionList.reduce((r, a) => {
        r[a.cat] = [...r[a.cat] || [], a];
        return r;
    }, {});

    return (
        <select onChange={e => props.handleChange(e.target.value)}>
            <option disabled="disabled" selected="selected">-- Choose Faction --</option>
            {Object.keys(groupedFactions).map(x => {
              return (
                <optgroup label={x}>
                  {groupedFactions[x].map(y => {
                    return (<option>{y.name}</option>);
                  })}
                </optgroup>
              );
            })}
        </select>
    );
};