import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { AllowList, AllowList__factory } from "../typechain";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("AllowList", () => {
  let allowList: AllowList;

  beforeEach(async () => {
    const signers = await ethers.getSigners();
    const allowListFactory = (await ethers.getContractFactory(
      "AllowList",
      signers[0]
    )) as AllowList__factory;
    allowList = await allowListFactory.deploy(1);
    await allowList.deployed();
  });

  describe("addAddressToAllowlist", async () => {
    it("should add an address to the allow list", async () => {
      expect(allowList.address).to.properAddress;
    });
  });
  
});
