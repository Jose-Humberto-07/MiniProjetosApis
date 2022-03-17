class CustomError extends Error {
    constructor({ message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    
    const name = "José Humberto Pinheiro do Nascimento";

    const myError = new CustomError({
        message: "Custom message on custom error",
        data: {
            type: "Server error"
        }
    }); 
    throw myError;
} catch (error) {
    console.log("Error: ", error);
    console.log(error);
    console.log(error.data);
} finally {
    console.log("Keep");
}



