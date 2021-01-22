import React from 'react'
import pizza1 from "../img/pizza1.png"
import pizza2 from "../img/pizza2.png"
import pizza3 from "../img/pizza3.png"
import pizza4 from "../img/pizza4.png"
import pizza5 from "../img/pizza5.png"
import pizza6 from "../img/pizza6.png"
const Prices = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza1} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                            Pizza Margeritta
                            </h1>
                            <p className="price__text">
                            Nullam nibh sem, imperdiet ultrices commodo a, 
                            vulputate vel ligula. 
                            Duis venenatis at eros sed egestas. 
                            Mauris rutrum quam risus, vel hendrerit dui tempor in
                            </p>
                            <p className="price__rs">Rs149</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza2} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                            Beer Pizza Crust
                            </h1>
                            <p className="price__text">
                            Nullam nibh sem, imperdiet ultrices commodo a, 
                            vulputate vel ligula. 
                            Duis venenatis at eros sed egestas. 
                            Mauris rutrum quam risus, vel hendrerit dui tempor in
                            </p>
                            <p className="price__rs">Rs249</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza3} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                            Pizza Biscuit Bake
                            </h1>
                            <p className="price__text">
                            Nullam nibh sem, imperdiet ultrices commodo a, 
                            vulputate vel ligula. 
                            Duis venenatis at eros sed egestas. 
                            Mauris rutrum quam risus, vel hendrerit dui tempor in
                            </p>
                            <p className="price__rs">Rs349</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza4} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                            Pizza Prosciutto
                            </h1>
                            <p className="price__text">
                            Nullam nibh sem, imperdiet ultrices commodo a, 
                            vulputate vel ligula. 
                            Duis venenatis at eros sed egestas. 
                            Mauris rutrum quam risus, vel hendrerit dui tempor in
                            </p>
                            <p className="price__rs">Rs449</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza5} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                            Crazy Crust Pizza
                            </h1>
                            <p className="price__text">
                            Nullam nibh sem, imperdiet ultrices commodo a, 
                            vulputate vel ligula. 
                            Duis venenatis at eros sed egestas. 
                            Mauris rutrum quam risus, vel hendrerit dui tempor in
                            </p>
                            <p className="price__rs">Rs349</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza6} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                            Low Carb Pizza
                            </h1>
                            <p className="price__text">
                            Nullam nibh sem, imperdiet ultrices commodo a, 
                            vulputate vel ligula. 
                            Duis venenatis at eros sed egestas. 
                            Mauris rutrum quam risus, vel hendrerit dui tempor in
                            </p>
                            <p className="price__rs">Rs149</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Prices
