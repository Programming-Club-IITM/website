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

In a sorted array the affordable shops always form a prefix, so all you need is the position of the first price that is greater than m. Which function from the STL section finds exactly that?
</Hint>


<Hint title="Problem B">
Flip the question. Instead of asking for the minimum time to make t products, ask: if all machines work for T seconds, how many products do they make in total?

If T seconds are enough, are T + 1 seconds enough too? That is the false … false true … true pattern, so you can binary search on T. A machine with time k makes ⌊T / k⌋ products in T seconds. What is an upper bound on the answer that you are sure works?
</Hint>


<Hint title="Problem C">
Sort the players by their number of tokens. If a player can win the championship, can the player right after him in sorted order, who has at least as many tokens, win too? What does this say about the set of possible winners?

The possible winners form a suffix of the sorted order, so binary search for the first winner. To check one player, let him play greedily: first he beats everyone with fewer tokens, then the others in increasing order. With prefix sums, when does he get stuck?
</Hint>


<Hint title="Problem D">
Think about iterating through the array from left to right while keeping track of a running sum.

If your running sum becomes negative at any point, will adding it to the next elements ever make their sum larger?
</Hint>


<Hint title="Problem E">
Look for overlapping work: if you know exactly how many consecutive books Valera can read starting from book i up to book j, what does that tell you about starting from book i+1?

Maintain a valid sequence: imagine accumulating books one by one until you exceed the time limit t. Once you hit that limit, what is the most efficient way to adjust the beginning of your sequence so you can continue checking the rest of the array?
</Hint>


<Hint title="Problem F">
You already know how to find two values with a given sum in a sorted array using two pointers (Sum of Two Values). Can you reduce four values to that problem by fixing some of them?

n ≤ 1000, so O(n³) is fast enough for this problem as with careful implementation the constant overhead becomes very small. Fix the first two elements i < j, then look for the other two in the part of the array to the right of j.
</Hint>


<Hint title="Problem G">
Every ultimate attack is paid for by single attacks that build the combo. On which hordes should you spend single attacks, and on which hordes should the ultimate land so that it kills as many monsters as possible?

Sort the hordes. Build the combo on the smallest hordes and spend it on the largest ones. Keep one pointer at each end: how high should the combo be before you attack the horde at r?
</Hint>


<Hint title="Problem H">
Queries do not change the array, so you can treat each one on its own. If the elements in [l, r] were replaced by k, how would the total sum of the array change? Which part of the old total disappears, and what takes its place?

Writing the new total needs the sum of a[l..r]. Adding it up with a loop for every query is O(n·q), which is too slow when n and q are both 2·10⁵. Which part of your formula can you precompute once?
</Hint>


<Hint title="Problem I">
To get from city x to city y with x < y, is it ever useful to skip over a city or to move left? Compare paying for one long jump with paying for the same distance one neighbour at a time.

The cost of a single step from city i to city i + 1 does not depend on the query. If you knew every step cost, the query would be a range sum. Is a step from i + 1 back to i always the same price as a step from i to i + 1?
</Hint>


<Hint title="Problem J">
remember property of XOR : (a ^ b) ^ b = a

think about n = even and n = odd case separately.
</Hint>


<Hint title="Problem K">
(i ^ x) = (j ^ y) → i = (x ^ y ^ j) . Think when this will be true for consecutive i and j.

Think how the lowest bit matters.
</Hint>


<Hint title="Problem L">
Think about each bit position, and ask how many operations are needed to set that bit.

Be greedy from the highest bit down.(30-> 0)
</Hint>


<Hint title="Problem M">
Think greedy, one position at a time. you want b1 to be largest and then b2 and so on.

The OR can only improve about 31 times. max number of bit in a number is 31.

Handle the leftovers. Is it necessary to order them?
</Hint>


<Hint title="Problem N">
Consider a simplified version of the problem: what if the second type of query only asked you to find the median, without ever deleting it? What standard combination of data structures allows you to maintain and query a running median efficiently?

At first glance, the deletion queries make it seem like you need to remove an arbitrary element from the middle of your structure, which is notoriously difficult. But look closely at which specific element you are asked to delete. Where exactly does that element sit in the structure you envisioned in Hint 1?
</Hint>


<Hint title="Problem O">
Write down the precise algebraic inequality for segment j (where j < i) to be geometrically tall enough to intersect the ray emitted by segment i. Once you have this inequality, try algebraically rearranging the terms so that all variables related to i are on one side, and all variables related to j are on the other.

Suppose you are processing segment i and comparing it to a previous segment j. If the invariant value you derived in Hint 1 is strictly greater for i than it is for j, segment j becomes completely useless for all future rays. Why? Because segment i is both closer to any future rays and a "stronger" blocker! Since we can safely discard these eclipsed segments from our candidate list as we move left to right, we can manage the active candidates using a stack. Think about the relationship between the surviving elements: if you rigorously pop the weaker segments before adding a new one, how does the resulting structure of the stack help you instantly identify the first valid blocker?
</Hint>


<Hint title="Problem P">
Suppose you have a valid subarray starting at $L$ and ending at $R$. If you expand the subarray by adding the next element at $R+1$ and it suddenly becomes "unstable" ($\max - \min > K$), could adding even more elements to the right ever make it stable again?

If we fix the right end of our segment at $R$ and find the condition is violated, we only need to advance the left end $L$ forward until the segment becomes valid again. What properties of [L, R] should we monitor?

You need a way to track the maximum and minimum elements of your current segment in O(N). Think about whether you really need to remember every element in the current window, or if newly added extreme values make some older elements completely useless to track.
</Hint>