using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algorithms.Exercises.leetcode.Medium
{
    public class StringToInteger
    {
        public int MyAtoi(string s)
        {
            bool inDigits = false;
            bool isNegative = false;
            int result = 0;

            var test = 4 % 5;

            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == ' ' && !inDigits)
                {
                    continue;
                }

                if ((s[i] == '-' || s[i] == '+') && !inDigits)
                {
                    isNegative = s[i] == '-';

                    if (i + 1 < s.Length && char.IsNumber(s[i + 1]))
                    {
                        continue;
                    }
                    else
                    {
                        return 0;
                    }
                }

                if (!char.IsNumber(s[i]))
                {
                    break;
                }

                if (char.IsNumber(s[i]))
                {
                    inDigits = true;

                    if (result == 0)
                    {
                        result = Int32.Parse(s[i].ToString());
                    }
                    else
                    {

                        try
                        {
                            checked
                            {
                                result = (result * 10) + int.Parse(s[i].ToString());
                            }
                        }
                        catch(OverflowException)
                        {
                            return isNegative ? Int32.MinValue : Int32.MaxValue;
                        }
                    }
                }
            }

            return isNegative ? result * -1 : result;
        }
    }
}
