const PassingEventtoFn = () => {
    return (  
        <button onClick={e => HandleEvent(e)} className="btn btn-warning"> Passing Event To Fn SFC </button>
    );
}

const HandleEvent = e => console.log(e);

export default PassingEventtoFn;