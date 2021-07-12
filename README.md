Campaign Contract
===================

A new way of funding a project or venture by raising small amounts of
money from a large number of people via ethereum blockchain technology
without any middleman to function or to manage a user’s information.

Screen-shot
-----------

### Home Page
![Home
Page](https://drive.google.com/uc?export=view&id=1_uepSKJ43kZ2hiW7OUYZMPn9nX3EbhRj)

### Campaigns Dashboard

![Campaigns
Dashboard](https://drive.google.com/uc?export=view&id=1RbM93-LrsbgpSObkTa5kp09OBDzH1Qxf)

### Campaigns Request

![Campaigns
Request](https://drive.google.com/uc?export=view&id=1uU5qLDy6GXbEjedySqx6AJCxw9Ro57MC)




### Prerequisite
1.  Install **Metamask** as Google Chrome Extension and Create an
    account.
2.  Request Ether by sharing your ethereum address in social media
    <br>(`https://faucet.rinkeby.io/)`
3.  Get 0.01 ether free by giving the ethereum address
    <br>`(http://rinkeby-faucet.com/)`
4.  Create an account in [https://infura.io](https://infura.io/)
5.  Create .env file in Ethereum directory and add these line to it.

    > mnemonic = 'Your mnemonic code' <br> link = 'Your infura end point
    > link '

6.  Deploy Contract by going into Ethereum Directory and run. \> node
    deploy.js

    Copy the contract deploy address and replace it in factory.js file.

7.  Replace your "infura end point link" in web3.js file
### `Dependencies Used`

  |Name                      | Version        | Description                                                                                                                |
  |:------------------------:|:--------------:|:--------------------------------------------------------------------------------------------------------------------------:|
  |node                      | 10.x.x         |It's used for back-end API services,                                                                 |
  |npm                       | 6.x.x          |It is the package manager for the Node JavaScript platform.                                                                |
  |solc                      | 0.4.26         |Programming language to write smart contracts                                                                               |    
  |ganache-cli               |  6.5.1         |  Local Ethereum Test Network                                                                                               |
  |mocha                     |  6.2.0         |  JavaScript test framework                                                                                                 |
  |truffle-hdwallet-provider |  1.0.16        |  The **Truffle HDWallet provider** is a convenient and easy to configure network connection to ethereum through infura.io  |
  |web3                      |  1.0.0-beta.55 |  Ethereum JavaScript API which connects to the Generic JSON RPC spec.                                                      |
  |dotenv                    |  8.0.0         |  Loads environment variables from a `.env` file into `process.env`                                                         |
  |fs-extra                  |  8.1.0         |  file system methods that aren't included in the native fs                                                                 |
  |next                      |  9.0.3         |  JavaScript framework to build server-side rendering and static web application using React                                |
  |react                     |  16.9.0        | JavaScript library for creating user interfaces                                                                            |
  |react-dom                 |  16.9.0        | DOM specific methods that can be used on React application                                                                 |
  |semantic-ui-react         |  0.87.3        |  react component kit provides pre define react component                                                                   |
  |semantic-ui-css           |  2.4.1         |  react component kit provides theme to react component as CSS                                                              |
  |next-routes               |  1.4.2         |  Dynamic Routes for Next.js                                                                                                |


### `Steps`

-   **To install dependencies** \> npm install
-   **To Compile the Contract** \> node compile.js
-   **To test the Contract** \> npm run test
-   **To deploy the Contract** \> node deploy.js
-   **To run the application** \> npm run dev
