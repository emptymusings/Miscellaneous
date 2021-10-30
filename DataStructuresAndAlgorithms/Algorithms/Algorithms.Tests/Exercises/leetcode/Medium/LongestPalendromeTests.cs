using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Algorithms.Tests.Exercises.leetcode.Medium
{
    using Algorithms.Exercises.leetcode.Medium;

    [TestClass]
    public class LongestPalendromeTests
    {
        [TestMethod]
        public void LeetcodeTests_Succeeds()
        {
            var test = new LongestPalendromeBruteForce();

            var results = test.LongestPalindrome("babad");
            Assert.AreEqual("bab", results);

            results = test.LongestPalindrome("cbbd");
            Assert.AreEqual("bb", results);

            results = test.LongestPalindrome("a");
            Assert.AreEqual("a", results);

            results = test.LongestPalindrome("ac");
            Assert.AreEqual("a", results);
        }
    }
}
