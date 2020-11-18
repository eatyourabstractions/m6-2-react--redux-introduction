import React from 'react';
import styled from 'styled-components';

import {useDispatch} from 'react-redux';
import {removeItem, updateQuantity} from '../actions';



const CartItem = ({name, qty, id}) =>{
    const dispatch = useDispatch()
    const validate = (id, ev) =>{
        console.log('my event')
        if(ev.target.value === ''){
           dispatch( updateQuantity(id, 0))
        } else {
            dispatch(updateQuantity(id,parseInt(ev.target.value) ))
        }
    }
    return(
        <Wrapper>
            <Header>
                <ItemName>{name}</ItemName>
                <QuitBtn onClick={() => dispatch(removeItem(id))}><b>X</b></QuitBtn>
            </Header>
            <Quantity>
                Quantity: <input 
                                size={3} 
                                style={{marginLeft: '10px'}} 
                                value={qty}
                                onChange={
                                    (ev) => { validate(id,ev)}}/>
            </Quantity>
        </Wrapper>
    )


}

const Wrapper = styled.div`
    border-style: dotted;
    margin: 10px;
    border-color: #c998cd;
    border-width: 2px;

`;

const QuitBtn = styled.button`
    margin-right: 10px;
    background: transparent;
    color: whitesmoke;
    border: 0px
    
`;

const ItemName = styled.h3`
        font-weight: 900px;
        color: whitesmoke;
        margin-left: 10px;
        padding: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
`;
const Header = styled.p`
    display: flex;
    justify-content: space-between;
`;

const Quantity = styled.div`
    background: #311934;
    padding: 15px;
    
`;


export default CartItem;