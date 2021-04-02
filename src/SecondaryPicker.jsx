import { SecondariesList } from './Data';

export const SecondaryPicker = (props) => {

    const groupedSecondaries = SecondariesList.reduce((r, a) => {
        r[a.cat] = [...r[a.cat] || [], a];
        return r;
    }, {})

    return (
        <select multiple onChange={e => props.handleChange(Array.from(e.target.selectedOptions, o => o.value))} >
            {Object.keys(groupedSecondaries).map(x => {
              return (
                <optgroup label={x}>
                  {groupedSecondaries[x].map(y => {
                    return (<option>{y.name}</option>);
                  })}
                </optgroup>
              );
            })}
        </select>

    );
};