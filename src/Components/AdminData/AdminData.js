import React from "react";
import { useState,useEffect } from "react";

const AdminData = ({adminData}) => {
    
    
    return (
        <div class="pa4">
            <table class="collapse ba b--black-20 ma0">
                <thead>
                    <tr>
                        <th class="pv2 ph3 tc bg-black white">Item/Coustomer</th>
                        <th class="pv2 ph3 tc bg-black white">Coustomer 1</th>
                        <th class="pv2 ph3 tc bg-black white">Coustomer 2</th>
                        <th class="pv2 ph3 tc bg-black white">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="pv2 ph3 tc">Quantity</td>
                        <td class="pv2 ph3 tc">{adminData[1].quantity}</td>
                        <td class="pv2 ph3 tc">{adminData[0].quantity}</td>
                        <td class="pv2 ph3 tc">{Number(adminData[0].quantity)+Number(adminData[1].quantity)}</td>
                    </tr>
                    <tr>
                        <td class="pv2 ph3 tc">Weight</td>
                        <td class="pv2 ph3 tc">{adminData[1].weight}</td>
                        <td class="pv2 ph3 tc">{adminData[0].weight}</td>
                        <td class="pv2 ph3 tc">{Number(adminData[1].weight)+Number(adminData[0].weight)}</td>
                    </tr>
                    <tr>
                        <td class="pv2 ph3 tc">Box Count</td>
                        <td class="pv2 ph3 tc">{adminData[1].boxcount}</td>
                        <td class="pv2 ph3 tc">{adminData[0].boxcount}</td>
                        <td class="pv2 ph3 tc">{Number(adminData[1].boxcount)+Number(adminData[0].boxcount)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminData;