import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Difference between Javascript and NodeJs</h2>
            <p>JavaScript is a language that runs inside web browsers as part of documents loaded by the browser. However nothing ought to restrict JavaScript to run solely inside the browser. Now being an interpreted language, it needs an interpreter to run. V8 is the Google Chrome JS engine and 'node' is a front-end to it that can be used to run JavaScript scripts outside the browser. Node.js or just Node usually refers to a collection of objects and methods available to  JavaScript code when run in V8 or through the node interpreter. It is a JavaScript libray cum runtime.</p>
            <h2>When should you use NodeJs and when should you use MongoDB?</h2>
            <p>We use NodeJs to connect to MongoDB. We should use NodeJs to establish a connection between the server and the database. We should use MongoDB to store data.</p>
            <h2>Differences between sql and no-sql</h2>
            <p>SQL is table based database where No-sql is document based, graph based or key-value pair.</p>
            <h2>What is the purpose of JWT and how does it work?</h2>
            <p>The purpose of JWT is to make pages secured and give authentic users access. After the user has signed in the email is sent to the backend where it creates a token with the email. The token contains the email but it is encrypted. So the token is sent to the browser where it is saved in the loacl storage. Now the token is sent again back to the backend where the token is decoded to see whether it matches with the email at the backend.   If it matches then the user is authentic and gets access. If it doesnt match then it is not a valid user and doesnt get access. </p> 
        </div>
    );
};

export default Blogs;