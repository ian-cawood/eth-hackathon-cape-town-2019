pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

// import "openzeppelin-eth/contracts/ownership/Ownable.sol";
import "zos-lib/contracts/Initializable.sol";

contract Treasury is Initializable {
  struct School {
    address _address;
    string name;
  }

  struct Supplier {
    address _address;
    string name;
  }

  School[] public schools;
  Supplier[] public suppliers;
  mapping(address => uint) public supplierVote;

  event open_vote_event();

  function initialize(
    address[] memory schoolAddresses,
    string[] memory schoolNames,
    address[] memory supplierAddresses,
    string[] memory supplierNames
  ) public initializer {
    uint schoolLength = schoolAddresses.length;

    for (uint i=0; i<schoolLength; i++) {
      schools.push(School(schoolAddresses[i], schoolNames[i]));
    }

    uint supplierLength = supplierAddresses.length;

    for (uint i=0; i<supplierLength; i++) {
      suppliers.push(Supplier(supplierAddresses[i], supplierNames[i]));
    }
  }

  function openVote() public {
    uint supplierLength = suppliers.length;

    for (uint i=0; i<supplierLength; i++) {
      supplierVote[suppliers[i]._address] = 0;
    }

    emit open_vote_event();
  }

  //We'll upgrade the contract with this function after deploying it
  //Function to decrease the counter
  // function decreaseCounter(uint256 amount) public returns (bool) {
  //   require(count > amount, "Cannot be lower than 0");
  //   count = count - amount;
  //   return true;
  // }
}