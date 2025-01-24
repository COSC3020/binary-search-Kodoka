function binarySearch(list, element) {
    // Initialize left and right index to lower and highest index of list.
    // Result is initialized to -1, as if element is not found, -1 is returned.
    var leftIndex = 0;
    var rightIndex = list.length - 1;
    var resultIndex = -1;
    
    // Continue checking indexes in passed list, until positional indexes swap
    // positions.
    while(leftIndex <= rightIndex)
    {
        // Set the index to be check to the mid point between the left and
        // right indexes.
        var checkIndex = Math.floor((leftIndex + rightIndex) / 2);

        // If the element we're in search of is found at the mid point...
        if(list[checkIndex] == element)
        {
            // set the resultIndex to the index just checked.
            resultIndex = checkIndex
            // Check to the left, to ensure resultIndex is first instance
            // of searched for element in list.
            rightIndex = checkIndex - 1;
        }
        // If the element we're in search of is greater than the value at the
        // mid point...
        else if(list[checkIndex] < element)
        {
            // change the left index to search to the right of the mid point.
            leftIndex = checkIndex + 1;
        }
        // If the element we're in search of is less than the value at the mid
        // point...
        else
        {
            // change the right index to search to the left of the mid point.
            rightIndex = checkIndex - 1;
        }
    }
    // If rightIndex exceeds leftIndex we've
    return resultIndex;
}
