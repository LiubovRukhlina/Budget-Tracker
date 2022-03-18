import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { totalExpenses, budget } = useContext(AppContext);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: €{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
