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

The worst-case runtime complexity of this merge sort is Θ(n²). The algorithm sorts in place by merging subarrays that increase in size. Here, each merging step involves shifting elements instead of using a "helper" array. However, since the merge process contains a nested loop, the worst-case shift operation can take O(n) per element, leading to a total merge step complexity of O(n²) in the worst case. Because the number of merging steps is O(log n), the expected complexity might appear to be O(n log n). However, due to the nested loop structure in the merging process, the actual worst-case complexity is Θ(n²). This results in a slowdown compared to standard merge sort implementations that use "helper" arrays.

(I had help of a friend that is a computer science student to analyse the time complexity, she help me answer some questions so that I could come up with this conclusion)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
