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


# Solutions

<Solution title="Problem A">
Sort the prices. For every query m, the answer is the number of elements that are at most m, which is upper_bound(x.begin(), x.end(), m) - x.begin(). Sorting costs O(n log n) and each of the q queries costs O(log n), so the total is O((n + q) log n). The input is large, so use fast input and output (print '\n' instead of endl).

Bonus: Prices are at most 105 , so you can also build an array cnt[v] = number of shops with price at most v, and answer every query in O(1) by clamping m to 105 . Binary search is not required here, but compare the two solutions.
</Solution>

<Solution title="Problem B">
 Let ok(T) be true when T / k⌊1⌋+ … + T / k ⌊n⌋≥ t. It is monotonic, because more time never gives fewer products. Binary search the smallest T with ok(T) true, using lo = 1 and hi = min(k) * t (the fastest machine alone can make all t products in this time). This is at most 1018 , which fits in a 64-bit integer. Each call of ok costs O(n) and the range needs about 60 halvings, so the total is O(n log(min(k) · t)). Check with the sample: T = 8 gives 2 + 4 + 1 = 7 ≥ 7, while T = 7 gives 2 + 3 + 1 = 6 < 7, so the answer is 8.

Careful: For large T the sum can exceed even the 64-bit range (2 · 105 machines, each making up to 1018 products), so stop adding as soon as the sum reaches t. Use long long everywhere.
</Solution>

<Solution title="Problem C">
Sort the pairs (tokens, index) into s[0 … n − 1] and compute prefix sums P[j] = s[0] + … + s[j]. The player at sorted position i can win exactly when P[j] ≥ s[j + 1] for every j ≥ i: after taking everyone up to position j he must be able to beat the next player (ties are fine, because the winner of a tie is chosen randomly). This check takes O(n). If position i can win then so can i + 1, and the last position always wins, so binary search for the smallest winning position i. The winners are the players at positions i … n − 1: print how many they are, then their original indices in increasing order. The total is O(n log n), dominated by sorting. Use 64-bit integers for P.

Check with the first sample: tokens 1 2 4 3 sort to 1 2 3 4 with P = 1, 3, 6, 10. Position 0 fails because P[0] = 1 < 2, but position 1 works (3 ≥ 3 and 6 ≥ 4), so the players with 2, 3 and 4 tokens win, which are players 2, 3 and 4.

Bonus: The binary search is not even needed. Scan the sorted array from the right and find the last j with P[j] < s[j + 1]; everyone at positions up to j loses. Can you see why?
</Solution>


<Solution title="Problem D">
Use two pointers l and r that mark the current subarray, both starting at index 0, and keep the sum of the elements between them. Move r one step to the right at a time, add a[r] to the sum, and update the best answer with the current sum. If the sum ever becomes negative, this subarray can only make any subarray that extends it smaller, so drop it completely: move l to r + 1 and reset the sum to 0. Both pointers only move to the right, so this is a unidirectional two-pointer algorithm that runs in O(n) time and O(1) space.

Now look closely: the left pointer l is never used to compute the answer. We only need the running sum and the best sum seen so far. If we remove l, each step becomes current_sum = max(a[r], current_sum + a[r]) and max_sum = max(max_sum, current_sum). This simplified form is the wellknown Kadane's Algorithm.
</Solution>


<Solution title="Problem E">
For each index i, let ri be the largest index such that ai + … + ari ≤ t. The task is to find max(ri − i + 1). Since the ri are nondecreasing, two pointers work: iterate over i and keep a pointer to the corresponding ri.
</Solution>


<Solution title="Problem F">
Store the pairs (value, original position) and sort them by value. For every pair of indices i < j, set the target t = x − a[i] − a[j] and put l = j + 1 and r = n − 1. If a[l] + a[r] = t, print the four original positions. If the sum is less than t, move l right; if it is greater, move r left. Each pair (i, j) costs O(n), so the total is O(n³), about 1.7 · 10⁸ simple steps for n = 1000. Use 64-bit integers for the sums, because four values can exceed the 32-bit range. If no pair (i, j) gives a match, print IMPOSSIBLE.

