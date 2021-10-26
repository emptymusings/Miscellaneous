namespace Algorithms.Sorting
{
    using System;

    public enum SortDirections
    {
        Ascending,
        Descending
    }

    public class QuickSorter
    {
        public static void  Sort<T>(T[] values, SortDirections sortDirection = SortDirections.Ascending) where T : IComparable
        {
            PerformSort(values, 0, values.Length - 1, sortDirection);
        }

        private static void PerformSort<T>(T[] values, int left, int right, SortDirections sortDirection) where T : IComparable
        {
            int pivot = Partition(values, left, right, sortDirection);

            if (left < right)
            {
                if (pivot > 1)
                {
                    PerformSort(values, left, pivot - 1, sortDirection);
                }

                if (pivot + 1 < right)
                {
                    PerformSort(values, pivot, right, sortDirection);
                }
            }
        }

        private static int Partition<T>(T[] values, int left, int right, SortDirections sortDirection) where T : IComparable
        {
            T pivot = values[left];
            
            while(true)
            {
                while (
                    (sortDirection == SortDirections.Ascending && values[left].CompareTo(pivot) < 0) || 
                    (sortDirection == SortDirections.Descending && values[left].CompareTo(pivot) > 0))
                {
                    left++;

                    if (left == values.Length)
                    {
                        return right;
                    }
                }

                while (
                    (sortDirection == SortDirections.Ascending && values[right].CompareTo(pivot) > 0) || 
                    (sortDirection == SortDirections.Descending && values[right].CompareTo(pivot) < 0)
                    )
                {
                    right--;
                }

                if (left < right)
                {
                    if (values[left].CompareTo(values[right]) == 0)
                    {
                        right--;
                    }

                    if ((sortDirection == SortDirections.Ascending && values[left].CompareTo(values[right]) >= 0) || 
                        sortDirection == SortDirections.Descending && values[left].CompareTo(values[right]) <= 0)
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
