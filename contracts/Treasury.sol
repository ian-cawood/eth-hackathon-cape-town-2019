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
  
  uint public supplierVoteEndTimeStamp;

  event open_supplier_vote_event();

  function initialize(
    address[] memory schoolAddresses,
    string[] memory schoolNames,
    address[] memory supplierAddresses,
    string[] memory supplierNames,
    uint _percentageThreshold
  ) public initializer {
    require(_percentageThreshold <= 100 && _percentageThreshold >= 0, 'Percentage must be between 0 and 100(inclusive)');
    uint schoolLength = schoolAddresses.length;
    percentageThreshold = _percentageThreshold;

    for (uint i=0; i<schoolLength; i++) {
      schools.push(School(schoolAddresses[i], schoolNames[i]));
    }

    uint supplierLength = supplierAddresses.length;

    for (uint i=0; i<supplierLength; i++) {
      suppliers.push(Supplier(supplierAddresses[i], supplierNames[i]));
    }
  }

  function openSupplierVote(uint _endTimeStamp) public {
    uint supplierLength = suppliers.length;

    for (uint i=0; i<supplierLength; i++) {
      supplierVote[suppliers[i]._address] = 0;
    }

    supplierVoteEndTimeStamp = _endTimeStamp;

    emit open_supplier_vote_event();
  }

  function voteForSupplier(address _supplierAddress) public {
    require(schoolSupplierVoted[msg.sender] == false, 'Already voted');
    require(now > supplierVoteEndTimeStamp, 'Voting has ended.');

    supplierVote[_supplierAddress] ++;
    schoolSupplierVoted[msg.sender] = true;
  }

  function calculateChosenSupplier() public returns (Supplier memory) {
    require(now < supplierVoteEndTimeStamp, 'Voting has not ended.');

    uint supplierLength = suppliers.length;
    uint max = 0;
    uint winner = 0;

    for (uint i; i < supplierLength; i++) {
      if (supplierVote[suppliers[i]._address] > max) {
        winner = i;
        max = supplierVote[suppliers[i]._address];
      }
    }

    chosenSupplier = suppliers[winner];

    return chosenSupplier;
  }

  function getChosenSupplier() public view returns (Supplier memory) {
    return chosenSupplier;
  }

  mapping(address => bool) private schoolSupplierVoted;
  uint private percentageThreshold;
  Supplier public chosenSupplier;
  uint public totalAmountDelivered;
  uint public totalAmountExpected;
  mapping(address => bool) private schoolDeliveredVoted;

  function voteOnDelivered(uint amountDelivered, uint amountExpected) public {
    require(amountDelivered >= amountExpected, 'Amount delivered cannot be more than expected');
    require(schoolDeliveredVoted[msg.sender] == false, 'Already voted');

    schoolDeliveredVoted[msg.sender] = true;
    totalAmountDelivered = totalAmountDelivered + amountDelivered;
    totalAmountExpected = totalAmountExpected + amountExpected;
  }
}