class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Nav />
                <Form />
            </div>
        )
       
    }
}

const Header =()=>{
    return (
        <div className="bg-light mt-2 text-center">
            <h1 className="display-4"><span className="text-info ml-2">Todo List</span></h1>
        </div>
    )
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

const Form =()=>{
    return (
        
            <form>
                <div className="form-group">
                    <label htmlFor="input" className="lead text-light">Task</label>
                    <input type="text" className="form-control"   placeholder="Enter task" />
                    <button type="submit" className="btn btn-success btn-block mt-2">Submit</button>
                </div>
            </form>
       
    )
}
ReactDOM.render(<App />, document.getElementById("root"));