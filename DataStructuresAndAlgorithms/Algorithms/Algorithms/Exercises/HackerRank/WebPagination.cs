using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace Algorithms.Exercises.HackerRank
{
    public class WebPagination
    {
        public static List<string> fetchItemsToDisplay(List<List<string>> items, int sortParameter, int sortOrder, int itemsPerPage, int pageNumber)
        {
            if (items.Count() == 1)
            {
                return new List<string>() { items[0][0] };
            }
            var results = new List<string>();
            List<string> sorted = null;

            if (sortParameter == 0)
            {
                sorted = sortForName(items, sortOrder);
            }
            else
            {
                sorted = sortForNumber(items, sortParameter, sortOrder);
            }

            var startIndex = (pageNumber) * itemsPerPage;
            var endIndex = Math.Min(startIndex + itemsPerPage, sorted.Count() - 1);

            for (int i = startIndex; i < endIndex; i++)
            {
                results.Add(sorted[i]);
            }

            return results;
        }

        private static List<string> sortForNumber(List<List<string>> items, int sortParamter, int sortOrder)
        {
            Dictionary<string, decimal> values = new Dictionary<string, decimal>();
            List<string> results = new List<string>();
            IOrderedEnumerable<KeyValuePair<string, decimal>> sorted = null;

            foreach(var item in items)
            {
                values.Add(item[0], Convert.ToDecimal(item[sortParamter]));
            }

            if (sortOrder == 0)
            {
                sorted = values.OrderBy(x => x.Value);
                
            }

            if (sortOrder == 1)
            {
                sorted = values.OrderByDescending(x => x.Value);
            }

            foreach (var item in sorted)
            {
                results.Add(item.Key);
            }

            return results;
        }

        private static List<string> sortForName(List<List<string>> items, int sortOrder)
        {
            List<string> names = new List<string>();

            foreach(var item in items)
            {
                names.Add(item[0]);
            }

            if (sortOrder == 0)
            {
                return names.OrderBy(x => x).ToList();
            }
            else
            {
                return names.OrderByDescending(x => x).ToList();
            }
        }
    }
}
