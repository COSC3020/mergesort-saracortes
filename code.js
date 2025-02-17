function mergesort(array) {
    let n = array.length;
    
    for (let currentSize = 1; currentSize < n; currentSize *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currentSize) {
            let mid = Math.min(leftStart + currentSize - 1, n - 1);
            let rightEnd = Math.min(leftStart + 2 * currentSize - 1, n - 1);
            
            let start2 = mid + 1;
            if (array[mid] <= array[start2]) {
                continue;
            }
            
            let left = leftStart;
            while (left <= mid && start2 <= rightEnd) {
                if (array[left] <= array[start2]) {
                    left++;
                } else {
                    let value = array[start2];
                    let index = start2;
                    
                    while (index !== left) {
                        array[index] = array[index - 1];
                        index--;
                    }
                    array[left] = value;
                    
                    left++;
                    mid++;
                    start2++;
                }
            }
        }
    }
    return array;
}
