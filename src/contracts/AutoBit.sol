pragma solidity 0.5.16;

contract AutoBit{
	string name;
	

	constructor() public {
		name = "AutoBit";
	}

	function getName() external view returns(string memory) {
		return name;
	}
}