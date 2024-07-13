pragma solidity ^0.8.0;

contract MyContract {
    struct Record {
        uint256 id;
        string title;
        string content;
        address owner;
        uint256 timestamp;
    }

    mapping(uint256 => Record) private records;
    uint256 private recordCount;

    event RecordAdded(uint256 id, string title, address owner, uint256 timestamp);
    mapping(uint256 => Document) public documents;
    uint256 public documentCount;
    function storeDocument(string memory _title, string memory _content) public {
        uint256 documentId = documentCount++;
        documents[documentId] = Document({
            title: _title,
            content: _content,
            timestamp: block.timestamp,
            owner: msg.sender
        });
    }

    function addRecord(string memory _title, string memory _content) public {
        recordCount++;
        records[recordCount] = Record(recordCount, _title, _content, msg.sender, block.timestamp);
        emit RecordAdded(recordCount, _title, msg.sender, block.timestamp);
    }

    function getRecord(uint256 _id) public view returns (uint256, string memory, string memory, address, uint256) {
        Record memory record = records[_id];
        require(record.id > 0, "Record does not exist");
        return (record.id, record.title, record.content, record.owner, record.timestamp);
    }

    function getRecordCount() public view returns (uint256) {
        return recordCount;
    }
}