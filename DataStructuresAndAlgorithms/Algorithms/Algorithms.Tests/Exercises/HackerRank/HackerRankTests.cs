using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Algorithms.Exercises.HackerRank;

namespace Algorithms.Tests.Exercises.HackerRank
{
    [TestClass]
    public class HackerRankTests
    {
        [TestMethod]
        public void SampleOneTest()
        {
            List<List<string>> list = new List<List<string>>();

            list.Add(new List<string>() { "p1", "1", "2" });
            list.Add(new List<string>() { "p2", "2", "1" });
            //list.Add(new List<string>() { "item3", "17", "8" });

            List<string> expected = new List<string>() { "p1" };
            List<string> actual = WebPagination.fetchItemsToDisplay(list, 0, 0, 1, 0);

            Assert.AreEqual(expected.Count(), actual.Count());

            for (int i = 0; i < expected.Count(); i++)
            {
                Assert.AreEqual(expected[i], actual[i]);
            }
        }
    }
}
