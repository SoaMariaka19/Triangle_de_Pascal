function TrianglePascal(n){ 
    let table = new Array(n);
    
    for(let i = 0; i<table.length ; i++){
        table[i] = new Array(i+1);
        for(let j = 0; j<table[i].length ;j++){

            if(j == 0 || j == table[i].length - 1)
            table[i][j] = 1;

            else table[i][j] = table[i-1][j] + table[i-1][j-1];
        };
    };
    return table.join("\n").split(",").join(" ")
};
console.log(TrianglePascal(5));