// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

//  export default function Pay() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     if (!stripe || !elements) {
//       return;
//     }
  
//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });
  
//     if (result.error) {
//       console.error(result.error.message);
//     } else {
//       // Payment successful
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// }
