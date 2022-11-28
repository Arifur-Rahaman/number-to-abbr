const makeAbbreviatedForm=(value)=>{
    const one_k = 1000, one_m = 1000000, one_b = 1000000000, one_t = 1000000000000
    if(value<one_k){
        return value
    }
    else if(value<one_m){
        let converted = value/one_k
        return Number.isInteger(converted)? converted+"K": converted.toFixed(2)+"K"
    }
    else if(value<one_b){
        let converted = value/one_m
        return Number.isInteger(converted)? converted+"M": converted.toFixed(2)+"M"
    }
    else if(value<one_t){
        const converted = value/one_b
        return Number.isInteger(converted)? converted+"B": converted.toFixed(2)+"B"
    }
    else{
        const converted = value/one_t
        return Number.isInteger(converted)? converted+"T": converted.toFixed(2)+"T"
    }
}