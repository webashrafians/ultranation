import React from 'react';

const Selectcountry = (props) => {
    
    const selectcountry = props.selectcountry;
    // let totalPopulation = 0;
    // for (let i = 0; i < selectcountry.length; i++) {
    //     const country = selectcountry[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = selectcountry.reduce( (sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>This is Selected Country: {selectcountry.length}</h2>
            <p>total population: {totalPopulation}</p>
        </div>
    );
};

export default Selectcountry;