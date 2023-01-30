export const generatePriceFromUpc= (input)=> {

    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0);
    }
    let len = output.replace(/\s+/g, '').length
    let char = len>9?9:len
    let divider= Array(len).join(char)
    let mult = input[0]==2?10:input[0]==3?100:1
    let num = output/divider*mult

    let dec = num.toString().slice(-2)
    return Math.trunc(num)+ dec/100

}
