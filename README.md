# Boilerplate-withAuth-ReactNative-Java-AWS
This is a boilerplate project that includes authentication with React Native, a Java backend, and AWS services. It provides a starting point for building a secure and scalable mobile application that requires user authentication.

## The project includes the following components:

- A React Native app that allows users to sign up, log in, and access protected resources.
- A Java backend that handles user authentication, authorization, and resource management.
- AWS services, such as Lambda Functions, DynamoDB, and API Gateway, that provide secure user management and storage.

By using this boilerplate, you can quickly set up a secure and reliable mobile application that meets your specific requirements. You can customize the React Native app and the Java backend to fit your needs, and you can leverage AWS services to ensure scalability, reliability, and security.

### Actions

Change name of the desired users table in the Users Model and the auth-users.yaml in the resources folder

Create the table in the database by running this function:
`aws cloudformation create-stack --stack-name my-auth-user-dynamodb-stack --template-body file://auth-users.yaml`
(Note that you'll need to have the AWS Command Line Interface (CLI) installed and configured with your AWS credentials to use this command.)

Create AWS Lambda functions for login and signup with the following specifications:
- Java Corretto 11 Runtime
- Access to DynamoDB
- Handler pointing at com.boiler.activity.auth.Login(/Signup)Activity::handleRequest
- Upload a build distribution

Create API in AWS API Gateway
- Add Resources
- Add POST Methods for Login and Signup
- Add Mappings according to the /resources/mapping folder
- Deploy API
- Add API path to frontend folder in routes/url.js
- Update any paths in the routes folder of the frontend based on the API resources
