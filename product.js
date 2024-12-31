import React from "react";
import Slider from "react-slick";
import "./Shop.css";
// import { Footer } from "../../Layout/Footer/footer";
import { Rating } from "@mui/material";
import Stack from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";

export const Productshop = () => {
    const [hovercart,sethovercart]= useState(null);
    const [cart,setcart] = useState([]);
    const handleaddtocart = (product) => {
        const existingitem = cart.find((item) => item.id===product.id);
        if(existingitem){
            setcart(
                cart.map((item)=> 
                    item.id===product.id
                    ?{...item,quantity:item.quantity+1}
                    :item
                )
            );
        }else{
            setcart([...cart,{...product,quantity:1}]);
        }
    }
    const handlequantitychange = (id, change) => {
        setcart(
            cart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + change }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const handleremovefromcart = (id) => {
        setcart(cart.filter((item) => item.id !== id));
    };
    const calculatetotal = () => {
        return cart.reduce(
            (total,item) => total+ parseInt(item.price.replace("₹",""))*item.quantity,
            0
        );
    }
    const handleplaceorder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items to place an order.");
            return;
        }

        alert(`Order placed successfully! Total Amount: ₹${calculatetotal()}`);
        
        setcart([]); // Clear the cart after placing the order
    };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        // slidesPerRow: 2,
        slidesToScroll: 3,
        rows: 1,
        arrows: true,

        customPaging: (i) => <button>{i + 1}</button>,
        appendDots: (dots) => (
            <div
                style={{
                    marginTop: "10px",
                    display: "flex",
                    // justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0px", padding: "0px", display: "flex" }}>{dots}</ul>
            </div>
        ),
    };
    const products = [
        {
            id: 1,
            imgsrc: "/Static/Images/whiteplant.jpg",
            name: "Syngonium Pixie White Plane",
            price: "₹279",
            description: "The Syngonium Pixie Plant is a captivating plant that exudes elegnce in its every detail. With its Petite heart shaped leaves, each delicately veined in silver, it adds a touch of enchantment to any space.",
        },
        {
            id: 2,
            imgsrc: "/Static/Images/pinkplant.jpg",
            name: "Syngonium Pink Plane",
            price: "₹249",
            description: "The Syngonium, with its arrow-shaped leaves and versatile growth habit, is a delightful houseplant that adds a touch of elegance to any indoor space. Known for its adantabilitu it's perfect for both novice and experienced",
        },
        {
            id: 3,
            imgsrc: "/Static/Images/zzplant.jpg",
            name: "Zamia Green - ZZ Plane",
            price: "₹379",
            description: "Tough, stylish, and virtually indestructible, the ZZ Plant is the ultimate low-maintenance plant for any space. Perfect for adding a touch of green to your home or office.",
        },
        {
            id: 4,
            imgsrc: "/Static/Images/spiderplant.jpg",
            name: "Spider Plant",
            price: "₹179",
            description: "The Spider Plant, known for its air-purifying abilities and easy-care nature, is a favorite among both novice and seasoned plant enthusiasts. Its arching leaves and spider- like plantlets bring a unique charm to anu space",
        },
        {
            id: 5,
            imgsrc: "/Static/Images/zamiagreen.jpg",
            name: "Zamia Plant",
            price: "₹379",
            description: "Tough, stylish, and virtually indestructible, the ZZ Plant is the ultimate low-maintenance plant for any space. Perfect for adding a touch of green to your home or office.",
        },
        {
            id: 6,
            imgsrc: "/Static/Images/jadeplant.jpg",
            name: "Jade Plant",
            price: "₹299",
            description: "Lucky Jade has a charming appearance and beneficial characteristics. This plant is a low-maintenance gem, perfect for bringing vibrant greenery.",
        },
        {
            id: 7,
            imgsrc: "/Static/Images/araliaplant.jpg",
            name: "Aralia Green Plant",
            price: "₹299",
            description: "Aralia plants, known for their intricate leaf patterns and diverse forms, bring a touch of the exotic to indoor gardens.",
        },
        {
            id: 8,
            imgsrc: "/Static/Images/brokenheart.jpg",
            name: "Philodendron Broken Heart Plant",
            price: "₹349",
            description: "The Philodendron, with its lush, heart-shaped leaves and vining growth habit, is a beloved houseplant that adds a touch of tropical charm to anu indoor enace.",
        },
        {
            id: 9,
            imgsrc: "/Static/Images/dieffenbachia.jpg",
            name: "Dieffenbachia Plant",
            price: "₹449",
            description: "The Dieffenbachia Plant can enhance the aesthetic and ambiance of your indoor space. They work as a pollutant absorber; and require minimal care and are easy to grow. This plant is a fantastic indoor air filter in addition to enhancing your home decor.",
        },
        {
            id: 10,
            imgsrc: "/Static/Images/paperomia.jpg",
            name: "Peperomia Green Plant",
            price: "₹319",
            description: "The Peperomia, with its compact size and variety of leaf shapes and colors, is a charming addition to any indoor space. Known for its low- maintenance nature",
        },
        {
            id: 11,
            imgsrc: "/Static/Images/whiteplant.jpg",
            name: "Syngonium Pixie White Plant",
            price: "₹279",
            description: "The Syngonium Pixie Plant is a captivating plant that exudes elegnce in its every detail. With its Petite heart shaped leaves, each delicately veined in silver, it adds a touch of enchantment to any space.",
        },
        {
            id: 12,
            imgsrc: "/Static/Images/pinkplant.jpg",
            name: "Syngonium Pink Plant",
            price: "₹249",
            description: "The Syngonium, with its arrow-shaped leaves and versatile growth habit, is a delightful houseplant that adds a touch of elegance to any indoor space. Known for its adantabilitu it's perfect for both novice and experienced",
        },
        {
            id: 13,
            imgsrc: "/Static/Images/zzplant.jpg",
            name: "Zamia Green - ZZ Plane",
            price: "₹379",
            description: "Tough, stylish, and virtually indestructible, the ZZ Plant is the ultimate low-maintenance plant for any space. Perfect for adding a touch of green to your home or office.",
        },
        {
            id: 14,
            imgsrc: "/Static/Images/spiderplant.jpg",
            name: "Spider Plant",
            price: "₹179",
            description: "The Spider Plant, known for its air-purifying abilities and easy-care nature, is a favorite among both novice and seasoned plant enthusiasts. Its arching leaves and spider- like plantlets bring a unique charm to anu space",
        },
        {
            id: 15,
            imgsrc: "/Static/Images/zamiagreen.jpg",
            name: "Zamia Plant",
            price: "₹379",
            description: "Tough, stylish, and virtually indestructible, the ZZ Plant is the ultimate low-maintenance plant for any space. Perfect for adding a touch of green to your home or office.",
        },

    ];
    return (<>
      
        <div className="product-slider-container" >
            <h1 className="shoph1">Shop Now</h1>
            {/* <div style={{
                            position: "relative",
                            fontSize: "18px",
                            marginLeft: "10px",
                            color: "white",
                            backgroundColor: "red",
                            // borderRadius: "50%",
                            padding: "2px",
                            textAlign:"center",
                            width:"20px",
                        }}>{cartorder}</div> */}
            <Slider {...settings} >               
                {products.map((product) => (
                    <div>
                        <div key={product.id} className="product-style" 
                        onMouseEnter={() => sethovercart(product.id)}
                        onMouseLeave={() => sethovercart(null)}
                        >
                            {
                                hovercart===product.id && (<figure style={{position:"absolute"}} >
                                <img src="\Static\Images\cart-shopping-solid.svg" alt="cart" title="Add to Cart" style={{
                                    // position: "absolute",
                                    width: "20px",
                                    height: "20px",
                                    margin:"0",
                                    // zIndex:"10",
                                    overflow:"visible",
                                }}
                                onClick={()=>handleaddtocart(product)}
                                />
                                
                                </figure>)
                            }
                            <figure>
                                <img src={product.imgsrc} />
                            </figure>
                            <h2>{product.name}</h2>
                            <status>
                                <Rating value={3} readOnly />
                            </status>
                            <h1>{product.price}</h1>
                            <p>{product.description}</p>
                            
                        </div>
                     </div>
                
                ))}
            </Slider>
        </div>

        <div className="cart-container" style={{ margin: "3%" }}>
                <h2 style={{fontSize:"50px"}}>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.imgsrc} alt={item.name} className="cart-img" />
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => handlequantitychange(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => handlequantitychange(item.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => handleremovefromcart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                         <div className="cart-summary">
                            <h3>Total Amount: ₹{calculatetotal()}</h3>
                            <button onClick={handleplaceorder} className="order-btn">
                                Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>
        <div style={{ margin: "3%" }}></div>
        </>
    );
}
