contract DocumentStorage {
    struct Document {
        string hash;
        uint256 timestamp;
        address owner;
        uint version;
    }

    mapping(string => Document[]) private documents;
    string[] private documentHashes;

    event DocumentStored(string hash, uint256 timestamp, address owner, uint version);

    function storeDocument(string memory _hash) public {
        uint newVersion = documents[_hash].length + 1;
        Document memory newDoc = Document(_hash, block.timestamp, msg.sender, newVersion);
        documents[_hash].push(newDoc);
        // If it's the first version, add the hash to documentHashes
        if(newVersion == 1) {
            documentHashes.push(_hash);
        }
        emit DocumentStored(_hash, block.timestamp, msg.sender, newVersion);
    }

    function getAllDocuments() public view returns (Document[][] memory) {
        Document[][] memory allDocs = new Document[][](documentHashes.length);
        for (uint i = 0; i < documentHashes.length; i++) {
            allDocs[i] = documents[documentHashes[i]];
        }
        return allDocs;
    }

    function getDocumentVersions(string memory _hash) public view returns (Document[] memory) {
        return documents[_hash];
    }

}
