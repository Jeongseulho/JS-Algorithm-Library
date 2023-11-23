function _shiftDown(heap) {
  let targetIdx = 0;
  let leftChildIdx = 1;
  let rightChildIdx = 2;
  let smallerChildIdx = leftChildIdx;
  while (smallerChildIdx < heap.length) {
    if (
      rightChildIdx < heap.length &&
      heap[rightChildIdx] < heap[leftChildIdx]
    ) {
      smallerChildIdx = rightChildIdx;
    } else {
      smallerChildIdx = leftChildIdx;
    }

    if (heap[smallerChildIdx] >= heap[targetIdx]) break;

    [heap[targetIdx], heap[smallerChildIdx]] = [
      heap[smallerChildIdx],
      heap[targetIdx],
    ];
    targetIdx = smallerChildIdx;
    leftChildIdx = targetIdx * 2 + 1;
    rightChildIdx = leftChildIdx + 1;
    smallerChildIdx = leftChildIdx;
  }
}

/**
 * @param {number[]} heap
 * @param {number} newItem
 * @return {void}
 */
function heapPush(heap, newItem) {
  heap.push(newItem);
  let targetIdx = heap.length - 1;

  while (targetIdx > 0) {
    const parentIdx = (targetIdx - 1) >> 1;
    const parent = heap[parentIdx];
    if (newItem < parent) {
      heap[targetIdx] = parent;
      targetIdx = parentIdx;
      continue;
    }
    break;
  }
  heap[targetIdx] = newItem;
}

/**
 * @param {number[]} heap
 * @return {number}
 */
function heapPop(heap) {
  const lastItem = heap.pop();
  if (heap.length) {
    const minItem = heap[0];
    heap[0] = lastItem;
    _shiftDown(heap);
    return minItem;
  }
  return lastItem;
}

module.exports = {
  heapPush,
  heapPop,
};
