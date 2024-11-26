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
class PaymentMethodsMain {
    pay(paymentMethod: string){
        console.log(`Payment has been made via: ${paymentMethod}`)
    }
}

class Stripe extends PaymentMethodsMain{

    paymentMethod: string = "Stripe"

    pay(){
        super.pay(this.paymentMethod)
    }

    refund(){
        console.log(`Payment has been refund via: ${this.paymentMethod}`)
    }

}

class Authorize extends PaymentMethodsMain{

    paymentMethod: string = "Authorize"

    pay(){
        super.pay(this.paymentMethod)
    }

}

const stripe = new Stripe()
stripe.pay()
stripe.refund()

const authorize = new Authorize()
authorize.pay()
