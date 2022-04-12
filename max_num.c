#include <stdio.h>
// step-1 : Start
// step-2 : Read a,b,c
// step-3 : is(a > b and a > c)?
// 1) Yes, Print a is greater then b and a.
// 2) No, Then go to step-4
// step-4 : is(b > a and b > c)?
// 1) Yes, Print b is greater then a and c
// 2) No, Then go to step-5
// step-5 : Print c is greater then a and b

int main()
{
    int a, b, c;
    printf("Enter a, b, c  : ");
    scanf("%d %d %d", &a, &b, &c);
    if (a > b && a > c)
    {
        printf("a is greater then b and a.");
    }
    else if (b > a && b > c)
    {
        printf("b is greater then a and c.");
    }
    else
    {
        printf("c is greater then a and b.");
    }
}