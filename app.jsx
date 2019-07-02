class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Nav />
            </div>
        )
       
    }
}

const Nav =()=>{
    return (
        <div className= "nav justify-content-center nav-text">
            <a href ="" className="nav-link text-reset">Home</a>
            <a href ="" className="nav-link text-reset">Products</a>
            <a href ="" className="nav-link text-reset">Services</a>
            <a href ="" className="nav-link text-reset">About us</a>
        </div>
    )
}

const Header =()=>{
    return (
        <div className="bg-light mt-2 text-center">
            <h1 className="display-4"><span className="text-info ml-2">Todo List</span></h1>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));