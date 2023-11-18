/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function (s, t) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    t = t.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (s.length !== t.length) return false

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1)
        } else {
            sMap.set(s[i], 1)
        }

        if (tMap.get(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1)
        } else {
            tMap.set(t[i], 1)
        }
    }
    // Above code optimisation
    /*
        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }
    */

    for (const [key, value] of sMap) {
        if (tMap.get(key) !== value) {
            return false
        }
    }

    return true
};

const string1 = "dgqztusjuu";
const string2 = "dqugjzutsu";

let result = isAnagram(string1, string2)
console.log({ result });