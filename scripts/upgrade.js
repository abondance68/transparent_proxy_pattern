
const { ethers ,upgrades }  = require("hardhat");

async function upgrade() {
  

    // We get the contract to deploy: 
  const BoxV2  = await ethers.getContractFactory("BoxV2");
  let box = await upgrades.upgradeProxy("0xbEBdb045ce31812EF66a403944DcBD1643b11fbA", BoxV2) 

  console.log(`----Your upgraded proxy is done----${box.address} `)
  


 }
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
upgrade().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
