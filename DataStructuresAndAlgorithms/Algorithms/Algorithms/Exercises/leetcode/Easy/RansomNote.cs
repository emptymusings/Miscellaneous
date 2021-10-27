using System.Collections.Generic;

namespace Algorithms.Exercises.leetcode.Easy
{
    public class RansomNote
    {
        public static bool CanConstruct(string ransomNote, string magazine)
        {
            if (string.IsNullOrEmpty(ransomNote)) return true;
            if (string.IsNullOrEmpty(magazine) || ransomNote.Length > magazine.Length) return false;

            if (ransomNote.Length == 1)
            {
                return magazine.IndexOf(ransomNote) >= 0;
            }

            var ransomeLookup = GetDictionary(ransomNote);
            var magazineLookup = GetDictionary(magazine);

            foreach (KeyValuePair<char, int> item in ransomeLookup)
            {
                if (!magazineLookup.ContainsKey(item.Key)) return false;
                if (magazineLookup[item.Key] < item.Value) return false;
            }

            return true;
        }

        private static Dictionary<char, int> GetDictionary(string source)
        {
            Dictionary<char, int> result = new Dictionary<char, int>();
            int length = (int)source.Length / 2;

            for (int i = 0; i < length; i++)
            {
                if (!result.ContainsKey(source[i]))
                {
                    result.Add(source[i], 1);
                }
                else
                {
                    result[source[i]] += 1;
                }

                if (!result.ContainsKey(source[source.Length - 1 - i]))
                {
                    result.Add(source[source.Length - 1 - i], 1);
                }
                else
                {
                    result[source[source.Length - i - 1]] += 1;
                }
            }

            if (length * 2 < source.Length)
            {
                if (result.ContainsKey(source[length]))
                {
                    result[source[length]] += 1;
                }
                else
                {
                    result.Add(source[length], 1);
                }
            }

            return result;
        }
    }
}
