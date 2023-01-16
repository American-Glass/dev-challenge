using System.Text;

namespace MultiSearchAPI.Models
{
    public class Equipment
    {
        public string EquipmentId { get; set; }
            
        public string EquipmentName { get;set; }

        public static List<Equipment> Equipment_json_to_cs()
        {
            string fileUrl = @"../../data/equipments.json";
            if (System.IO.File.Exists(fileUrl))
            {
                Encoding isoLatin1 = Encoding.GetEncoding(28591);

                string justText = File.ReadAllText(fileUrl, isoLatin1);

                List<Equipment> equipments = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Equipment>>(justText);
                return equipments;

            }
            return  new List<Equipment>();
        }
    }
}
