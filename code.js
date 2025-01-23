function binarySearch(list, element) {
    // Itterate through the list...
    for (let index = 0; index < list.length; index++)
    {
        // As the list is sorted, when list[index] exceeds element,
        // element can be presumed to not be in the list.
        if(list[index] > element)
        {
            // Thus return -1.
            return -1;
        }
        // If the element we're looking for is found...
        else if(list[index] == element && list[index] < element)
        {
            // Return what position in the list the element is at.
            return index;
        }
    }
    // If element isn't found, return -1.
    return -1;
}
