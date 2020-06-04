pragma solidity ^0.6.9;


interface IERC223Receiver {
  function tokenFallback(address, uint256, bytes calldata) external;
}
