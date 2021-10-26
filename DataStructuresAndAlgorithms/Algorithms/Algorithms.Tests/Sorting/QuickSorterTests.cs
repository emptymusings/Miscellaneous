using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Algorithms.Tests.Sorting
{
    using Algorithms.Sorting;

    [TestClass]
    public class QuickSorterTests
    {
        Random _random;

        [TestMethod]
        public void SetIntegers_Ascending_Succeeds()
        {
            var values = new int[] { 1, 10, 2, 9, 3, 8, 4, 7, 5, 6 };
            var expected = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            // Apply quicksort asdfafda
            QuickSorter.Sort(values);

            for (int i = 0; i < values.Length; i++)
            {
                var expectedValue = expected[i];
                var actual = values[i];
                Assert.AreEqual(expectedValue, actual);
            }
        }

        [TestMethod]
        public void SetIntegers_Descending_Succeeds()
        {
            var values = new int[] { 1, 10, 2, 9, 3, 8, 4, 7, 5, 6 };
            var expected = new int[] { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 };

            // Apply quicksort asdfafda
            QuickSorter.Sort(values, SortDirections.Descending);

            for (int i = 0; i < values.Length; i++)
            {
                var expectedValue = expected[i];
                var actual = values[i];
                Assert.AreEqual(expectedValue, actual);
            }
        }

        [TestMethod]
        public void RandomIntegers_Ascending_SmallPositive_Succeeds()
        {
            _random = new Random(0);
            List<int> values = new List<int>();

            for (int i = 0; i < 10000; i++)
            {
                values.Add(_random.Next(-5000, int.MaxValue));
            }


            var actual = values.ToArray();
            values.Sort();
            QuickSorter.Sort(actual);
            int idx = 0;
            foreach(int item in values)
            {
                Assert.AreEqual(item, actual[idx]);
                idx++;
            }
        }

        [TestMethod]
        public void RandomIntegers_Descending_SmallPositive_Succeeds()
        {
            _random = new Random(0);
            List<int> values = new List<int>();

            for (int i = 0; i < 10000; i++)
            {
                values.Add(_random.Next(-5000, int.MaxValue));
            }

            var actual = values.ToArray();
            var ordered = values.OrderByDescending(x => x);
            values = ordered.ToList();

            QuickSorter.Sort(actual, SortDirections.Descending);

            int idx = 0;
            foreach (int item in values)
            {
                Assert.AreEqual(item, actual[idx]);
                idx++;
            }
        }

        [TestMethod]
        public void RandomChars_Ascending_Succeeds()
        {
            List<char> actual = new List<char>();
            List<char> expected = new List<char>();

            _random = new Random(0);

            for (int i = 0; i <= 26; i++)
            {
                var letterValue = _random.Next(97, 122);
                actual.Add((char)letterValue);
                expected.Add((char)letterValue);
            }

            expected.Sort();
            var sorted = actual.ToArray();

            QuickSorter.Sort(sorted);

            int idx = 0;

            foreach(var c in sorted)
            {
                Assert.AreEqual(expected[idx], c);
                idx++;
            }

        }

        [TestMethod]
        public void RandomChars_Descending_Succeeds()
        {
            List<char> actual = new List<char>();
            List<char> expected = new List<char>();

            _random = new Random(0);

            for (int i = 0; i <= 26; i++)
            {
                var letterValue = _random.Next(97, 122);
                actual.Add((char)letterValue);
                expected.Add((char)letterValue);
            }

            var ordered = expected.OrderByDescending(x => x);
            expected = ordered.ToList();

            var sorted = actual.ToArray();

            QuickSorter.Sort(sorted, SortDirections.Descending);

            int idx = 0;

            foreach (var c in sorted)
            {
                Assert.AreEqual(expected[idx], c);
                idx++;
            }

        }

    }
}
