---
id: cp-cf-contest
page: cp
sub: Problems
type: reading
order: 160
---


All Competitive Programming questions are hosted in the custom Codeforces contest below.

**[Open Codeforces Contest](https://codeforces.com/group/du4g5GNE7E/contest/724949)**

The problems are grouped by topic:

| Problems | Topic |
|---|---|
| A – C | Binary Search |
| D – G | Two Pointers |
| H – I | Prefix Sums |
| J – M | Bit Manipulation |
| N – P | Data Structures |

The contest will remain open until the **application deadline**.

You can attempt the problems in any order, but we recommend going through the provided reading material for each topic before attempting its problems.

**The Data Structures section is the bonus section and is optional.**


# Hints

<Hint title="Problem A">
For one day with m coins you need the number of shops whose price is at most m. If the prices were sorted, which shops would those be, and where would they sit in the array?
</Hint>


<Hint title="Problem B">
Flip the question. Instead of asking for the minimum time to make t products, ask: if all machines work for T seconds, how many products do they make in total?
</Hint>


<Hint title="Problem C">
Sort the players by their number of tokens. If a player can win the championship, can the player right after him in sorted order, who has at least as many tokens, win too? What does this say about the set of possible winners?
</Hint>


<Hint title="Problem D">
Think about iterating through the array from left to right while keeping track of a running sum.
</Hint>


<Hint title="Problem E">
Look for overlapping work: if you know exactly how many consecutive books Valera can read starting from book i up to book j, what does that tell you about starting from book i+1?
</Hint>


<Hint title="Problem F">
You already know how to find two values with a given sum in a sorted array using two pointers (Sum of Two Values). Can you reduce four values to that problem by fixing some of them?
</Hint>


<Hint title="Problem G">
Every ultimate attack is paid for by single attacks that build the combo. On which hordes should you spend single attacks, and on which hordes should the ultimate land so that it kills as many monsters as possible?
</Hint>


<Hint title="Problem H">
Queries do not change the array, so you can treat each one on its own. If the elements in [l, r] were replaced by k, how would the total sum of the array change? Which part of the old total disappears, and what takes its place?
</Hint>


<Hint title="Problem I">
To get from city x to city y with x < y, is it ever useful to skip over a city or to move left? Compare paying for one long jump with paying for the same distance one neighbour at a time.
</Hint>


<Hint title="Problem J">
remember property of XOR : (a ^ b) ^ b = a
</Hint>


<Hint title="Problem K">
(i ^ x) = (j ^ y) → i = (x ^ y ^ j) . Think when this will be true for consecutive i and j.
</Hint>


<Hint title="Problem L">
Think about each bit position, and ask how many operations are needed to set that bit.
</Hint>


<Hint title="Problem M">
Think greedy, one position at a time. you want b1 to be largest and then b2 and so on.
</Hint>


<Hint title="Problem N">
Consider a simplified version of the problem: what if the second type of query only asked you to find the median, without ever deleting it? What standard combination of data structures allows you to maintain and query a running median efficiently?
</Hint>


<Hint title="Problem O">
Write down the precise algebraic inequality for segment j (where j < i) to be geometrically tall enough to intersect the ray emitted by segment i. Once you have this inequality, try algebraically rearranging the terms so that all variables related to i are on one side, and all variables related to j are on the other.
</Hint>


<Hint title="Problem P">
Suppose you have a valid subarray starting at $L$ and ending at $R$. If you expand the subarray by adding the next element at $R+1$ and it suddenly becomes "unstable" ($\max - \min > K$), could adding even more elements to the right ever make it stable again?

If we fix the right end of our segment at $R$ and find the condition is violated, we only need to advance the left end $L$ forward until the segment becomes valid again. What properties of [L, R] should we monitor?
</Hint>