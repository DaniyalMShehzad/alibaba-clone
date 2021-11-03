import Card from '@mui/material/Card';

function Cards3(){
    const arr=[
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
    ]
        const arr2 =[
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
        {
            name: "Premium OEM Factories",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H5fd2a2bb634d4ef9acff0a450f3a1caeX.jpg_220x220.jpg",
        },
    ]
    return(
        <div className="map">
            <h4 className="h3">CONSUMER ELECTRONICS</h4>
            <div className="map2">
            <div className="mapimg">
                <img src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"/>
            </div>
            <div className="map5">
            {arr.map((e,i)=>{
                return(
                    <Card key={i} className="map3 child">
                       <h4 className="mapchild">{e.name}</h4>
                        <p className="mapchild2">{e.description}</p>
                        <img className="mapchild3" src={e.img}/>
                    </Card>
                )
            })} 
            {arr2.map((e,i)=>{
                return(
                    <Card key={i} className="map3 child">
                       <h4 className="mapchild">{e.name}</h4>
                        <p className="mapchild2">{e.description}</p>
                        <img className="mapchild3" src={e.img}/>
                    </Card>
                )
            })} 
            </div>
            </div>
        </div>
    )
}
export default Cards3