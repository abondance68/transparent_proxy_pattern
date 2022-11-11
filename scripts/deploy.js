
const { ethers ,upgrades }  = require("hardhat");

async function deploy() {
  

    // We get the contract to deploy: 
  const Box  = await ethers.getContractFactory("Box");
  console.log("----Deploying the proxy contract , the box implementation contract  and  the  proxy admin contract ----")
  const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: 'store'})


  await boxProxy.deployed();

  console.log(`The contract BoxProxy is deployed to address  "${boxProxy.address}" `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
