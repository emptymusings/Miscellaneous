# Ransom Note Problem
[The Ransom Note](https://leetcode.com/problems/ransom-note/) problem came up in an interview I was taking, but it was more of a whiteboard scenario and I didn't have my typical IDE to work in.

[This](https://github.com/emptymusings/Miscellaneous/blob/main/DataStructuresAndAlgorithms/Algorithms/Algorithms/Exercises/leetcode/Easy/RansomNote.cs) is the solution I came up with (I don't know yet if I'll get called back).

I found it interesting because the interviewer asked me why I worked bidirectionally in the algorithm, and why I made 2 dictionaries and then traversed over the Key/Value pairs.  My answer was that iterating over either list fully would be slower than iterating over half of each list, and then over only the aggregated results in the note's dictionary - I'm pretty sure that's right, but not 100%.