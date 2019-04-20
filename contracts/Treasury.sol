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

  function openSupplierVote(uint _endTimeStamp) public {
    uint supplierLength = suppliers.length;

    for (uint i=0; i<supplierLength; i++) {
      supplierVote[suppliers[i]._address] = 0;
    }

    supplierVoteEndTimeStamp = _endTimeStamp;

    emit open_supplier_vote_event();
  }

  function voteForSupplier(address _supplierAddress) public {
    // require(now < supplierVoteEndTimeStamp, "Voting has ended.");
    supplierVote[_supplierAddress] ++;
  }
}