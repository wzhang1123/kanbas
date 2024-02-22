let LoggedIn = true;

function TernaryOperator()  {
    return (
        <div>
            <h2>Logged In</h2>
            { LoggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>
    )
}

export default TernaryOperator