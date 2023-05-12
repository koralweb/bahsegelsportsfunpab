import {makeObservable, action, observable} from 'mobx';

class CartBahsegel {
  products = [];

  addProductToCartBahsegel(pr) {
    this.products.push(pr);
  }

  removeProductFromCartBahsegel(pr) {
    this.products = [...this.products].filter(
      product => product.name !== pr.name,
    );
  }

  resetBahsegel() {
    this.products = [];
  }

  constructor(products) {
    makeObservable(this, {
      products: observable,
      addProductToCartBahsegel: action,
      removeProductFromCartBahsegel: action,
      resetBahsegel: action,
    });
  }
}

const cartBahsegel = new CartBahsegel();

export default cartBahsegel;
