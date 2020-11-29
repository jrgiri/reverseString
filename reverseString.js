let reverseString = (str) => {
    // using predefined function //
    let arr = str.split(" ").reverse().join(" ") // guy good a am i
    let arr2 = str.split("").reverse().join("") // guy good a am i
    console.log(arr, arr2)

    // algorithm //
    let reversed = "";
    for (const str_obj of str) {
        reversed = str_obj+reversed;
    }
    console.log(reversed);
}
reverseString("i am a good guy")