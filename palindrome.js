// A function to find the palindrome of word


function pali(word) {
    let split_word = word.split("")
    let reversed_word = split_word.reverse()
    let split_word_joined = reversed_word.join("")

    if (split_word_joined == word) {
        console.log("The word is a palindrome!!")
    } else {
        console.log("Sorry, that word isn't a palindrome!!!")
    }
}

pali("mud")
pali("racecar")
pali("nitin")