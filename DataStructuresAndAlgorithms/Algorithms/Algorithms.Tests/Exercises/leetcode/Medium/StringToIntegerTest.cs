using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Algorithms.Exercises.leetcode.Medium;

namespace Algorithms.Tests.Exercises.leetcode.Medium
{
    [TestClass]
    public class StringToIntegerTesta
    {
        [TestMethod]
        public void StringToIntegerTest_Passes()
        {
            var atoi = new StringToInteger();
            var test = "2147483648";
            var expected = 2147483647;
            var actual = atoi.MyAtoi(test);

            Assert.AreEqual(expected, actual);
        }
    }
}
