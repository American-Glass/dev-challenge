using Microsoft.AspNetCore.Mvc;
using MultiSearchAPI.Models;

namespace MultiSearchAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultiSearchController : Controller
    {
        [HttpGet]

        public MultiSearch? MultiSearchFilter()
        {
            Console.Write("Call Method");
            List<Equipment> equipmentJson = Equipment.Equipment_json_to_cs();
            List<Workforce> workforcesJson = Workforce.Workforce_json_to_cs();


            List<SalesOrder> salesOrderJson = SalesOrder.SalesOrder_json_to_cs();
            List<PurchaseOrder> purchaseOrdersJson = PurchaseOrder.PurchaseOrder_json_to_cs();
            List<Material> materialJson = Material.Material_json_to_cs();
            MultiSearch multiSearch = new MultiSearch();


            multiSearch.purchaseOrders = purchaseOrdersJson;
            multiSearch.workforce = workforcesJson;
            multiSearch.equipments = equipmentJson;
            multiSearch.materials = materialJson;
            multiSearch.sales = salesOrderJson;

            return multiSearch;
        }


        [HttpGet("{value}")]
        public MultiSearch MultiSearch(String value)
        {
            Console.WriteLine("Call Method");
            String valueFilter = value.ToLower();



            List<Equipment> equipmentJson = Equipment.Equipment_json_to_cs();
            List<Equipment> equipments = new List<Equipment>();

            for (int i = 0; i < equipmentJson.Count; i++)
            {
                if (equipmentJson[i].EquipmentName.ToLower().Contains(valueFilter) || equipmentJson[i].EquipmentId.ToLower().Contains(valueFilter))
                {
                    equipments.Add(equipmentJson[i]);
                }

            }


            List<Workforce> workforcesJson = Workforce.Workforce_json_to_cs();
            List<Workforce> workforces = new List<Workforce>();

            for (int i = 0; i < workforcesJson.Count; i++)
            {
                if (workforcesJson[i].Name.ToLower().Contains(valueFilter) || workforcesJson[i].WorkforceId.ToString().ToLower().Contains(valueFilter) || workforcesJson[i].Shift.ToLower().Contains(valueFilter))
                {
                    workforces.Add(workforcesJson[i]);
                }

            }

            List<SalesOrder> salesOrderJson = SalesOrder.SalesOrder_json_to_cs();
            List<SalesOrder> salesOrders = new List<SalesOrder>();

            for (int i = 0; i < salesOrderJson.Count; i++)
            {
                if (salesOrderJson[i].MaterialName.ToLower().Contains(valueFilter) || salesOrderJson[i].MaterialId.ToLower().Contains(valueFilter) || salesOrderJson[i].SalesOrderId.ToString().ToLower().Contains(valueFilter) ||
                    salesOrderJson[i].Customer.ToLower().Contains(valueFilter) || salesOrderJson[i].DeliveryDate.ToLower().Contains(valueFilter) || salesOrderJson[i].TotalValue.ToString().ToLower().Contains(valueFilter) ||
                    salesOrderJson[i].Quantity.ToString().ToLower().Contains(valueFilter))
                {
                    salesOrders.Add(salesOrderJson[i]);
                }

            }
            List<PurchaseOrder> purchaseOrdersJson = PurchaseOrder.PurchaseOrder_json_to_cs();
            List<PurchaseOrder> purchaseOrders = new List<PurchaseOrder>();

            for (int i = 0; i < purchaseOrdersJson.Count; i++)
            {
                if (purchaseOrdersJson[i].MaterialName.ToLower().Contains(valueFilter) || purchaseOrdersJson[i].PurchaseOrderId.ToString().ToLower().Contains(valueFilter) || purchaseOrdersJson[i].DeliveryDate.ToLower().Contains(valueFilter) || purchaseOrdersJson[i].Supplier.ToLower().Contains(valueFilter) ||
                    purchaseOrdersJson[i].MaterialId.ToLower().Contains(valueFilter) || purchaseOrdersJson[i].TotalCost.ToString().ToLower().Contains(valueFilter) ||
                    purchaseOrdersJson[i].Quantity.ToString().ToLower().Contains(valueFilter))
                {
                    purchaseOrders.Add(purchaseOrdersJson[i]);
                }

            }
            List<Material> materialJson = Material.Material_json_to_cs();
            List<Material> materials = new List<Material>();

            for (int i = 0; i < materialJson.Count; i++)
            {
                if (materialJson[i].MaterialId.ToLower().Contains(valueFilter) || materialJson[i].MaterialName.ToLower().Contains(valueFilter))
                {
                    materials.Add(materialJson[i]);
                }

            }
            MultiSearch multiSearch = new MultiSearch();


            multiSearch.purchaseOrders = purchaseOrders;
            multiSearch.workforce = workforces;
            multiSearch.equipments = equipments;
            multiSearch.materials = materials;
            multiSearch.sales = salesOrders;

            return multiSearch;
        }
    }
}
