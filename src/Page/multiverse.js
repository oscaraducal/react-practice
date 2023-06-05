const Multiverse = ({multi, title, handleDel}) => {
    // const multiArray = props.multi
    // const title = props.title
    return (  
        <div className="mt-5 mb-5">
            <h1 className="font-bold">{ title }</h1>
        {multi.map((item1) => (
            <div className="testing yarn" key={item1.id}>
                <hr />
                <h2 className="font-bold">{item1.firstName}</h2>
                <h3>{item1.lastName}</h3>
                <h4>{item1.age}</h4>
                <button onClick={() => handleDel(item1.id)}>tanggalin mo ko gesi</button>
                <hr />
            </div>
        ))}
    </div>
    );
}
 
export default Multiverse;