#include <stdio.h>
int binary_search(int data[], int lb, int ub, int item);

int main()
{
    int arr[] = {
        1, // 0
        2, // 1
        3, // 2
        4, // 3

        5, // 4
        6, // 5
        7, // 6
        8, // 7
    };
    int result = binary_search(arr, 0, 7, 5);
    printf("%d\n", result);
    return 0;
}

int binary_search(int data[], int lb, int ub, int item)
{

    int start = lb, end = ub;
    int mid = (start + end) / 2;
    while (start <= end)
    {
        if (data[mid] == item)
        {
            return mid;
        }
        if (data[mid] > item)
        {
            end = mid - 1;
        }
        if (data[mid] < item)
        {
            start = mid + 1;
        }
    }

    return -1;
}