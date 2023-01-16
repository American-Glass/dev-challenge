using System.Text;

namespace MultiSearchAPI.Models
{
    public class Material
    {
        public string MaterialId { get; set; }
        public string MaterialName { get; set; }

        public static List<Material> Material_json_to_cs()
        {

            string fileUrl = "../../data/materials.json";
            if (System.IO.File.Exists(fileUrl))
            {
                Encoding isoLatin1 = Encoding.GetEncoding(28591);

                string justText = File.ReadAllText(fileUrl, isoLatin1);

                List<Material> materials = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Material>>(justText);
                return materials;

            }
            return new List<Material>();
        }

    }
}

  
