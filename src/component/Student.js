
function Student(props){    
    //console.log(props)
    return(        
        <>
            <div  style={{marginBottom: '50px'}}></div>
            <h1>Hello {props.name}</h1>
            
            {/* <h1>Email: {props.email}</h1>
            <h1>Address: {props.other.Address}</h1>
            <h1>Mob: {props.other.Mob}</h1> */}
        </>
    )
}
export default Student;