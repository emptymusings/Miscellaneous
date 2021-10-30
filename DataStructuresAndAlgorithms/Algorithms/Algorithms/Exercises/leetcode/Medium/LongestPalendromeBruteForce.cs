using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algorithms.Exercises.leetcode.Medium
{
    public class LongestPalendromeBruteForce
    {
        public string LongestPalindrome(string s)
        {
            if (s == null || s.Length == 0) return null;
            if (s.Length == 1) return s;

            string longest = "";

            for (int i = 0; i < s.Length; i++)
            {
                for (int j = s.Length; j > i; j--)
                {
                    var substring = s.Substring(i, j - i);
                    if (IsPalendrome(substring) && j - i > longest.Length)
                    {
                        longest = substring;
                        break;
                    }
                }

                if (longest.Length + i > s.Length)
                {
                    break;
                }
            }

            return longest;
        }

        private bool IsPalendrome(string value)
        {
            for (int i = 0; i < value.Length / 2; i++)
            {
                if (value[i] != value[value.Length - 1 - i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}
