#include <stdio.h>
void selection_sort();
int main()
{
    int array[5] = {3, 2, 4, 1, 5};
    selection_sort(array, 5);

    return 0;
}

void selection_sort(int *arr[], int len)
{
    int i, j, small;
    for (i = 0; i < len; i++)
    {
        small = i;
        for (j = i + 1; j < len; j++)
        {
            if (arr[j] < arr[small])
            {
                small = j;
            }
        }
        if (i != small)
        {
            int temp = arr[i];
            arr[i] = arr[small];
            arr[small] = temp;
        }
    }
}