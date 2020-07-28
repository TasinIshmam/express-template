# Express Template

A template for medium sized express applications. Somewhat opinionated. 

### Stack

- MongoDB as Database
- EJS for Server Side Rendering
- Winston for Logging
- In memory cache (Change appropriately in production)
- In memory rate limiter (Change appropriately in production)
- 


### Style Guide

- lowerCamelCase for variables/objects
- UpperCamelCase for class names
- snake_case for file names 
- Reference: https://github.com/felixge/node-style-guide


### Conventions

- When exporting, package into an object. 
```javascript

module.exports = {objectToExport}; // Correct
module.exports = objectToExport // Wrong
```


### Logging To Console
 
* Import logger from config/logger.js. **Do not use console for logging, it becomes a mess in production**.  
* Use appropriate log levels. 
    * logger.error for error logging
    * logger.info for generic maintenance logs
    * logger.debug for debugging (won't show up in production logs)
    * Optionally, logger.warn for something between error and info. 
    


