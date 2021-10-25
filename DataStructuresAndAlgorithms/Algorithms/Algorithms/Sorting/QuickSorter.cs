namespace Algorithms.Sorting
{
    using System;

    public class QuickSorter
    {
        public static void  Sort<T>(T[] values) where T : IComparable
        {
            PerformSort(values, 0, values.Length - 1);
        }

        private static void PerformSort<T>(T[] values, int left, int right) where T : IComparable
        {
            int pivot = Partition(values, left, right);

            if (left < right)
            {
                if (pivot > 1)
                {
                    PerformSort(values, left, pivot - 1);
                }

                if (pivot + 1 < right)
                {
                    PerformSort(values, pivot, right);
                }
            }
        }

        private static int Partition<T>(T[] values, int left, int right) where T : IComparable
        {
            T pivot = values[left];

            while(true)
            {
                while (values[left].CompareTo(pivot) < 0)
                {
                    left++;

                    if (left == values.Length)
                    {
                        return right;
                    }
                }

                while (values[right].CompareTo(pivot) > 0)
                {
                    right--;
                }

                if (left < right)
                {
                    if (values[left].CompareTo(values[right]) == 0)
                    {
                        right--;
                    }

                    if (values[left].CompareTo(values[right]) >= 0)
                    {
                        T temp = values[left];
                        values[left] = values[right];
                        values[right] = temp;
                    }
                }
                else
                {
                    return right + 1;
                }
            }
        }
    }
}
