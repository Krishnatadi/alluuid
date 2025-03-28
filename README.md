![NPM Version](https://img.shields.io/npm/v/alluuid)
![GitHub Issues](https://img.shields.io/github/issues/krishnatadi/alluuid)

# AllUUID

`AllUUID` is a versatile JavaScript library for generating universally unique identifiers (UUIDs) and GUIDs. It supports multiple versions of UUIDs, including version 1 (time-based), version 4 (random), and version 7 (timestamp-based). This tool is ideal for developers looking to create unique identifiers for databases, session tokens, or any other use cases where uniqueness is critical.

This library can be used both in **Node.js** and **browser** environments with **TypeScript** support.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):


To install `alluuid`, use npm or yarn:
```bash
$ npm install alluuid
```
or
```bash
yarn add alluuid
```


## Features

- **Multiple UUID Versions**: Generate UUIDs of version 1, 4 and 7.
- **GUID Generation**: Create standard GUIDs.
- **Batch Generation**: Generate multiple UUIDs in one call.
- **Custom UUID Generation**: Create UUIDs based on custom object details.
- **Consistent UUID for Emails**: Generate a consistent UUID for the same email address.
- **Nil UUID Generation**: Generate a UUID with all bits set to zero.



## Use Cases
1. **Unique Identifiers for User Sessions**  
   Use UUIDs to uniquely identify user sessions or requests in a web application.

2. **Database Primary Keys**  
   Generate UUIDs for database primary keys, ensuring uniqueness across multiple systems or services.

3. **Distributed Systems**  
   In distributed systems, use UUIDs to uniquely identify resources across different machines and services.

4. **File/Document Naming**  
   Generate unique names for files or documents stored in a system, ensuring no collisions occur.

5. **Transaction IDs**  
   Assign unique transaction IDs for financial or business operations that can be tracked across systems.



## Methods Overview

| Method                           | Explanation                                                                                                                                                   |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `generateGuid()`                 | Generates a globally unique identifier (GUID) in the standard format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). This method uses random values to create the GUID. |
| `uuidv1()`                     | Generates a Version 1 UUID, which is time-based and includes the timestamp and the MAC address of the generating node.                                       |
| `uuidv4()`                     | Generates a Version 4 UUID, which is randomly generated and has a high probability of uniqueness. This version is often used when a non-deterministic identifier is needed. |
| `uuidv7()`                     | Generates a Version 7 UUID, which is a timestamp-based UUID that allows for ordering based on the creation time. This version is useful in databases that require ordering of entries. |
| `generateNilUUID()`                      | Returns a nil UUID (00000000-0000-0000-0000-000000000000), which represents the absence of a UUID. This is useful in cases where a UUID is required but not yet generated. |
| `generateMultipleUUIDs(count, version)` | Generates an array of UUIDs of a specified version (1, 4, or 7). The count parameter specifies how many UUIDs to generate.                                |
| `generateCustomUUID(details)`    | Generates a custom UUID based on provided details (like name, ID). This method allows for unique identification tied to specific attributes of an object.    |
| `generateUUIDForEmail(email)`    | Generates a consistent UUID based on the provided email address. This ensures that the same email always maps to the same UUID, facilitating user identification. |



## Node.js Usage
To use alluuid in a Node.js application, import the library and use the various UUID generation methods.
### 1. Generate UUIDs
#### 1.1 Version 1 UUID (Timestamp-based UUID)
This code snippet imports the uniqueIDGenerator from the alluuid package and calls the version1() method. Version 1 UUIDs are generated based on the current timestamp and the MAC address of the computer (or a random number if the MAC address cannot be determined). As a result, the generated UUID will be unique across space and time.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a Version 1 UUID
const uuidV1 = uniqueIDGenerator.uuidv1();
console.log("Generated Version 1 UUID:", uuidV1);

/*
Output:
Generated Version 1 UUID: 123e4567-e89b-12d3-a456-426614174000
*/
```

#### 1.2 Version 4 UUID (Random UUID)
This code generates a Version 4 UUID using random numbers. It utilizes a secure random number generator to produce a UUID that is statistically unique. This is ideal for cases where no specific ordering or source of the UUID is required, as the randomness ensures that each UUID generated will not repeat.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a Version 4 UUID
const uuidV4 = uniqueIDGenerator.uuidv4();
console.log("Generated Version 4 UUID:", uuidV4);

/*
output: 
Generated Version 4 UUID: ad08bfa4-b9d6-9685-bee8-940db039f061
*/
```


#### 1.3 Version 7 UUID (Unix Timestamp-based UUID)
In this snippet, a Version 7 UUID is generated. This type of UUID is based on time but utilizes a different encoding scheme than Version 1. It is intended for applications where both a timestamp and a unique identifier are needed, allowing sorting and uniqueness based on time of creation.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a Version 7 UUID
const uuidV7 = uniqueIDGenerator.uuidv7();
console.log("Generated Version 7 UUID:", uuidV7);

/*output: 
Generated Version 7 UUID: 7b2c9a80-8b58-11ec-b909-0242ac120002
*/

