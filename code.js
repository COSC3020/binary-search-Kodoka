function binarySearch(list, element) {
    // Find the middle index of the list.
    var middle = list.length // 2
    // If the value at the middle index equals the searched value...
    if(list[middle] == element)
    {
        // return that index.
        return middle;
    }
    // If the value at the middle index is greater than the searched value...
    else if(list[middle] > element)
    {
        // return -1, as we're working with a sorted list, thus the searched
        // value doesn't exist in the list.
        return -1;
    }
    // If the value at the middle index is less than searched value...
    else
    {
        // recursively search slice of list composed of subsequent index values.
        return binarysearch(list.slice(middle + 1, list.length));
    }
}
