import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("AllowList");
  const contract = await factory.deploy(10);

  console.log(
    `The address the Contract WILL have once mined: ${contract.address}`
  );
  console.log(
    `The transaction that was sent to the network to deploy the Contract: ${contract.deployTransaction.hash}`
  );

  await contract.deployed();
  console.log("Mined!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
