pragma solidity 0.5.16;

contract DappToken{
	string name = "AutoBit";
	

	constructor() public {
	}

	function getName() external view returns(string memory) {
		string memory return_value = name;
		return return_value;
	}
}