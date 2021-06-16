using System;

namespace serverside.api.Entity
{
    public class Classificado
    {
        public int Id { get; set; }
        
        public string Titulo { get; set; }

        public DateTime Data { get; set; }

        public string Descricao { get; set; }
    }
}
