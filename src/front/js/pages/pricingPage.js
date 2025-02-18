import React from 'react';

export const PricingPage = () => {

  // Paste the stripe-pricing-table snippet in your React component
  return (
    <div className='container w-200 h-480'>

      <stripe-pricing-table pricing-table-id="prctbl_1Qs2YsKvz8mCsIiILrDmw5zi"
      publishable-key="pk_live_51Qs0L8Kvz8mCsIiIiR6qVuTOv8glHk4arblXoQ5ngPZ96J5naQGNFZRcPrasRVsY8CAdFzcw5Fa5Or5Rw03NrPts00gU6ymtq1">
     
      </stripe-pricing-table>
    </div>
   
  );
}

export default PricingPage;