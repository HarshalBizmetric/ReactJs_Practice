let CurrentTime = () =>{
    
    let time = new Date();

    return <p className="fs-3 lead">This is the current time: {time.toLocaleTimeString()} - {" "}{time.toDateString()}
    </p>
}

export default CurrentTime