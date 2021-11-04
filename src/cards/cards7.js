import Card from '@mui/material/Card';

function Cards7(){
const arr=[
    {
        description:"Baby Boy Rashie swimsuit with Sun Protection Boys",
        value: "2 Pieces (Min. Order)",
        img: "https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg",
        price: "$7.50 - $13.50",
    },
    {
        description:"Aluminium Alloy Garden Fence Panels Aluminium Swimming",
        value: "1.0 Sets(Min. Order)",
        img: "https://s.alicdn.com/@sc04/kf/Haa75ae67f08048b7ac6f8afc8941d09b1.jpg",
        price: "$12.00- $14.00",
    },
    {
        description:"Children's boxer swimming trunks baby sun protection",
        value: "1 Set(Min. Order)",
        img: "https://s.alicdn.com/@sc04/kf/H7b771568448c4b78bcbb99f5f7eaea1eE.jpg",
        price: "$4.50 - $5.10",
    },
    {
        description:"dropshipDrop Shipping Gold Plated BTC Limited Edition",
        value: "100 Pieces (Min. Order)",
        img: "https://s.alicdn.com/@sc04/kf/Hbe20edbaf6c440fc9263656f9f80ce77O.jpg",
        price: "$0.25 - $0.28",
    },    {
        description:"Cheap outdoor portable toilets mobile prefabricated ",
        value: "1 Piece (Min. Order)",
        img: "https://s.alicdn.com/@sc04/kf/H04b2904acda14c2a86a7fa86e96499e3H.jpg",
        price: "$2,800.00 - $3,000.00",
    },    {
        description:"Pet backpack portable Casual pet bag for pet custom",
        value: "3 Pieces (Min. Order)",
        img: "https://s.alicdn.com/@sc04/kf/H16685c466bf941cda95e11143c60e410L.jpg",
        price: "$19.66 - $26.99",
    },
        {
            description:"Baby Boy Rashie swimsuit with Sun Protection Boys",
            value: "2 Pieces (Min. Order)",
            img: "https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg",
            price: "$7.50 - $13.50",
        },
        {
            description:"Aluminium Alloy Garden Fence Panels Aluminium Swimming",
            value: "1.0 Sets(Min. Order)",
            img: "https://s.alicdn.com/@sc04/kf/Haa75ae67f08048b7ac6f8afc8941d09b1.jpg",
            price: "$12.00- $14.00",
        },
        {
            description:"Children's boxer swimming trunks baby sun protection",
            value: "1 Set(Min. Order)",
            img: "https://s.alicdn.com/@sc04/kf/H7b771568448c4b78bcbb99f5f7eaea1eE.jpg",
            price: "$4.50 - $5.10",
        },
        {
            description:"dropshipDrop Shipping Gold Plated BTC Limited Edition ",
            value: "100 Pieces (Min. Order)",
            img: "https://s.alicdn.com/@sc04/kf/Hbe20edbaf6c440fc9263656f9f80ce77O.jpg",
            price: "$0.25 - $0.28",
        },    {
            description:"Cheap outdoor portable toilets mobile prefabricated",
            value: "1 Piece (Min. Order)",
            img: "https://s.alicdn.com/@sc04/kf/H04b2904acda14c2a86a7fa86e96499e3H.jpg",
            price: "$2,800.00 - $3,000.00",
        },    {
            description:"Pet backpack portable Casual pet bag for pet custom",
            value: "3 Pieces (Min. Order)",
            img: "https://s.alicdn.com/@sc04/kf/H16685c466bf941cda95e11143c60e410L.jpg",
            price: "$19.66 - $26.99",
        },
]
    return(
        <div className="order">
            <div className="order2">
                <h4 className="orderh1">Just For You</h4>
                <div className="order3">
                    {arr.map((e,i)=>{
                        return(
                        <Card className="order4" key={i}>
                            <img className="size" src={e.img}/>
                            <p className="description">{e.description}</p>
                            <p className="price">{e.price}</p>
                            <p className="value">{e.value}</p>
                        </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cards7