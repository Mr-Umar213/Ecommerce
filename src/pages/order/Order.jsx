import React, { useContext } from "react"
import Layout from "../../compnent/layout/Layout"
import myContext from "../../context/data/myContext";

function Order(){
    const context = useContext(myContext);
    const {name,Class} = context;

    return(
    <Layout>Order
        <h1>Name: {name}</h1>
        <h1>Class no: {Class}</h1>
    </Layout>
    )
}

export default Order