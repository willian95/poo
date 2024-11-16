//Wrong way
class PaymentMethodsMain {
  pay() {
    console.log('Payment has been made');
  }

  refund(){
    console.log('Payment has been refunded');
  }
}

class Stripe extends PaymentMethodsMain {
  pay(){
    console.log('Payment has been made via Stripe');
  }

  refund(){
    console.log('Payment has been refunded via Stripe');
  }
}

//Authorize no posee un método refund, por lo que no debería heredar de PaymentMethods
class Authorize extends PaymentMethodsMain {
    pay(){
      console.log('Payment has been made via Authorize');
    }
  
    refund(){
      console.log('Error. No method implemented');
    }
  }

//Right way
abstract class LiskovPayMethod{
  abstract pay(): void;
}

abstract class LiskovPayRefundMethod extends LiskovPayMethod{
  abstract refund(): void;
}

class StripeLiskov extends LiskovPayRefundMethod{
  refund(): void {
    console.log("Payment has been refunded via Stripe");
  }
  pay(){
    console.log('Payment has been made via Stripe');
  }
}

class AuthorizeLiskov extends LiskovPayMethod{
  pay(){
    console.log('Payment has been made via Authorize');
  }
}

const stripeLiskov = new StripeLiskov();
stripeLiskov.pay();
stripeLiskov.refund();

console.log("==============")

const authorizeLiskov = new AuthorizeLiskov();
authorizeLiskov.pay();