import React, { useState } from "react";

const ContactList = () => {
  const foodList = [
    {
      title: "vadapav",
      price: "12 RS",
      img: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?b=1&s=612x612&w=0&k=20&c=u9pskaH2ULBH3zVKZSR4NxVTfoWVzN93tljOBqooFIc=",
      cat: "breakfast",
    },
    {
      title: "samosa",
      price: "20 RS",
      img: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
      cat: "breakfast",
    },
    {
      title: "Chicken Biryani",
      price: "120 RS",
      img: "https://images.pexels.com/photos/22435655/pexels-photo-22435655/free-photo-of-top-view-of-biryani-food.jpeg?auto=compress&cs=tinysrgb&w=600",
      cat: "lunch",
    },
    {
      title: "Chhole Bhature",
      price: "120 RS",
      img: "https://media.istockphoto.com/id/1446439743/photo/chole-bhature-or-chick-pea-curry.jpg?b=1&s=612x612&w=0&k=20&c=2ENe9TCP396fLmJgtvwDwVd38okpuF8sC7-NTCfh-SY=",
      cat: "dinner",
    },
    {
      title: "Paneer",
      price: "100 RS",
      img: "https://images.pexels.com/photos/10905933/pexels-photo-10905933.jpeg?auto=compress&cs=tinysrgb&w=600",
      cat: "lunch",
    },
    {
      title: "Khichadi",
      price: "80 RS",
      img: "https://media.istockphoto.com/id/1202743802/photo/famous-indian-food-khichdi-is-ready-to-serve.jpg?b=1&s=612x612&w=0&k=20&c=9TaDLQB3E8ArAE3-LAaxtEL4dGMGFTbqgY0sz_PeNq0=",
      cat: "lunch",
    },
    {
      title: "Maggie",
      price: "20 RS",
      img: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600",
      cat: "timepas",
    },
    {
      title: "french fries",
      price: "80 RS",
      img: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
      cat: "timepas",
    },
  ];
  const [menu,setMenu]=useState(foodList)
  const filterItems=(cat)=>{
     const items=foodList.filter((menu)=>{
              return menu.cat==cat

     })
    return setMenu(items)
  }
  return (
    <>
      <div className="container-fluid w-100 bg-dark p-5 ">
        <div className="row ">
          <div className="col-12 d-flex justify-content-end flex-md-row flex-sm-column flex-wrap">
        
            <button className="btn btn-warning text-uppercase m-3" onClick={()=>{filterItems("breakfast")}}>Breakfast</button>
            <button className="btn btn-warning text-uppercase m-3" onClick={()=>{filterItems("lunch")}}>Lunch</button>
            <button className="btn btn-warning text-uppercase m-3" onClick={()=>{filterItems("timepass")}}>timepass</button>
            <button className="btn btn-warning text-uppercase m-3" onClick={()=>{filterItems("dinner")}}>Dinner</button>
            <button className="btn btn-warning text-uppercase m-3" onClick={()=>{setMenu(foodList)}}>All</button>
        
          </div>

        </div>
        
      </div>
      <div className="container">
      <div className="row d-flex justify-content-between">
                 {
                    menu.length>0 ? menu.map((item)=>{
                        return <div className="col-md-6 mt-2">
                          <div className="card mt-2 h-100 ">
                        <div className="card-body">
                            <div className="row d-flex align-items-center justify-content-evenly">
                             <div className="col-md-4">
                                 <img src={item.img} alt="" className="card-img-top" />
                             </div>
                             <div className="col-md-7">
                                 <ul className="list-group">
                                     <li className="list-group-item list-item-action"><span className="fw-bold me-2">TITLE</span><span className="fw-bold fst-italic">{item.title}</span></li>
                                     <li className="list-group-item list-item-action"><span className="fw-bold me-2">PRICE</span><span className="fw-bold fst-italic">{item.price}</span></li>
                                     <li className="list-group-item list-item-action"><span className="fw-bold me-2">CAT  </span><span className="fw-bold fst-italic">{item.cat}  </span></li>
                                 </ul>
                             </div>
                             </div>
                        </div>
                    </div>
                        </div>

                    }):(<h1 className="text-secondary text-center mt-5">Item is not available</h1>)
                 }
             </div>
      </div>
    </>
  );
};

export default ContactList;
