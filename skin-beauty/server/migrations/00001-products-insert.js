import { Migrations } from 'meteor/percolate:migrations';
import {Products} from '../../lib/collections/products'
Migrations.add({
    version: 1,
    up: function() {
        const products = JSON.parse(Assets.getText('../../private/seeds/products.json'));
        products.forEach((product) => {
            Products.insert(product);
            });
    }
  });