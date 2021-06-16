using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace serverside.api.Models
{
    public class ClassificadoOutput
    {
        public int Id { get; set; }

        public string Titulo { get; set; }

        public DateTime Data { get; set; }

        public string Descricao { get; set; }
    }
}
