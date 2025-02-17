# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst-case runtime complexity of this implementation of merge sort is Θ(n log n). It merges subarrays of increasing size, and each merging step runs in O(n) time (each element is moved at most once). The number of merging steps is O(log n) because the subarray size doubles in each iteration. So we can conclude that the overall complexity is O(n log n).
