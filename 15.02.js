var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length;i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            } 
        }
    }
    return [];
};

function factorial(n) {
    return (n===1) ? 1 : n*factorial(n-1); 
}

console.log(factorial(5)); // 5040

function makeCounter(start){
    let count = start;
    return {
        decrease: function(){
            return count--;
        },
        increase: function(){
            return count++;
        },
        reset: function(){
            return start;
        }
    }
    
}

const counter = makeCounter(10);
console.log(counter.increase()); // 11
console.log(counter.increase()); // 12
console.log(counter.decrease()); // 11
console.log(counter.reset());    // 10

const calculator = {
    result: 0,
    sum(a,b) {
        return a+b;
    },
    mul(a,b) {
        return a*b;
    }
}

function cacheCalc (func) {
    let cache = new Map();

    return function(...args) {
        let key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Берем из кеша:", key);
            return cache.get(key);
        }
        
        let result = func(...args);
        cache.set(key, result);
        
        return result;
    }
}

calculator.sum = cacheCalc(calculator.sum);
console.log(calculator.sum(1,2)); 
console.log(calculator.sum(1,2));
console.log(calculator.sum(3,2));