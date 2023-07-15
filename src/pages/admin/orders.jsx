import { useEffect, useState } from "react"
import "./style.css"
export default function Orders() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:4000/orders", requestOptions)
            .then(response => response.json())
            .then(result => setOrders(result))
            .catch(error => console.log('error', error));
    }, [])

    // [
    //     {
    //         "id": 1,
    //         "Name": null,
    //         "Phonenumber": null,
    //         "Pincode": null,
    //         "City_State": null,
    //         "dateTime": "2023-07-15T15:46:17.000Z",
    //         "Address": null,
    //         "message": null,
    //         "paymentMethod": null,
    //         "status": "Pending",
    //         "createdAt": "2023-07-15T15:46:17.000Z",
    //         "updatedAt": "2023-07-15T15:46:17.000Z",
    //         "Carts": []
    //     },
    //     {
    //         "id": 2,
    //         "Name": "Vipin",
    //         "Phonenumber": 5,
    //         "Pincode": 55555,
    //         "City_State": "K",
    //         "dateTime": "2023-07-15T15:46:17.000Z",
    //         "Address": "fasd",
    //         "message": "fsd",
    //         "paymentMethod": "cash",
    //         "status": "Placed",
    //         "createdAt": "2023-07-15T15:46:17.000Z",
    //         "updatedAt": "2023-07-15T15:47:14.000Z",
    //         "Carts": [
    //             {
    //                 "id": 2,
    //                 "quantity": 2,
    //                 "price": 5,
    //                 "createdAt": "2023-07-15T15:46:20.000Z",
    //                 "updatedAt": "2023-07-15T15:46:36.000Z",
    //                 "MenuId": 1,
    //                 "OrderId": 2,
    //                 "Menu": {
    //                     "id": 1,
    //                     "name": "Classic Mojito",
    //                     "foodType": "Appetizer",
    //                     "price": 5,
    //                     "image": "https://www.liquor.com/thmb/MJRVqf-itJGY90nwUOYGXnyG-HA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-720x720-primary-6a57f80e200c412e9a77a1687f312ff7.jpg",
    //                     "createdAt": "2023-07-15T15:43:24.000Z",
    //                     "updatedAt": "2023-07-15T15:43:24.000Z"
    //                 }
    //             }
    //         ]
    //     }
    // ]
    return <div className="content">
        <h1>Orders</h1>
        <table>
            <tr>
                <th>Order Id</th>
                <th>Name: </th>
                    <th>Address</th>
                    <th>Payment Method </th>
                    <th>Status </th>
                    <th> Items </th>
                    <th>Total</th>
            </tr>
            {
            orders.map(order => {
                
                return <tr>
                    <td> {order.id}</td>
                    <td>  {order.Name}</td>
                    <td>   {order.Address}</td>
                    <td>  {order.paymentMethod}</td>
                    <td>  {order.status}</td> 
                    <td>{
                        order.Carts.map(item => {
                            return  <>{item.Menu.name} {item.Menu.price} ({item.quantity}) <br/></> 
                        })
                    }</td> 
                    <td> ${order.Carts.reduce((t, i) => {
                      return   i.quantity * i.price + t
                    }, 0)}</td> 
                </tr>
            })
        }</table>

    </div>
}