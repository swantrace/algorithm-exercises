import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";
function sort(nums) {
  snapshot(nums);
  for (let i = 1; i <= nums.length; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        const temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        break;
      }
    }
    snapshot(nums);
  }
  snapshot(nums);
  return nums;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(50)));
  done();
  return <App />;
}
