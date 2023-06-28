import React, { useState } from "react";
const CustForm = ({ user }) => {
    const [Quantity, setQuantity] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [BoxCount, setBoxCount] = useState(0);

    const onChangeQuantity = (event => {
        setQuantity(event.target.value);
        console.log(Quantity);
    })

    const onChangeWeight = (event => {
        setWeight(event.target.value);
        console.log(Weight);
    })

    const onChangeBoxCount = (event => {
        setBoxCount(event.target.value);
        console.log(BoxCount);
    })

    const onSubmit = () => {
        fetch("https://t2-2oil.onrender.com/order", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ID:user,
                Quantity:Quantity,
                Weight:Weight,
                BoxCount:BoxCount
            })
        })
        .then(res=>res.json)
        .then(data=>console.log(data));
    }

    return (

        <div class="pa4 measure center">
            
                <fieldset id="order-form" class="ba b--transparent ph0 mh0">


                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="order-date">Order Date</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="date" name="order-date" id="order-date" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="company">Company</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="company" id="company" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="owner">Owner</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="owner" id="owner" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="item">Item</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="item" id="item" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="quantity">Quantity</label>
                        <input onChange={onChangeQuantity} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="quantity" id="quantity" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="weight">Weight</label>
                        <input onChange={onChangeWeight} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" step="0.01" name="weight" id="weight" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="shipment-request">Request for Shipment</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="shipment-request" id="shipment-request" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="tracking-id">Tracking ID</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="tracking-id" id="tracking-id" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="shipment-size">Shipment Size (LxBxH)</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="shipment-size" id="shipment-size" />
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="box-count">Box Count</label>
                        <input onChange={onChangeBoxCount} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="box-count" id="box-count" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="specification">Specification</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="specification" id="specification" />
                    </div>

                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="checklist-quantity">Checklist Quantity</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="checklist-quantity" id="checklist-quantity" />
                    </div>

                    <div class="mt4">
                        <input onClick={onSubmit} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
                    </div>
                </fieldset>
            
        </div>
    );
}

export default CustForm;