import axios from 'axios';
const stripe = Stripe(
  'pk_test_51M093bDOcFbULpKWFLKYUWGcRhXBY3LCVtYInICvM0DAjN93GQstZOwwDNkC5PzzkY0gIbwj6JPTBbr4WcDiZuGF00aGboYgz1'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
