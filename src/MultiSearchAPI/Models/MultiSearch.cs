namespace MultiSearchAPI.Models
{
    public class MultiSearch
    {
        public List<Equipment> equipments { get; set; }
        public List<Material> materials { get; set; }
        public List<PurchaseOrder> purchaseOrders { get; set; }
        public List<SalesOrder> sales { get; set; }
        public List<Workforce> workforce { get; set; }


    }
}
