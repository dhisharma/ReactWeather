function AddNumber (a,b){
    return new Promise(function(resolve,reject){
        if(typeof a === 'number'){
            resolve(a+b)
        }else{
            reject('Please enter a number')
        }
    }
    )
}

AddNumber(2,2).then(function(temp){
    console.log('promise success',temp)
},function(err){
    console.log('NumberInvalid',err)
})
AddNumber('f',2).then(function(temp){
    console.log('promise success',temp)
},function(err){
    console.log('NumberInvalid',err)
})