```


### 2. Generate Multiple UUIDs
This code demonstrates how to generate multiple UUIDs in a single call. The generateMultipleUUIDs function takes two parameters: the UUID version (4 in this case) and the number of UUIDs to generate (5). It returns an array of randomly generated Version 4 UUIDs, which can be useful for bulk operations or initializing datasets with unique identifiers.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate multiple UUIDs
try {
    const uuids = uniqueIDGenerator.generateMultipleUUIDs(4, 5);
    console.log("Generated UUIDs (Version 4):", uuids);
} catch (error) {
    console.error("Error:", error.message);
}
/*
Output:
Generated UUIDs (Version 4): [ 'fa97f8f2-7603-4e07-b832-c1d1d3427c0a','ed95848a-02b8-4d2f-b80d-cf8a40a961bb', ... ]

*/

```


### 3. Generate Custom UUIDs
This snippet illustrates how to create a custom UUID based on provided details. The generateCustomUUID method uses the input object (in this case, with name and id properties) to produce a UUID. This allows developers to generate UUIDs that encode specific information, making it easier to trace the origins of each UUID when debugging or analyzing data.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a custom UUID
try {
    const customDetails = { name: "example", id: 123 };
    const customUUID = uniqueIDGenerator.generateCustomUUID(customDetails);
    console.log("Generated Custom UUID:", customUUID);
} catch (error) {
    console.error("Error:", error.message);
}
/*
Output:
Generated Custom UUID: c56a5a6f-e568-4eab-83d4-2ac8a8c8c888
*/

```


### 4. Generate UUIDs Based on Email
In this example, a UUID is generated based on a specific email address. The generateUUIDForEmail function ensures that the same email will always produce the same UUID, which is particularly useful for scenarios where user identification needs to be consistent (e.g., user accounts). This function hashes the email to generate a UUID, thereby maintaining a unique identifier linked to that email.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a UUID for a specific email
try {
    const email = "assam@example.com";
    const emailUUID = uniqueIDGenerator.generateUUIDForEmail(email);
    console.log("Generated UUID for Email:", emailUUID);
    
    // Generate UUID for the same email again
    const sameEmailUUID = uniqueIDGenerator.generateUUIDForEmail(email);
    console.log("Generated UUID for the same Email again:", sameEmailUUID);
} catch (error) {
    console.error("Error:", error.message);
}
/*
Output:
Generated UUID for Email: 00000000-0000-4000-8000-0000222e4256
Generated UUID for the same Email again: 00000000-0000-4000-8000-0000222e4256
*/

```


### 5. Generate Nil UUID
This code snippet demonstrates the generation of a Nil UUID, which is a standardized UUID that represents the absence of a value. It is often used in databases and APIs to signify a null or undefined state without ambiguity.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a Nil UUID
const nilUUID = uniqueIDGenerator.generateNilUUID();
console.log("Generated Nil UUID:", nilUUID);
/*
Output:
Generated Nil UUID: 00000000-0000-0000-0000-000000000000
*/

```


### 6. Generate GUID
This snippet generates a GUID (Globally Unique Identifier). GUIDs and UUIDs serve similar purposes, but GUIDs are often used in Microsoft environments. The generateGuid method utilizes randomization to create a unique identifier that can be used interchangeably with UUIDs in many applications.
```javascript
const { uniqueIDGenerator } = require('alluuid');

// Generate a GUID
const guid = uniqueIDGenerator.generateGuid();
console.log("Generated GUID:", guid);
/*
Output:
Generated GUID: a12fef4b-4b2b-4429-8e47-bf38ebf0b4f3
*/

```


## Browser Usage
To use the library directly in the browser, you need to include the script tag that references the CDN.

The alluuid library is hosted on jsDelivr CDN. Below is an example of how to include the CDN for UUID Version 4:

For UUID Version 4 (Randomly generated UUID):
```javascript
<script src="https://cdn.jsdelivr.net/npm/alluuid@1.0.2/alluuid/uuidv4.js"></script>
```
You can add the above <script> tag to your HTML file to use version4() for generating UUIDs.

> Note: To use other versions like version1(), version7(), and so on, you can refer to the respective CDN paths and include them as separate script tags.

You can find the latest version of **alluuid** CDN by visiting this link:

[https://www.jsdelivr.com/package/npm/alluuid](https://www.jsdelivr.com/package/npm/alluuid)

Once you add the correct script tag(s) to your HTML, you can start using the **alluuid** functions directly in the browser.



## Community and Ecosystem

By using **ALLUUID**, you are joining a growing community of developers who are passionate about secure passwords. We encourage you to share your experiences, ideas, and feedback on GitHub Discussions or any community platform of your choice.

We welcome contributions! If you’d like to contribute, Share use cases, submit an issue or a pull request on GitHub.

We'd love to hear from you and see how you're using **ALLUUID** in your projects!
Contributing


## Issues and Feedback
For issues, feedback, and feature requests, please open an issue on our [GitHub Issues page](http://github.com/krishnatadi/alluuid/issues). We actively monitor and respond to community feedback.
