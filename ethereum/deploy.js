const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');


const provider=new HDWalletProvider(
  'fatigue element mammal trust creek again warfare beauty honey horror federal also',
  'https://rinkeby.infura.io/v3/b85795bd2d5d4e56950cd3b7fd9422e1'
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts=await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0]);

    const result = await new web3.eth.Contract(
      JSON.parse(compiledFactory.interface)
    )
    .deploy({data:compiledFactory.bytecode})
    .send({gas:'1000000',from:accounts[0]});


  console.log('Contract deployed to',result.options.address);
};
deploy();
