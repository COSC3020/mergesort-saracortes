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

(I had help of a friend that is a computer science student to analyse the time complexity, she help me answer some questions so that I could come up with this conclusion)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
