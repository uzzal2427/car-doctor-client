import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {
    const services = useLoaderData();
    const { title, description, price, img } = services
    const {user} = useContext(AuthContext)
    const handleOrderSubmit = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const price = from.price.value;
        const email = from.email.value;
        const date = from.name.value;
        const message = from.text.value

        const booking = {
            ClientName : name,
            price,email,date,message,img,title
        }

        console.log(booking);

        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <p className="text-orange-500 text-center font-bold text-3xl">Book your service for : {title} </p>
            <p>{description}</p>

            <div>
                <form onSubmit={handleOrderSubmit} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Cost of This Service" defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" defaultValue={user.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Your Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <textarea  className="border w-full" 
                        placeholder="Write Your Service Details"
                        name="text" cols="10" rows="10"></textarea>
                    </div>
                    <input className="btn btn-error" type="submit" value="Order" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;