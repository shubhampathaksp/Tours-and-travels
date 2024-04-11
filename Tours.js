import Card from "./Card";

function Tours(props){
    const tours = props.tours;
    const removeTour = props.removeTour;

    return(
        <div className="container">
            <div>
            <h2 className="title">Plan With Shubham</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour} />
                    })
                }
            </div>
        </div>
    );
}
export default Tours;