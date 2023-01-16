using System.Text;

namespace MultiSearchAPI.Models
{
    public class SalesOrder
    {
        public int SalesOrderId { get; set; }

        public string DeliveryDate { get; set; }
        public string Customer { get; set; }
        public string MaterialId { get; set; }

        public string MaterialName { get; set; }
        public double Quantity { get; set; }
        public double TotalValue { get; set; }

        public static List<SalesOrder> SalesOrder_json_to_cs()
        {
            string fileUrl = "../../data/sales_orders.json";
            if (System.IO.File.Exists(fileUrl))
            {
                Encoding isoLatin1 = Encoding.GetEncoding(28591);

                string justText = File.ReadAllText(fileUrl, isoLatin1);

                List<SalesOrder> salesOrders = Newtonsoft.Json.JsonConvert.DeserializeObject<List<SalesOrder>>(justText);
                return salesOrders;

            }
            return new List<SalesOrder>();
        }
    }
}