**Bonus:** Find an O(n² log n) solution to this problem.
</Solution>

<Solution title="Problem G">
Sort the hordes in non-decreasing order, put l at the smallest and r at the largest, and set the combo x = 0. If a[l] < a[r] − x, kill all of horde l with single attacks (x += a[l], l++). Otherwise kill only a[r] − x monsters of horde l, so the combo becomes exactly a[r]; then use the ultimate to destroy horde r in one attack, reset x = 0 and move r left (move l too if horde l is now empty). When the pointers meet, one horde with a monsters and combo x < a is left. If a = 1, it takes one attack; otherwise it takes (a − x)/2 +⌈ ⌉ 1 attacks (kill about half of the gap with single attacks, then finish with the ultimate). Sorting dominates, so the total is O(n log n). Use 64-bit integers for the answer.
</Solution>


<Solution title="Problem H">
Let total be the sum of the whole array. Replacing a[l..r] with k removes the old range sum and adds k once for each of the r − l + 1 positions, so the new sum is total − (p[r] − p[l − 1]) + k·(r − l + 1), where p is the prefix sum array. Print YES if this value is odd and NO otherwise. Building p is O(n) and each query is O(1), so each test case runs in O(n + q). Use 64-bit integers, because k·(r − l + 1) can reach 10⁹ · 2·10⁵ = 2·10¹⁴.

Since only the parity matters, you could also store everything modulo 2.
</Solution>


<Solution title="Problem I">
A direct jump from x to y costs a[y] − a[x], which is exactly the sum of the gaps between neighbouring cities on the way. So travelling one neighbour at a time never costs more, and some of those steps can be paid with just 1 coin. Going right, the step from i to i + 1 costs right[i] = 1 if city i + 1 is

the closest city to i, and a[i + 1] − a[i] otherwise. City 1 always has city 2 as its closest; for 1 < i < n, city i + 1 is closest when a[i + 1] − a[i] < a[i] − a[i − 1]. Build prefix sums R of right, and answer a query with x < y as R[y − 1] − R[x − 1].

Going left needs its own array, because "closest" is not symmetric. In the sample [0, 8, 12, 15, 20], the closest city to city 2 is city 3, but the closest city to city 3 is city 4. So the step from 2 to 3 costs 1 coin, while the step from 3 back to 2 costs 4 coins. Define left[i] for the step from i to i − 1 in the same way, build its prefix sums L, and answer a query with x > y as L[x] − L[y]. Each test case runs in O(n + m). Use 64-bit integers, because coordinates go up to 10⁹ and the costs add up along the way.

Check with the sample: going from city 1 to city 4, every step goes to the closest city, so right[1] = right[2] = right[3] = 1 and the answer is 3 coins, matching the expected output.
</Solution>

<Solution title="Problem J">
Note that (a1⊕⊕x) (a2⊕⊕x) ... equals a1⊕a2⊕⊕… an if n is even, or a1⊕a2⊕⊕… an⊕x if n is odd. Then, if the length of the array is odd, you must print ⊕ of the whole array. And if the length is even, we can't change the value of the expression with our operation. It turns out that if ⊕ of the whole array is 0, we can output any number, but otherwise there is no answer.
</Solution>

<Solution title="Problem K">
Consider two numbers v and u such that x⊕v=y⊕u. Then consider the numbers x⊕(v+1) and y⊕(u+1). Let's look at the last bit of v and u. Possible scenarios:

- Both bits are equal to 0 — adding one will change the bits at the same positions, therefore x⊕(v+1)=y⊕(u+1);

- Both bits are equal to 1 — adding one will change the bits at the same positions and also add one to the next bit, therefore we can similarly consider the next bit;

- Bits are different — adding one to the zero bit will only change one bit, while the subsequent bit of the other number will be changed. This means that x⊕(v+1)≠y⊕(u+1).

It is clear that we need to maximize the number of zeros in the maximum matching suffix of u and v. Obviously, this number is equal to the maximum matching suffix of x and y. Let k be the length of the maximum matching suffix of x and y, then the answer is 2<sup>k</sup>
</Solution>

