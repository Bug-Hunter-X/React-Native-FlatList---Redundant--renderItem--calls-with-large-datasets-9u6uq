# React Native FlatList Redundant RenderItem Calls

This repository demonstrates a common, yet subtle bug in React Native's `FlatList` component.  When dealing with large datasets, improper key assignment can lead to the `renderItem` function being called multiple times for the same item, resulting in performance degradation and incorrect display. This example showcases the issue and its solution.

## Bug Reproduction

The `bug.js` file contains code that replicates the problem.  Observe the redundant calls to `renderItem`. You can adjust the `data` array size to see the performance impact with larger datasets.

## Solution

The `bugSolution.js` file provides a corrected implementation.  The key difference lies in the consistent and unique key assignment to each item in the data array using the `item.id` property.  This ensures `FlatList` correctly identifies and renders items only once.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
