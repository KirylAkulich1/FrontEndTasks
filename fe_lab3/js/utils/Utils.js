

export class Utils{
    static getRandomNumbers(maxValue,count){
        let range  = [...Array(maxValue).keys()];
        return range
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
            .slice(0,count);
        
    }

}