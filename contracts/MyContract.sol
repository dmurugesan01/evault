pragma solidity ^0.8.0;

contract MyContract {
    string[] public documents;

    function uploadDocuments(string memory document) public {
        documents.push(document);
    }

    function getDocumentCount() public view returns (uint) {
        return documents.length;
    }
}
