import React from 'react';

const NavBar = () => {
    return (
        <div className='flex justify-between'>
            <div>
                Available Players
            </div>
            <div className=' gap-2'>
                <button>Available</button>
                <button>Selected</button>
            </div>
        </div>
    );
};

export default NavBar;
