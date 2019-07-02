class App extends React.Component{
    state = {
        myTasks : ["task-1","task-2","task-3" ]
    }
    render(){
        return(
            <div className="container">
                <Header />
                <Nav />
                <Form title ="Task todo" />
                
                {this.state.myTasks.map(task => (<Task  /> ))}
                
                
                
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

const Form =(props)=>{
    return (
        
            <form>
                <div className="form-group">
                    <label htmlFor="input" className="lead text-light">{props.title}</label>
                    <input type="text" className="form-control"   placeholder="Enter task" />
                    <button type="submit" className="btn btn-success btn-block mt-2">Submit</button>
                </div>
            </form>
       
    )
}
const Task =()=>{
    return (
        
            
                <div className="form-group">
                    <li class="list-group-item">
                        Task
                        <button type="submit" className="btn btn-sm btn-danger float-right">x</button>
                    </li>
                            
                </div>
            
       
    )
}
ReactDOM.render(<App />, document.getElementById("root"));