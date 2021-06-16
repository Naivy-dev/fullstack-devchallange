using serverside.api.Entity;
using System.Collections.Generic;

namespace serverside.api.Data
{
    public interface IRepository
    {
        void Add(Classificado classificado);
        void Commit();
        IList<Classificado> Get();
    }
}
