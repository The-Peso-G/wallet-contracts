pragma solidity ^0.6.9;
import "./Wallet.sol";


contract Factory {
  function deploy(address _mainModule, bytes32 _salt) public payable returns (address _contract) {
    bytes memory code = abi.encodePacked(Wallet.creationCode, uint256(_mainModule));
    assembly { _contract := create2(callvalue(), add(code, 32), mload(code), _salt) }
  }
}
