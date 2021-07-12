Campaign Contract
===================

A new way of funding a project or venture by raising small amounts of
money from a large number of people via ethereum blockchain technology
without any middleman to function or to manage a user’s information.

Screen-shot
-----------

### Home Page





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



### `Steps`

-   **To install dependencies** \> npm install
-   **To Compile the Contract** \> node compile.js
-   **To test the Contract** \> npm run test
-   **To deploy the Contract** \> node deploy.js
-   **To run the application** \> npm run dev
