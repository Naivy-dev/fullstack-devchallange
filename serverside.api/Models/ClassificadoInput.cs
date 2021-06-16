using System;
using System.ComponentModel.DataAnnotations;

namespace serverside.api.Models
{
    public class ClassificadoInput
    {
        [Required]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "O título é obrigatório e deve conter pelo menos 3 caracteres")]
        public string Titulo { get; set; }

        public DateTime Data { get; set; }
        [Required]
        [StringLength(500, MinimumLength = 10, ErrorMessage = "A descrição é obrigatória e deve conter pelo menos 3 caracteres, e no máximo 500 caracteres")]
        public string Descricao { get; set; }
}
}
