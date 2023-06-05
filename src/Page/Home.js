import { useState } from "react";
import Multiverse from "./multiverse";
const Home = () => {

    
    const [name, setName] = useState('Oscar');
    const [array, setArray] = useState({
        firstName: 'Oscar',
        lastName: 'Aducal',
        age: 24,
    })

    const [multiArray, setMulti] = useState([
        { firstName: 'Oscar',
        lastName: 'Aducal',
        age: 24, 
        id: 1
    },
        { firstName: 'Mangagamit',
        lastName: 'Katalaga',
        age: 10,
        id:2
     },
        { firstName: 'ako nanaman',
        lastName: 'talaga!',
        age: 60,
        id:3
     }
    ]);

    const handleClick = () => {
        setName('Pogi');

        setArray({firstName: 'Martin', lastName: 'Santos', age: 21})

        setMulti([])
    }

    const handleClickAgain = (name, e) => {
        alert('hello'+ name, e.target);
    }

    const handleDelete = (id) => {
        const newThing = multiArray.filter(multi => multi.id !== id);
        setMulti(newThing);
    }
    return ( 
        <div className="home">
            <h2 className="bg-red-500 text-red-100">
                Homepage
            </h2>

            <h3>{ name }</h3>

            <ul>
                <li>{ array.firstName }</li>
                <li>{ array.lastName }</li>
                <li>{ array.age }</li>
            </ul>


            <Multiverse multi={multiArray} title="Multiverse of Madness" handleDel={handleDelete}/>

            <button onClick={ handleClick} className="float-left bg-blue-500 hover:bg-red-500 text-black font-bold py-2 px-4 rounded">click me</button>
            <button onClick={(e) =>  handleClickAgain('oscar', e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">click me agains</button>
        </div>
     );
}
 
export default Home;