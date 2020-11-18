import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {getStoreItemArray} from '../reducers'


import CartItem from './CartItem'

const Cart = () =>{
    const storeItems = useSelector(getStoreItemArray);
    let total= 0
    let numOfItems = 0
    const cartItemsList = storeItems.map((item) =>
            { let temp = item.price * item.quantity;
                if(isNaN(temp)){
                    total = 0
                } else { total += temp};
                 numOfItems += item.quantity;
            return <CartItem key={item.id} name={item.title} qty={item.quantity} id={item.id}/>
        }   
            );

    return(
        <Wrapper>
            <Header>
                 <Title>Your Cart</Title>
                 <p>{`${numOfItems} Items`}</p>
                 <p>{`Total: $${total}`}</p>
                 <PurchaseBtn><b>Purchase</b></PurchaseBtn>
            </Header>
            {cartItemsList}
        </Wrapper>
    )


}

const Header = styled.div`
    display: flex;
    flex-direction: column;
`;


const PurchaseBtn = styled.button`
    background: #ff406d;
    color: white;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
    border: none;
    font-size: 20px;
`;

const Wrapper = styled.div`
    background: #402043;
    color: whitesmoke;
    height: 100%;
`;

const Title = styled.h1`
    margin: 0px;
    padding-top: 30px;
    padding-left: 10px;
`;


export default Cart