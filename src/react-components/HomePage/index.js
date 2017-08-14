import React from 'react';
import ProductList from '../Product/ProductList';
import Firebase from 'firebase';

class HomePage extends React.Component{
  constructor() {
    super();
    this.state = {
      productList: []
    }
    var DB_PARAM = require("../env/conf");
    var config = {
      //apiKey: API_KEY,
      //authDomain: process.env.AUTH_DOMAIN,
      //databaseURL: process.env.DB_URL,
      //projectId: process.env.PJ_ID,
      //storageBucket: process.env.SB,
      //messagingSenderId: process.env.MSD
      apiKey: DB_PARAM.API_KEY,
      authDomain: DB_PARAM.AUTH_DOMAIN,
      databaseURL: DB_PARAM.DB_URL,
      projectId: DB_PARAM.PJ_ID,
      storageBucket: DB_PARAM.SB,
      messagingSenderId: DB_PARAM.MSID
    };

    Firebase.initializeApp(config);

    Firebase.database().ref('products').on('value', (snapshot) => {
      var products = snapshot.val();

      this.setState({
        productList: products
      })
    });
  }
  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
