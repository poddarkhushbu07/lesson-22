import StripeCheckout from "react-stripe-checkout";
import React from 'react';

const StripeButtonComponent = ({price}) => {
    const onToken = (token) => {
        console.log(token);
        alert(('success'))
    }
    const priceofStripe = price * 100
    const publishKey = "pk_test_51Jc2WSSDGYnAVXYtGqTjtnPETdD13dFPM7de5CqVJ95avwGSMGAKs6mF82KPgPywsohtTytDNDCz6FPqscbsFtSW00HZShhEvY"
    return (
        <StripeCheckout token={onToken} stripeKey={publishKey} label={'Pay now'} name="ZTM demo" billingAddress shippingAddress
                        amount={priceofStripe}
        />)
}
export default StripeButtonComponent
