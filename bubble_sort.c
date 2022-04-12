#include <stdio.h>
void bubble_sort(int arr[], int len);
void main()
{
    int array[5] = {3, 2, 4, 1, 5};
    bubble_sort(array, 5);
    for (int i = 0; i < 5; i++)
    {
        printf("%d\n", array[i]);
    }
}

void bubble_sort(int arr[], int len)
{
    int i, j;
    for (i = 0; i < len; i++)
    {
        for (j = 0; j < (len - 1) - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}