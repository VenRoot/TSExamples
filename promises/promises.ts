class Promises
{
    nopromise = (x = 0):number => {
        for(let i = 0; i < 1000000000; i++) x++;
        return x;
    }

    promise = (x = 0):Promise<number> =>
    {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < 1000000000; i++) x++;
            resolve(x); 
        }); 
    }

    async_await = async (x = 0) =>
    {
        for(let i = 0; i < 1000000000; i++) x++;
        return x;
    }

    Sleep = async (ms:number) => setTimeout(() => Promise.resolve(true), ms); 

};

const session = new Promises();

(async () => {

/**
 * There are a few ways to get a function value which isn't returned instantly.
 * 
 * 
 */


/**
 * First we can run the function without waiting for the result.
 * This works totally fine if you DON'T NEED THE RESULT FOR THE NEXT CODE
*/
const nopromise = session.nopromise();
/**
* First approach would be to call the function and define a callback to execute once the Promises finishes.
* That way you can use the return value. The function won't block the code execution
* 
* Callbacks aren't pretty and if you use too many, you can get what's called a callback-hell
*/
session.promise().then(result => 
    {
        console.log(`Result was ${result.toString()}`);
        session.promise().then(result =>
            {
                console.log(`Result was ${result.toString()}`);
                session.promise().then(result =>
                    {
                        console.log(`Result was ${result.toString()}`);
                        session.promise().then(result =>
                            {
                                console.log(`Result was ${result.toString()}`);   
                            }); 
                    }); 
            });
    }
);

/**
 * A better approach would be async/await, which is just a "prettier" promise. 
 * If you hover over the async_await method in the class, you'll see that it returns a promise as well
 * This code looks way cleaner, prevents a callback hell and is easier to read.
 * 
 * We can store the result in a variable OR we can also use .then() as well
 */

const result1 = await session.async_await();        console.log(result1);
const result2 = await session.async_await(result1); console.log(result2);
const result3 = await session.async_await(result2); console.log(result3);
const result4 = await session.async_await(result3); console.log(result4);


/**
 * The problem with the solution above is, that we call the function 4 times and wait 4 times one-by-one to finish.
 * Execute, wait, execute, wait, execute, wait...
 * 
 * That costs alot of time. If those functions are INDEPENDENT of each other, then we can execute all at one time
 * 
 * With await Promise.all() we can call all promises at once. The result will be resolved if EVERY Promise is finished
 */

 const res1 = session.async_await();
 const res2 = session.async_await();
 const res3 = session.async_await();
 const res4 = session.async_await();

 const results = await Promise.all([res1, res2, res3, res4]);

 console.table(results);


})();