<Solution title="Problem L">
The optimal strategy is to greedily take the highest bit we have enough operations to set in every array element. To do this, we maintain a count for each bit with the number of elements that have it set already. The cost to set the i-th bit will be n−(how many number already has that bit set).

We go from the highest bit to the lowest:

- If we have enough operations left, we set the bit, subtract its cost from the operations and move to the next lower bit.

- If we don't have enough operations, we move on to the next lower bit and don't modify the operations.

We stop once we processed bit 0.
</Solution>

<Solution title="Problem M">
Note that in this context maxval denotes 10<sup>9</sup> .

We can make the observation that only the first log2(maxval) elements matter, since after placing them optimally we can be sure all bits that could be set in the prefix OR would have already been set. So, we can brute force the optimal choice log2(maxval) times (we choose to add an element if it provides the largest new prefix OR value among all unused elements) and then just add the rest of the unused elements.
</Solution>

<Solution title="Problem N">
We can identify the median efficiently using two heaps: a max-heap `l` for the smaller half of the elements and a min-heap `r` for the larger half.

The heaps are maintained such that every element in `l` is less than or equal to every element in `r`, and `l` contains either the same number of elements as `r` or one extra element. Hence, the median is always the maximum element of `l`.

When removing the median, **all copies of it must be removed**. Since the median is the maximum of `l`, any additional copies can only be at the maximum of `l` or the minimum of `r`. We remove all occurrences from both heaps.

After each operation, the heaps must be rebalanced to restore the size condition while preserving the ordering between them.
</Solution>

<Solution title="Problem O">
A ray emitted from segment $i$ traveling left and down follows the line $y = Y_i + C(x - X_i)$. A segment $j$ ($X_j < X_i$) blocks this ray if its peak is at least as high as the ray at $X_j$, meaning:
$$Y_j \ge Y_i + C(X_j - X_i)$$

Rearranging to group by index gives $Y_j - C \cdot X_j \ge Y_i - C \cdot X_i$.

If we define $V_k = Y_k - C \cdot X_k$, the problem reduces to finding the largest $j < i$ such that $V_j \ge V_i$. This is the standard "previous greater or equal element" problem, solvable in $O(N)$ using a monotonic stack.

Maintain a stack of indices where their $V$ values are strictly decreasing. When processing $i$, pop elements from the stack while $V_{top} < V_i$. (We can safely discard these because segment $i$ is further right and has a larger $V$, so it will always block future rays before the popped segments could). After popping, the index at the top of the stack is our candidate blocker $j$. We then push $i$ to the stack.

Finally, we must ensure the ray doesn't hit the x-axis ($y = 0$) before reaching $X_j$. To avoid floating-point precision issues, we rewrite the x-intercept check $X_j \ge X_i - Y_i/C$ as integer arithmetic: $C \cdot X_j \ge C \cdot X_i - Y_i$. If this holds, $j$ is the answer. Otherwise, or if the stack is empty, the ray hits the ground and the answer is $0$.
</Solution>

<Solution title="Problem P">
The problem requires finding the longest contiguous subsegment $[L, R]$ where $\max(A[L \dots R]) - \min(A[L \dots R]) \le K$. As we expand our right boundary $R$, we need an efficient way to track the window's extrema and advance the left boundary $L$ when the stability condition is violated, which can be done in $O(N)$ using a sliding window and two monotonic deques.

Maintain two double-ended queues storing indices: a max-deque where corresponding values are strictly decreasing, and a min-deque where values are strictly increasing. When processing $A_R$, pop elements from the back of the max-deque while $A_{back} \le A_R$, and from the min-deque while $A_{back} \ge A_R$. (We can safely discard these because $A_R$ is further right and more extreme, meaning the popped elements will never be the maximum or minimum of any future valid window). After popping, push $R$ to both deques.

The current window's maximum and minimum are always at the front of their respective deques. While $\text{MaxDeque.front()} - \text{MinDeque.front()} > K$, the window is invalid. We contract it by incrementing $L$. If the index dropping out of the window ($L-1$) matches the index at the front of either deque, we pop it from the front. Once the condition is satisfied, we update our global answer with the valid window length $R - L + 1$.
</Solution>