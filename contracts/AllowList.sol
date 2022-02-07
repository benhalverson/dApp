//SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

contract AllowList {
  uint8 public MAX_ALLOWED_ADDRESSES = 10;
  uint8 public numAddressesAllowlisted;

  mapping(address => bool) public allowedAddresses;

  constructor(uint8 _numAddressesAllowlisted) {
    numAddressesAllowlisted = _numAddressesAllowlisted;
  }

  function addAddressToAllowlist() public {
    require(numAddressesAllowlisted < MAX_ALLOWED_ADDRESSES, "Max number of addresses allowlisted reached");
    require(!allowedAddresses[msg.sender], "Address already allowlisted");
    allowedAddresses[msg.sender] = true;
    numAddressesAllowlisted += 1;
  }
  
}