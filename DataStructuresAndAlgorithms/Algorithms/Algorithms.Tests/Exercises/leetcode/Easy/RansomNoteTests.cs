using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Algorithms.Tests.Exercises.leetcode.Easy
{
    using Algorithms.Exercises.leetcode.Easy;

    [TestClass]
    public class RansomNoteTests
    {
        [TestMethod]
        public void LeetcodeTests_Succeeds()
        {
            string[] values = new string[]
            {
                "a",
                "b",
                "aa",
                "ab",
                "aa",
                "aab",
            };
            
            Assert.IsFalse(RansomNote.CanConstruct("a", "b"));
            Assert.IsFalse(RansomNote.CanConstruct("aa", "ab"));
            Assert.IsTrue(RansomNote.CanConstruct("aa", "aab"));
        }
    }
}
