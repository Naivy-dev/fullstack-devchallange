using Microsoft.AspNetCore.Mvc;
using serverside.api.Data;
using serverside.api.Entity;
using serverside.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace serverside.api.Controllers
{
    [Route("api/classificados")]
    [ApiController]
    public class ClassificadoController : Controller
    {
        private readonly IRepository _repository;

        public ClassificadoController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Post(ClassificadoInput classificadoInput)
        {
            Classificado classificado = new Classificado();
            classificado.Titulo = classificadoInput.Titulo;
            classificado.Descricao = classificadoInput.Descricao;
            classificado.Data = DateTime.Now;
            _repository.Add(classificado);
            _repository.Commit();

            return Created("", classificado);
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> Get()
        {
            var classificado = _repository.Get().Select(s => new ClassificadoOutput()
            {
                Titulo = s.Titulo,
                Data = s.Data,
                Descricao = s.Descricao,            
            });
           

            return Ok(classificado);
        }
    }
}
