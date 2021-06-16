using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using serverside.api.Entity;
using serverside.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace serverside.api.Data.Repositories
{
    public class Repository : IRepository
    {
        private readonly Context _context;

        public Repository(Context contexto)
        {
            _context = contexto;
        }

        public void Add(Classificado classificado)
        {
            _context.Classificado.Add(classificado);
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public IList<Classificado> Get()
        {
            return _context.Classificado.ToList();
        }
    }
}
