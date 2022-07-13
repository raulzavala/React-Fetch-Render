function App() {
  const [img, setImg] = React.useState();
  const { Button } = ReactBootstrap;

  const getImg = () =>
  {
    axios.get("https://api.thecatapi.com/v1/images/search")
    .then((response)=>{
        setImg(response.data[0].url);
    })
  }
  
  React.useEffect(()=>getImg(), []);

  return(
    <div>
        <img src={img}/>
        <div> <Button className="button" onClick={getImg}>
          Show me the next cat..
        </Button>
        </div>
    </div>
  )
}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
