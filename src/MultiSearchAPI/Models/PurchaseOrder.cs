using System.Text;

namespace MultiSearchAPI.Models
{
    public class PurchaseOrder
    {
        public int PurchaseOrderId { get; set; }

        public string DeliveryDate { get; set; }
        public string Supplier { get; set; }
        public string MaterialId { get; set; }
        public string MaterialName { get; set; }
        public double Quantity { get; set; }

        public double TotalCost { get; set; }

        public static List<PurchaseOrder> PurchaseOrder_json_to_cs()
        {
            string fileUrl = "../../data/purchase_orders.json";
            if (System.IO.File.Exists(fileUrl))
            {
                Encoding isoLatin1 = Encoding.GetEncoding(28591);

                string justText = File.ReadAllText(fileUrl, isoLatin1);

                List<PurchaseOrder> purchaseOrders = Newtonsoft.Json.JsonConvert.DeserializeObject<List<PurchaseOrder>>(justText);
                return purchaseOrders;

            }
            return new List<PurchaseOrder>();
        }
    }
}

