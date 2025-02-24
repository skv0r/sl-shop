//async
async function getGreetings() : Promise<string> {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve("Привет, Мир!");
        }, 1000)
    })  
}

async function displayGreetings() {
    const greetings = await getGreetings();
    console.log(greetings);
}

displayGreetings();

//отлов ошибок
function fetchDataWithError() : Promise<void> {
    return new Promise( (_, reject) => {
        setTimeout( () => {
            reject();
        }, 2000)
    })
}

async function handleData() : Promise<void> {
    try {
        const ErrorData = await fetchDataWithError();
        console.log(ErrorData);
    } catch (err) {
        console.error("Произошла ошибка:", err)
    }
}

handleData();

//async two params
function fetchUserData() : Promise<{name: string}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj1 = {name: "func 1 end in 1 sec"}
            resolve(obj1);
        }, 1000);
    });
}

function fetchProductData() : Promise<{productName: string}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj2 = {productName: "func 2 end in 2 sec"}
            resolve(obj2);
        }, 2000);
    });
}

async function getAllData(): Promise <void> {
    const [userData, productData] = await Promise.all([
        fetchUserData(),
        fetchProductData()
    ]);
    console.log([userData, productData])
}

getAllData();

const userDataList = [
    {"id":1,"name":"Alice"},
    {"id":2,"name":"Bob"},
    {"id":3,"name":"Charlie"}
]

async function fetchDataById(id: number): Promise<string> {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let userData = userDataList.find( data => data.id === id);
            if (userData) {
                resolve(`Данные для ID: ${userData.name}`)
            } else {reject(`ERRRORRRRRRRR`)}
        }, 3000);
    })
}

async function displayUserData(id: number) {
    try {
        const data = await fetchDataById(id); // Ожидаем результат
        console.log(data); // Выводим данные
    } catch (error) {
        console.error(error); // Обработка ошибок
    }
}

displayUserData(1)