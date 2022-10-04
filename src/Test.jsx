import React, { useState, useEffect } from "react";
import {allData} from './DummyData'
import CartRow from './CartRow';
import CartList from './CartList';
import CartListPage from './CartListPage';

// Test component
function Test() {

  return (
    <div>
        <CartListPage products={allData} cart={{1:3, 4:2, 7:1}} />
    </div>
  )
}

export default Test;

