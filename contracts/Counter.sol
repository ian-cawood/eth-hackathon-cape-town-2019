pragma solidity ^0.5.0;

// import "openzeppelin-eth/contracts/ownership/Ownable.sol";
import "zos-lib/contracts/Initializable.sol";

contract Counter is Initializable {
  //it keeps a count to demonstrate stage changes
  uint private count;
  address private _owner;

  function initialize(uint num) public initializer {
    _owner = msg.sender;
    count = num;
  }

  function owner() public view returns (address) {
    return _owner;
  }

  // getter
  function getCounter() public view returns (uint) {
    return count;
  }

  //and it can add to a count
  function increaseCounter(uint256 amount) public {
    count = count + amount;
  }
}
