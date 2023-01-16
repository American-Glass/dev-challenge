using System.IO;
using System.Text;

namespace MultiSearchAPI.Models
{
    public class Workforce
    {
        public int WorkforceId { get; set; }
        public string Name { get; set; }
        public string Shift { get; set; }

        public static List<Workforce> Workforce_json_to_cs()
        {
            string fileUrl = "../../data/workforce.json";

            if (System.IO.File.Exists(fileUrl))
            {
                Encoding isoLatin1 = Encoding.GetEncoding(28591);

                string justText = File.ReadAllText(fileUrl, isoLatin1);
                List<Workforce> workforces = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Workforce>>(justText);
                return workforces;
                
            }
            return new List<Workforce>();
        }
    }
}

