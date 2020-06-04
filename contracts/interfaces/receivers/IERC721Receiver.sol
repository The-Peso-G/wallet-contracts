pragma solidity ^0.6.9;


interface IERC721Receiver {
  function onERC721Received(address, address, uint256, bytes calldata) external returns (bytes4);
}
