class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
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
ReactDOM.render(<App />, document.getElementById("root"));