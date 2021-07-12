import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
  //'0x42B8d832dE4D3a58edd6C679835891F05593892c'
  '0x759Cea5cC3Ec1376291DEe26537AE7910d6c47Dc'

);
export default instance;
